import React, { useId } from 'react';
import { useController } from 'react-hook-form';

/**
 * Reusable Form Input component with react-hook-form integration
 * Supports bilingual (fa/en) and RTL
 */
const FormInput = React.memo(function FormInput({
  name,
  control,
  label,
  placeholder,
  type = 'text',
  disabled = false,
  className = '',
  inputClassName = '',
  labelClassName = '',
  required = false,
  autoComplete = 'off',
  id: providedId,
  ...props
}) {
  const generatedId = useId();
  const inputId = providedId || `${name}-${generatedId}`;
  const errorId = `${inputId}-error`;
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
          htmlFor={inputId}
          className={`block text-sm font-medium text-gray-700 ${
            hasError ? 'text-red-600' : ''
          } ${labelClassName}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        aria-invalid={hasError ? "true" : undefined}
        aria-describedby={hasError ? errorId : undefined}
        className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] ${
          hasError
            ? 'border-red-500 bg-red-50'
            : 'border-gray-200 bg-white hover:border-gray-300'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${inputClassName}`}
        {...field}
        {...props}
      />
      
      {hasError && (
        <p id={errorId} role="alert" className="text-sm text-red-600 font-medium">
          {error.message}
        </p>
      )}
    </div>
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;
