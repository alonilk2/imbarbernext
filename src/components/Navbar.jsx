import React, { useState, useEffect } from "react";
import Socials from "./Socials";
import useWindowSize from "@/hooks/useWindowSize";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { width } = useWindowSize();
  const isMobile = width < 550;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = scrollPosition > 40;
  const easedScroll = Math.min(scrollPosition / 200, 1);
  const navHeight = 110 - easedScroll * 40;
  const logoSize = isMobile ? 160 : 220 - easedScroll * 30;
  const verticalPadding = 20 - easedScroll * 8;

  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: isMobile ? `${verticalPadding}px 5%` : `${verticalPadding}px 50px`,
    height: `${navHeight}px`,
    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
    color: '#fff',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    boxSizing: 'border-box',
    flexDirection: 'row-reverse',
    boxShadow: isScrolled ? '0 20px 40px rgba(0, 0, 0, 0.35)' : 'none',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
  };
  
  const logoContainerStyles = {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '5px',
    opacity: isScrolled ? 1 : 0,
    transform: isScrolled ? 'translateY(0px)' : 'translateY(-16px)',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    pointerEvents: isScrolled ? 'auto' : 'none',
  };
  
  const logoStyles = {
    transition: 'font-size 0.3s ease',
    width: `${logoSize}px`,
    filter: 'drop-shadow(0 0 28px rgba(0, 151, 255, 0.4))',
  };

  return (
    <nav style={navStyles}>
      <div style={logoContainerStyles} aria-hidden={!isScrolled}>
        <img style={logoStyles} src={"/assets/flatlogo.png"} alt="logo" />
      </div>
      <Socials iconSize={32} />
    </nav>
  );
};

export default Navbar;
