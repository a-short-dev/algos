import { InputHTMLAttributes } from 'react';
import { FieldErrors, FieldValue, FieldValues, UseFormRegister } from 'react-hook-form';

interface FormInput
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register: UseFormRegister<FieldValue<any>>;
  id: string;
  label?: string;
  errorMessage: FieldErrors;
}

export const FormInput = ({
  register,
  id,
  label,
  errorMessage,
  ...options
}: FormInput) => {
  return (
    <>
      <label
        htmlFor={id}
        className='text-xs uppercase'>
        {label}
      </label>
      <input
        className={`
        ${errorMessage[id] ? 'border-red-200' : ''}
        w-full 
        border 
        outline-none 
        rounded-md p-2'`}
        {...register(id)}
        {...options}
      />
      <span>
        <>{errorMessage[id]?.message}</>
      </span>
    </>
  );
};
