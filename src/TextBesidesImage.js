import React from 'react';
import { Row, Col } from 'react-bootstrap'; 
import './TextBesidesImage.css';
const TextBesidesImage=()=>{
    const items = [
        { id: 1, text: "Tell-A-Tool:Guide To Web Design And Development Tools", imgSrc: "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?cs=srgb&dl=pexels-energepic-com-27411-313690.jpg&fm=jpg" },
        { id: 2, text: "Pagedraw UI Builder Turns Your Website Mock up Intro Code Automatically", imgSrc: "https://plus.unsplash.com/premium_photo-1664474834472-6c7d1e3198e2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D" },
        { id: 3, text: "Why Nodejs Is the Coolest Kid On the Backend Development Block!", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivlLnoy84QacBNqEGveNtn5DkHBI1OBp0Mw&s" }
      ];
    
      return (
    
        <div className="container">
            <Row>
      {items.map((item) => (
        <Col lg={12} md={12} sm={12} className="p-4">
        <div key={item.id} className="item flex-sm-row">
          <img src={item.imgSrc} alt={item.text} className="image1" />
          <p className="text">{item.text}</p>
        </div>
        </Col>
      ))}
      </Row>
    </div>
      );
}
export default TextBesidesImage;