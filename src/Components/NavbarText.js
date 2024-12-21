import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import {useState,useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Navbar.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
const PreviousBtn=(props)=>{
    console.log(props);
    const{className,onClick}=props;
    return(
        <div className={className} onClick={onClick}>
          <IoIosArrowBack style={{color:"white",fontSize:'20px'}}/>  
        </div>
    );
  }
  
  const NextBtn=(props)=>{
    const{className,onClick}=props;
    return(
        <div className={className} onClick={onClick}>
        <IoIosArrowForward style={{color:"white",fontSize:"20px"}}/>
            </div>
    );
  }
  const textSlides = [
    "Delivery time 2-3 working days",
    "Free exchange and free returns.",
    "Free shipping in Us order $100 & free exchange",
  ];
const NavbarText=()=>{
    const settings = {
        dots: false, // Display dots for navigation
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Autoplay feature
        autoplaySpeed: 2000, 
        centerMode: true,// Autoplay speed (in milliseconds) 
        fade: true,               // Enable fade effect
       cssEase: "linear", 
       responsive: [
        {
          breakpoint: 768,       // For tablets and medium screens
          settings: {
            slidesToShow: 1,     // Show 1 item
          },
        },
        {
          breakpoint: 480,       // For mobile screens
          settings: {
            slidesToShow: 1,     // Show 1 item
          },
        },
      ],
      };
      const tooltip=(props)=>(
        <Tooltip id="tooltip" {...props}>
          login
        </Tooltip>
        );
      
        const renderTooltip=(props)=>(
          <Tooltip id="tooltip" {...props}>
            wishlist
          </Tooltip>
          );
      const [isVisible, setIsVisible] = useState(true);
      const [lastScrollY, setLastScrollY] = useState(0);
      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [lastScrollY]);

      return(
    <>
        <Navbar expand="lg" bg="dark" variant='dark'className={`navbar_link ${isVisible ? 'visible' : 'hidden'}`}>
           <div className="slider-container">
      <Slider {...settings}
      prevArrow={<PreviousBtn/>}
        nextArrow={<NextBtn/>}>
        {textSlides.map((text, index) => (
          <div key={index} className="slider-item">
            <p style={{text:'white'}}>{text}</p>
          </div>
        ))}
      </Slider>
    </div> 
           
           
            </Navbar>
            <Navbar bg="white" expand="lg" fixed="top" className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
            <Container fluid>
              {/* Icons (visible on larger screens, hidden on small screens) */}
              <Navbar.Brand href="#home" className="ml-1">Brand Name</Navbar.Brand>
              <Nav className="d-flex d-lg-none flex-row gap-3 p-6 m-6">
                <Nav.Link href="#home">
                  <IoPersonOutline className="text-black mr-2" />
                </Nav.Link>
                <Nav.Link href="#contact">
                  <FaRegHeart className="text-black mr-1" />
                </Nav.Link>
              </Nav>
              
        
              {/* Navbar Toggle for mobile */}
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              
              {/* Collapsible Navbar content */}
              <Navbar.Collapse id="responsive-navbar-nav">
                {/* Centered Links on larger screens */}
                <Nav className="mx-auto d-block d-lg-flex nav_link">
                  <Nav.Link href="#home" className="nav_items">Home</Nav.Link>
                  <Nav.Link href="#about">About Us</Nav.Link>
                  <Nav.Link href="#contact">Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                {/* Icons on the left for small screens */}
                <Nav className="ml-auto d-none d-lg-flex flex-row">
                <OverlayTrigger placement='bottom' delay={{show:250,hide:400}} overlay={tooltip}>
                  <Nav.Link href="#home">
                    <IoPersonOutline className="text-black" />
                  </Nav.Link>
                  </OverlayTrigger>
                  <OverlayTrigger placement='bottom' delay={{show:250,hide:400}} overlay={renderTooltip}>
                  <Nav.Link href="#about">
                    <FaRegHeart className="text-black" />
                  </Nav.Link>
                  </OverlayTrigger>
                </Nav>
              
            </Container>
            </Navbar>
            
          <div className="content">
          <p>
            I am a girl ksklalzllzlz;ll;The dosa originated in South India, but its precise geographical origins are unknown. According to food historian K. T. Achaya, references in the Sangam literature suggest that dosa was already in use in the ancient Tamil country around the first century CE.[1] However, according to historian P. Thankappan Nair, dosa originated in the town of Udupi in present-day Karnataka.[2] Achaya states that the earliest written mention of dosa appears in the eighth-century literature of present-day Tamil Nadu, while the earliest mention of dosa in Kannada literature appears a century later.[3]

In popular tradition outside of Southern India, the origin of the dosa is linked to Udupi, probably because of the dish's association with Udupi restaurants.[3] The Tamil dosa is traditionally softer and thicker; the thinner and crispier version of dosa was first made in present-day Karnataka.[4] A recipe for dosa can be found in Manasollasa, a 12th-century Sanskrit encyclopedia compiled by Someshvara III, who ruled from present-day Karnataka.[5]
The dosa originated in South India, but its precise geographical origins are unknown. According to food historian K. T. Achaya, references in the Sangam literature suggest that dosa was already in use in the ancient Tamil country around the first century CE.[1] However, according to historian P. Thankappan Nair, dosa originated in the town of Udupi in present-day Karnataka.[2] Achaya states that the earliest written mention of dosa appears in the eighth-century literature of present-day Tamil Nadu, while the earliest mention of dosa in Kannada literature appears a century later.[3]

In popular tradition outside of Southern India, the origin of the dosa is linked to Udupi, probably because of the dish's association with Udupi restaurants.[3] The Tamil dosa is traditionally softer and thicker; the thinner and crispier version of dosa was first made in present-day Karnataka.[4] A recipe for dosa can be found in Manasollasa, a 12th-century Sanskrit encyclopedia compiled by Someshvara III, who ruled from present-day Karnataka.[5]

The dosa arrived in Mumbai with the opening of Udupi restaurants in the 1930s.[6] After India's independence in 1947, South Indian cuisine became gradually popular in North India. In New Delhi, the Madras Hotel in Connaught Place became one of the first restaurants to serve South Indian cuisine.[7][8]

Dosas, like many other dishes of South Indian cuisine, were introduced in Ceylon (Sri Lanka) by South Indian emigrants during British rule.[9][10] Tirunelveli and Tuticorin merchants who settled there were instrumental in the spreading of South Indian cookery across the island by opening restaurants (vegetarian hotels) to meet initially the needs of the emigrant population.[11][12] Dosa has found its way into the culinary habits of the Sri Lankan people, where it has evolved into an island-specific version which is quite distinct from the Indian dosa. In both forms, it is called those (තෝසේ or [t̪oːse]) or thosai (தோசை or [t̪oːsaɪ̯]) in Sinhala and in Sri Lankan Tamil.

Apart from these countries, dosa was introduced far abroad since the early 18th century, by the migration of the Tamil diaspora to Southeast Asia and later in the Western World, and through the worldwide popularisation of Indian and South Indian cuisines since the second half of the 20th century.
A mixture of rice and white gram that has been soaked in water for at least 4–5 hours is ground finely to form a batter. Some add a bit of soaked fenugreek seeds while grinding the batter. The proportion of rice to lentils is generally 3:1 or 4:1. After adding salt, the batter is allowed to ferment overnight, before being mixed with water to get the desired consistency. The batter is then ladled onto a hot tava or griddle greased with oil or ghee. It is spread out with the base of a ladle or a bowl to form a pancake. It can be made either thick like a pancake, or thin and crispy. A dosa is served hot, either folded in half or rolled like a wrap. It is usually served with chutney and sambar. The mixture of white grams and rice can be replaced with highly refined wheat flour or semolina.
I am a girl ksklalzllzlz;ll;The dosa originated in South India, but its precise geographical origins are unknown. According to food historian K. T. Achaya, references in the Sangam literature suggest that dosa was already in use in the ancient Tamil country around the first century CE.[1] However, according to historian P. Thankappan Nair, dosa originated in the town of Udupi in present-day Karnataka.[2] Achaya states that the earliest written mention of dosa appears in the eighth-century literature of present-day Tamil Nadu, while the earliest mention of dosa in Kannada literature appears a century later.[3]

In popular tradition outside of Southern India, the origin of the dosa is linked to Udupi, probably because of the dish's association with Udupi restaurants.[3] The Tamil dosa is traditionally softer and thicker; the thinner and crispier version of dosa was first made in present-day Karnataka.[4] A recipe for dosa can be found in Manasollasa, a 12th-century Sanskrit encyclopedia compiled by Someshvara III, who ruled from present-day Karnataka.[5]
The dosa originated in South India, but its precise geographical origins are unknown. According to food historian K. T. Achaya, references in the Sangam literature suggest that dosa was already in use in the ancient Tamil country around the first century CE.[1] However, according to historian P. Thankappan Nair, dosa originated in the town of Udupi in present-day Karnataka.[2] Achaya states that the earliest written mention of dosa appears in the eighth-century literature of present-day Tamil Nadu, while the earliest mention of dosa in Kannada literature appears a century later.[3]

In popular tradition outside of Southern India, the origin of the dosa is linked to Udupi, probably because of the dish's association with Udupi restaurants.[3] The Tamil dosa is traditionally softer and thicker; the thinner and crispier version of dosa was first made in present-day Karnataka.[4] A recipe for dosa can be found in Manasollasa, a 12th-century Sanskrit encyclopedia compiled by Someshvara III, who ruled from present-day Karnataka.[5]
       
          
          </p>
          </div>
            </>
      );
    
      
    

}
export default NavbarText;