import React, { useId } from 'react';
import { useController } from 'react-hook-form';

/**
 * Reusable Form Select component with react-hook-form integration
 * Supports bilingual (fa/en) and RTL
 */
const FormSelect = React.memo(function FormSelect({
  name,
  control,
  label,
  placeholder,
  options = [],
  disabled = false,
  className = '',
  selectClassName = '',
  labelClassName = '',
  required = false,
  id: providedId,
  ...props
}) {
  const generatedId = useId();
  const selectId = providedId || `${name}-${generatedId}`;
  const errorId = `${selectId}-error`;
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
          htmlFor={selectId}
          className={`block text-sm font-medium text-gray-700 ${
            hasError ? 'text-red-600' : ''
          } ${labelClassName}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <select
        id={selectId}
        disabled={disabled}
        aria-invalid={hasError ? "true" : undefined}
        aria-describedby={hasError ? errorId : undefined}
        className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] ${
          hasError
            ? 'border-red-500 bg-red-50'
            : 'border-gray-200 bg-white hover:border-gray-300'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${selectClassName}`}
        {...field}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {hasError && (
        <p id={errorId} role="alert" className="text-sm text-red-600 font-medium">
          {error.message}
        </p>
      )}
    </div>
  );
});

FormSelect.displayName = 'FormSelect';

export default FormSelect;
