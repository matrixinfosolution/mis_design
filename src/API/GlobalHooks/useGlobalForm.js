import { useForm } from "react-hook-form";

// Global form hook
export const useGlobalForm = (defaultValues, validationSchema, onSubmit, onError) => {
  const formMethods = useForm({
    mode: "onChange", // You can use "onBlur" or "onSubmit" if preferred
    defaultValues,
  });

  const { register, handleSubmit, setValue, getValues, setFocus, reset, formState } = formMethods;
  const { errors } = formState;

  return {
    register: (name, options = {}) => register(name, { ...validationSchema[name], ...options }),
    handleSubmit: handleSubmit(onSubmit, onError),
    setValue,
    getValues,
    setFocus,
    reset,
    errors,
  };
};
