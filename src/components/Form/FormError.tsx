import { FieldError } from "react-hook-form";

const FormError = (message: FieldError) => {
  return <span className='text-xs text-red-400'>{message.message}</span>;
};

export default FormError;
