import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FourthSection from "@/components/FourthSection";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Lessons from "@/components/Lessons";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const contactRef = useRef(null);
  const [isFourthSectionVisible, setFourthSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFourthSectionVisible(true);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const target = document.getElementById("fourth-section-placeholder");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Mavlayev Academy - האקדמיה לספרות</title>
        <meta
          name="description"
          content="ברוכים הבאים לMavlayev Academy - Academy & Barbershop, האקדמיה לספרות של Mavlayev Academy, מספרה לגברים ומוצרי שיער וטיפוח בנוף הגליל"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Mavlayev Academy - אקדמיה לספרות, מספרה לגברים, מוצרי שיער וטיפוח בנוף הגליל"
        />
        <meta
          property="og:image"
          content="https://alonilk2.github.io/map1/logo-barber.png"
        />
        <meta
          property="og:description"
          content="ברוכים הבאים לMavlayev Academy - Academy & Barbershop, האקדמיה לספרות של Mavlayev Academy, מספרה לגברים ומוצרי שיער וטיפוח בנוף הגליל"
        />
        <meta property="og:url" content="https://www.imbarber.com" />
        <meta
          name="keywords"
          content="Mavlayev, Academy, Barbershop, ספרות, נוף הגליל, תספורת, אקדמיה, מספרה, מוצרים למספרות, שיער, מכונות תספורת, מוצרי שיער, טיפוח, קורסים לספרות, קורסים לתספורת, לימודי ספרות, לימודי תספורת, הדרכות לספרים, הדרכות לתספורת, סדנאות לספרות, סדנאות לתספורת, מקצוע הספרות, מקצוע התספורת, ספרות גברים, ספר גברים, תספורת גברים, עיצוב שיער גברים"
        />
        <meta name="author" content="Idan Mavlayev" />
        <link rel="icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap"
          rel="stylesheet"
        />
      </Head>
  <div className="App" id="top">
        <Navbar contactRef={contactRef} />

        <Header contactRef={contactRef} />
        <Introduction contactRef={contactRef} />
        <Lessons />
        <Contact ref={contactRef} />
        <div id="fourth-section-placeholder" style={{ maxHeight: "0px" }}></div>
        {isFourthSectionVisible && <FourthSection />}
        <Footer />
      </div>
    </>
  );
}
