import React, { useState, useEffect, useMemo } from "react";
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

  const isScrolled = scrollPosition > 32;
  const easedScroll = Math.min(scrollPosition / 240, 1);

  const metrics = useMemo(() => {
    const baseHeight = isMobile ? 88 : 104;
    const minHeight = isMobile ? 68 : 80;
    const basePadding = isMobile ? 16 : 20;
    const minPadding = isMobile ? 10 : 14;
    const baseLogo = isMobile ? 140 : 210;
    const minLogo = isMobile ? 110 : 160;

    const height = Math.max(minHeight, baseHeight - easedScroll * 36);
    const padding = Math.max(minPadding, basePadding - easedScroll * 10);
    const logo = Math.max(minLogo, baseLogo - easedScroll * 50);

    return { height, padding, logo };
  }, [easedScroll, isMobile]);

  const navClassName = `navbar${isScrolled ? " navbar--scrolled" : ""}`;

  const navStyle = {
    "--nav-height": `${metrics.height}px`,
    "--nav-padding-block": `${metrics.padding}px`,
    "--logo-size": `${metrics.logo}px`,
  };

  return (
    <nav className={navClassName} style={navStyle} aria-label="סרגל ניווט ראשי">
      <a className="navbar__brand" href="#top" aria-label="דף הבית">
        <img
          className="navbar__logo"
          src={"/assets/flatlogo.png"}
          alt="Mavlayev Academy"
        />
      </a>
      <div className="navbar__actions">
        <Socials iconSize={isMobile ? 24 : 28} />
      </div>
    </nav>
  );
};

export default Navbar;
