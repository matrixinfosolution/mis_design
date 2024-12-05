//useMutationWithLoader.js

 import { useMutation } from '@tanstack/react-query';

const useMutationWithLoader = (mutationFn) => {
  return useMutation({
    mutationFn,
    onSuccess: (data) => {
    //   console.log('Operation successful:', data);   
    return data;   
    },
    onError: (error) => {
      return error;   
      // console.error('Error during operation:', error);  
    },
  });
};

export default useMutationWithLoader;
