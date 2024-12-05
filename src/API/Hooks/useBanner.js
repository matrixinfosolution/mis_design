import { useMemo } from "react";

 
// Hook for global form configuration
export const useBannerConfig = (customValues = {}, customValidation = {}) => {
  // Default values (with possibility of dynamic or passed values)
  const defaultValues = useMemo(() => ({
    id: null,    
    imgpath: "",
    title:"-",    
    ...customValues, // Allows custom default values passed from the component
  }), [customValues]);

  // Validation schema
  const validationSchema = useMemo(() => ({
   
    // You can add more fields here
  }), [customValidation]);

  return { defaultValues, validationSchema };
};
