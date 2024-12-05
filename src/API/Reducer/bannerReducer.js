import { createSlice } from "@reduxjs/toolkit";
import { setAlertData } from "./alertReducer";
import { apiRequest } from "../../MIS/api";
import { handleInstanceIsLoading } from "./menuReducer";
import { handlePreviewFiles } from "./fileReducer";
 
const bannerReducer = createSlice({
  name: "banner",
  initialState: { 
    bannerData: [],
    bannerList: [],
    bannerPageData: {},
  },

  reducers: {       
    setBannerList(state, action) {
      state.bannerList = action.payload;
    },
    setBannerPageData(state, action) {
      state.bannerPageData = action.payload;
    },   
    setBannerData(state, action) {
      state.bannerData = action.payload;
    },

  },
});

export const {
    setBannerList,
    setBannerPageData,
    setBannerData,   
} = bannerReducer.actions;
export default bannerReducer.reducer;

 

export const saveBanner = (data, reset,setPhotos) => {
  return async function actionData(dispatch, getState) {    
    dispatch(handleInstanceIsLoading());
    let method="post";    
    try {      
      const res = await apiRequest(method, "banners/", data);
      if (res?.code == 200) {
        if (Object.keys(res?.data).length > 0) {
          dispatch(
            setAlertData({
              type: "success",
              msg: res?.msg,
              code: 200,
            })
          );
          reset();        
          setPhotos([]);    
          dispatch(handlePreviewFiles([]));
          await dispatch(getBannerList({ page: 1, limit: 100 }));
        } else {
          dispatch(
            setAlertData({
              type: "error",
              msg: res?.msg,
              code: 100,
            })
          );
        }
      }
    } catch (error) {
      dispatch(
        setAlertData({
          type: "error",
          msg: "something went wrong! please try again",
          code: 100,
        })
      );
    } finally {
      dispatch(handleInstanceIsLoading());      
    }
  };
};

export const getBannerList = (data) => {  
  const queryParams = new URLSearchParams(data).toString();
  return async function actionData(dispatch, getState) {
    try {      
      const res = await apiRequest("get", `banners/?${queryParams}`);
      if (res?.code == 200) {
        if (res?.data.length > 0) {
          dispatch(setBannerList(res?.data));
          dispatch(setBannerPageData(res?.meta));                    
        }else{
          dispatch(setBannerList([]));
          dispatch(setBannerPageData([]));      
        }
      }
    } catch (error) {      
      dispatch(
        setAlertData({
          type: "error",
          msg: "something went wrong! please try again",
          code: 100,
        })
      );
    } finally {
    }
  };
};
 

export const deleteBanner = (data) => {
  return async function actionData(dispatch, getState) {
    dispatch(handleInstanceIsLoading());
    try {
      // POST request with custom headers
      const res = await apiRequest("delete", `banners/`, data);
      if (res?.code == 200) {
        if (res?.data > 0) {
          dispatch(
            setAlertData({
              type: "success",
              msg: res?.msg,
              code: 200,
            })
          );
          await dispatch(getBannerList({ page: 1, limit: 100 }));
        } else {
          dispatch(
            setAlertData({
              type: "error",
              msg: "Delete failed!Please try again",
              code: 100,
            })
          );
        }
      }
    } catch (error) {      
      dispatch(
        setAlertData({
          type: "error",
          msg: "something went wrong! please try again",
          code: 100,
        })
      );
    } finally {
      dispatch(handleInstanceIsLoading());
    }
  };
};


