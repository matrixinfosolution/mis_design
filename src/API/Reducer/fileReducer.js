import { createSlice } from "@reduxjs/toolkit"; 
import { setConfirmDialogData } from "./confirmDialogReducer";
import { callAjax } from "../../MIS/Global";
import { setAlertData } from "./alertReducer";

  

const fileReducer = createSlice({
    name: 'file',
    initialState: {
        files:[],
        previewFiles:[],
    },

    reducers: {           
        setFiles(state, action) {
            state.files = action.payload;
        },
        setPreviewFiles(state, action) {
          state.previewFiles = action.payload;
      },          
                     
    }
});

export const {setFiles,setPreviewFiles} = fileReducer.actions;
export default fileReducer.reducer;
 
export const handleUploadFiles = (data) => {
    return function actionData(dispatch) {
      dispatch(setFiles(data));
    };
  };

  export const handlePreviewFiles = (data) => {
    return function actionData(dispatch) {
      dispatch(setPreviewFiles(data));
    };
  };

  export const handleDeleteFiles = (index) => {
    return function actionData(dispatch,getState) {
      const {files,previewFiles}=getState().file;
      dispatch(setFiles(files.filter((_, i) => i !== index)));
      dispatch(setPreviewFiles(previewFiles.filter((_, i) => i !== index)));
    };
  };
