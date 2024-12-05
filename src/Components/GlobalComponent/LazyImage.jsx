// LazyLoadedImage.js
import { Paper } from '@mui/material';
import React, { useState } from 'react';

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImgLoad = () => {
    setLoaded(true);
   };

  return (
    <div>
      {Array.from({length:115}).map((element, index) => {
            let bgcolor = "#fff";
            if (index % 2 == 0) {
              bgcolor = "aliceblue";
            }
            return (
              <Paper  key={index} elevation={2} >                                         
                {index}            
              </Paper>
            );
        })}
    </div>
  );
};

export default LazyImage;
