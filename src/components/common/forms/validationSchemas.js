import { z } from 'zod';
import { normalizeDigits } from '../../../lib/normalizeDigits.js';

/**
 * Bilingual validation messages
 */
const messages = {
  en: {
    required: 'This field is required',
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number',
    minLength: (min) => `Must be at least ${min} characters`,
    maxLength: (max) => `Must be at most ${max} characters`,
    min: (min) => `Must be at least ${min}`,
    max: (max) => `Must be at most ${max}`,
    pattern: 'Invalid format',
    atLeastOne: 'Please select at least one option',
  },
  fa: {
    required: 'این فیلد الزامی است',
    email: 'لطفاً ایمیل معتبر وارد کنید',
    phone: 'لطفاً شماره تلفن معتبر وارد کنید',
    minLength: (min) => `حداقل باید ${min} کاراکتر باشد`,
    maxLength: (max) => `حداکثر می‌تواند ${max} کاراکتر باشد`,
    min: (min) => `حداقل باید ${min} باشد`,
    max: (max) => `حداکثر می‌تواند ${max} باشد`,
    pattern: 'فرمت نامعتبر است',
    atLeastOne: 'لطفاً حداقل یک گزینه انتخاب کنید',
  },
};

/**
 * Get validation message based on language
 */
const getMessage = (lang, key, ...args) => {
  const langMessages = messages[lang] || messages.en;
  const message = langMessages[key];
  return typeof message === 'function' ? message(...args) : message;
};

/**
 * Create bilingual validation error message
 */
const createBilingualMessage = (lang, key, ...args) => {
  return getMessage(lang, key, ...args);
};

/**
 * Unified Contact Form schema (general inquiry + quote request)
 */
export const createContactFormSchema = (lang = 'en') => {
  const baseSchema = z.object({
    inquiryType: z.enum(['general', 'quote'], {
      required_error: createBilingualMessage(lang, 'required'),
    }),

    company: z
      .string()
      .min(1, createBilingualMessage(lang, 'required'))
      .min(2, createBilingualMessage(lang, 'minLength', 2))
      .max(100, createBilingualMessage(lang, 'maxLength', 100)),

    person: z
      .string()
      .min(1, createBilingualMessage(lang, 'required'))
      .min(2, createBilingualMessage(lang, 'minLength', 2))
      .max(50, createBilingualMessage(lang, 'maxLength', 50)),

    email: z
      .string()
      .min(1, createBilingualMessage(lang, 'required'))
      .email(createBilingualMessage(lang, 'email')),

    phone: z
      .string()
      .min(1, createBilingualMessage(lang, 'required'))
      .transform(normalizeDigits)
      .pipe(
        z
          .string()
          .regex(/^[+]?[\d\s()-]+$/, createBilingualMessage(lang, 'phone'))
          .min(10, createBilingualMessage(lang, 'minLength', 10))
          .max(20, createBilingualMessage(lang, 'maxLength', 20)),
      ),

    projectType: z
      .string()
      .min(1, createBilingualMessage(lang, 'required')),

    selectedCables: z
      .array(z.string())
      .min(1, createBilingualMessage(lang, 'atLeastOne')),

    quantity: z.string().optional(),

    urgency: z.string().optional(),

    details: z
      .string()
      .max(1000, createBilingualMessage(lang, 'maxLength', 1000))
      .optional(),

    terms: z
      .boolean()
      .refine((val) => val === true, createBilingualMessage(lang, 'required')),

    website: z.string().max(0).optional(),
  });

  return baseSchema.superRefine((data, ctx) => {
    if (data.inquiryType !== 'quote') return;

    const quantity = normalizeDigits(data.quantity || "");
    if (!quantity || quantity.trim().length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['quantity'],
        message: createBilingualMessage(lang, 'required'),
      });
    }

    if (!data.urgency || !['normal', 'urgent', 'critical'].includes(data.urgency)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['urgency'],
        message: createBilingualMessage(lang, 'required'),
      });
    }
  });
};

/** @deprecated Use createContactFormSchema — kept for reference during migration */
export const createQuotationFormSchema = createContactFormSchema;

/**
 * Generic form schema factory
 */
export const createFormSchema = (lang, schemaDefinition) => {
  return z.object(schemaDefinition);
};

/**
 * Common validation patterns
 */
export const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[\d\s()-]+$/,
  name: /^[a-zA-Z\s\u0600-\u06FF]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
};

/**
 * Common field validations
 */
export const commonValidations = {
  required: (lang) => ({
    required_error: createBilingualMessage(lang, 'required'),
  }),
  
  email: (lang) => ({
    required_error: createBilingualMessage(lang, 'required'),
    invalid_type_error: createBilingualMessage(lang, 'email'),
  }),
  
  phone: (lang) => ({
    required_error: createBilingualMessage(lang, 'required'),
    invalid_type_error: createBilingualMessage(lang, 'phone'),
  }),
  
  minLength: (min, lang) => ({
    min_value: min,
    message: createBilingualMessage(lang, 'minLength', min),
  }),
  
  maxLength: (max, lang) => ({
    max_value: max,
    message: createBilingualMessage(lang, 'maxLength', max),
  }),
};
