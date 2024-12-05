import React from "react";
import style from './Loader.module.css'

const Loader = (props) => {
  return (
    <div style={{display:props?.bal?'':'none'}} className={style.loader_wrapper}>
      <span className={style.loader}></span>
   </div>
  );
};

export default Loader;
