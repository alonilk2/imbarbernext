import { Icon } from "@mui/material";
import React, { useState, useEffect } from "react";
import { SiFacebook, SiTiktok, SiInstagram } from "react-icons/si";
import Socials from "./Socials";
import useWindowSize from "@/hooks/useWindowSize";
const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const {width} = useWindowSize();
  const isMobile = width < 550; // Adjust this value based on your design breakpoints
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate background opacity based on scroll position (max opacity at 200px scroll)
  const backgroundOpacity = Math.min(scrollPosition / 200, 1);

  // Calculate height reduction (max reduction at 200px scroll)
  // Starting at 80px height, reducing to 60px
  const heightReduction = Math.min(scrollPosition / 200, 1) * 20;
  const navHeight = 90 - heightReduction;
  
  // Calculate logo size reduction (from 24px to 18px)
  const logoSizeReduction = Math.min(scrollPosition / 200, 1) * 40;
  const logoSize = isMobile ? 200 : 250 - logoSizeReduction;
  
  // Calculate padding reduction (from 20px to 12px)
  const paddingReduction = Math.min(scrollPosition / 200, 1) * 8;
  const verticalPadding = 20 - paddingReduction;
  
  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: isMobile ? `${verticalPadding}px 5%` :`${verticalPadding}px 50px`,
    height: `${navHeight}px`,
    backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
    color: '#fff',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    boxSizing: 'border-box',
    flexDirection: 'row-reverse',
  };
  
  const logoContainerStyles = {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '5px',
  };
  
  const logoStyles = {
    transition: 'font-size 0.3s ease',
    width: `${logoSize}px`,
  };

  // Empty div to balance the layout (matches width of social links)
  const spacerStyles = {
    width: "108px", // Matches width of the social links section
  };

  return (
    <nav style={navStyles}>

      <div style={logoContainerStyles}>
        <img style={logoStyles} src={"/assets/logo.svg"} alt="logo" />
      </div>

      <Socials iconSize={32} />
    </nav>
  );
};

export default Navbar;
