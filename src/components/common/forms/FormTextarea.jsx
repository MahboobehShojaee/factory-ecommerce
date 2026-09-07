import React from 'react';
import { useController } from 'react-hook-form';

/**
 * Reusable Form Textarea component with react-hook-form integration
 * Supports bilingual (fa/en) and RTL
 */
const FormTextarea = React.memo(function FormTextarea({
  name,
  control,
  label,
  placeholder,
  disabled = false,
  className = '',
  textareaClassName = '',
  labelClassName = '',
  required = false,
  rows = 4,
  ...props
}) {
  const {
    field,
    fieldState: { error, isTouched },
  } = useController({
    name,
    control,
    defaultValue: '',
  });

  const hasError = error && isTouched;

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm font-medium text-gray-700 ${
            hasError ? 'text-red-600' : ''
          } ${labelClassName}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] resize-vertical ${
          hasError
            ? 'border-red-500 bg-red-50'
            : 'border-gray-200 bg-white hover:border-gray-300'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${textareaClassName}`}
        {...field}
        {...props}
      />
      
      {hasError && (
        <p className="text-sm text-red-600 font-medium">
          {error.message}
        </p>
      )}
    </div>
  );
});

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;
