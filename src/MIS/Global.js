import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Loader from "../Components/loader/Loader";

export const BASE_URL_Local = "http://127.0.0.1:8000/api/";
// export const BASE_URL_Local = "http://jcbk.mavlamangoes.com/api/";
export const BASE_URL_SERVER ="https://jcbk.teeblanka.com/api/";

export const genOtp = (digits = 4) => {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const callAjax = async (url, data, loader = true) => {
  try {
    let BASE_URL =
      window.location.hostname === "localhost"
        ? BASE_URL_Local
        : BASE_URL_SERVER;
    const config = {
      method: "post",
      url: BASE_URL + url,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };

    ReactDOM.render(<Loader bal={loader} />, document.getElementById("root1")); // Show Loader before API call
    const response = await axios(config);
    ReactDOM.render(<Loader bal={false} />, document.getElementById("root1")); // Hide Loader after API call
    let ret;
    // console.log(response);
    ret = { msg: "", code: 200, data: response.data.data };
    return ret;
  } catch (error) {
    console.log(error);
    ReactDOM.render(<Loader bal={false} />, document.getElementById("root1")); // Hide Loader on error
    return {
      msg: "something went wrong! please try again ",
      code: 500,
      data: [],
    };
  }
};

export const callAjax_File = async (url, data) => {
  try {
    let BASE_URL =
      window.location.hostname === "localhost"
        ? BASE_URL_Local
        : BASE_URL_SERVER;
    const config = {
      method: "post",
      url: BASE_URL + url,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };

    ReactDOM.render(<Loader />, document.getElementById("root1")); // Show Loader before API call
    const response = await axios(config);

    ReactDOM.render(<Loader bal={false} />, document.getElementById("root1")); // Hide Loader after API call
    let ret;
    ret = { msg: "", code: 200, data: response.data.data };
    return ret;
  } catch (error) {
    ReactDOM.render(<Loader bal={false} />, document.getElementById("root1")); // Hide Loader on error
    return { msg: "something went wrong! please try again ", code: 500 };
  }
};

export const getUrl = (path) => {
  let BASE_URL =window.location.hostname === "localhost"? BASE_URL_Local: BASE_URL_SERVER;
  return BASE_URL;
};

export const getImageUrl = (path) => {
  let BASE_URL =
    window.location.hostname === "localhost" ? BASE_URL_Local : BASE_URL_SERVER;
    BASE_URL=BASE_URL.slice(0,-1)
  return BASE_URL + path;
};

 
export const isSmallScreen = () => {
  return window.innerWidth <= 768;
};

export const handleNumInputChange = (event) => {
  const numericValue = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
  event.target.value = numericValue; // Update the input value
};
export const handleDecimalInputChange = (event) => {
  const numericValue = event.target.value.replace(/[^0-9.]+/g, "");
  const parts = numericValue.split(".");
  if (parts.length > 2) {
    const integerPart = parts.shift();
    const decimalPart = parts.join("");
    event.target.value = `${integerPart}.${decimalPart}`;
  } else {
    event.target.value = numericValue;
  }
};
export const handleAlphanumericInputChange = (event) => {
  const alphanumericValue = event.target.value.replace(/[^a-zA-Z0-9]+/g, ""); // Remove non-alphanumeric characters
  event.target.value = alphanumericValue; // Update the input value
};

export const handleAlphanumericInputwithSpaceChange = (event) => {
  const alphanumericValue = event.target.value.replace(/[^a-zA-Z0-9\s]+/g, ""); // Remove non-alphanumeric characters except spaces
  event.target.value = alphanumericValue; // Update the input value
};

export const getHourTime = (dateTime, ishour) => {
  let bal = false;
  if (ishour.toString() === "12".toString()) {
    bal = true;
  } else {
    bal = false;
  }
  let curDate = new Date(dateTime);
  const timeString = curDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: bal,
  });
  return timeString;
};

export const formatUTCDate = (date, isFormat, daysAgo = 0) => {
  const monthNames = [
    "Jan","Feb","Mar","Apr",
    "May","Jun","Jul","Aug",
    "Sep","Oct","Nov","Dec",
  ];
  if (daysAgo !== 0) {
    date.setUTCDate(date.getUTCDate() - daysAgo);
  }
  date = new Date(date + "Z");
  let year = date.getUTCFullYear();
  let month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  let day = String(date.getUTCDate()).padStart(2, "0");
  let hours = String(date.getUTCHours()).padStart(2, "0");
  let minutes = String(date.getUTCMinutes()).padStart(2, "0");
  let seconds = String(date.getUTCSeconds()).padStart(2, "0");
  if (isFormat === "ymd") {
    return `${year}-${month}-${day}`;
  } else if (isFormat === "dmy") {
    return `${day}-${month}-${year}`;
  } else if (isFormat === "d3my") {
    const monthIndex = date.getUTCMonth();
    month = monthNames[monthIndex];
    return `${day}-${month}-${year}`;
  } else if (isFormat === "ymdhm") {
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  } else if (isFormat === "dmyhm") {
    let period = "AM";
    if (hours >= 12) {
      period = "PM";
      hours = hours > 12 ? hours - 12 : hours;
    } else if (hours === 0) {
      hours = 12;
    }
    hours = String(hours).padStart(2, "0");
    return `${day}-${month}-${year} ${hours}:${minutes} ${period}`;
  }
};

export const handleMaxLengthInput = (event, maxLength) => {
  if (event.target.value.length > maxLength) {
    event.target.value = event.target.value.slice(0, maxLength);
  }
};

export const handleFocus = (event) => {
  event.target.select();
};

export const handleUserSetLocalStorage = (data,isRemove = false) => {
  if (isRemove) {    
      localStorage.removeItem("udata");
   } else {    
      localStorage.setItem("udata", JSON.stringify(data));
   }
};

export const handleUserGetLocalStorage = (key) => {
  let storedData = {};
  storedData = localStorage.getItem("udata");
  const parsedData = storedData ? JSON.parse(storedData) : 0;
  return parsedData ? parsedData[key] : 0;
};
