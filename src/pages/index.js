import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FourthSection from "@/components/FourthSection";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Lessons from "@/components/Lessons";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef(null);

  return (
    <>
      <Head>
        <title>IM.Barber - Academy and Barbershop - האקדמיה לספרות</title>
        <meta
          name="description"
          content="ברוכים הבאים לIM.Barber - Academy & Barbershop, חנות המוצרים והאקדמיה לספרות של IM.Barber, מוצרים למספרות, שיער, מכונות תספורת'"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="IM.Barber - Academy & Barbershop" />
        <meta
          property="og:image"
          content="https://alonilk2.github.io/map1/logo-barber.png"
        />
        <meta
          property="og:description"
          content="ברוכים הבאים לIM.Barber - Academy & Barbershop, חנות המוצרים והאקדמיה לספרות של IM.Barber, מוצרים למספרות, שיער, מכונות תספורת"
        />
        <meta property="og:url" content="https://www.imbarber.com" />
        <link rel="icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="output.css" />

        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap"
          rel="stylesheet"
        />
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="App">
        <Header contactRef={contactRef} />
        <Introduction />
        <Lessons />
        <Contact ref={contactRef} />
        <FourthSection />
        <Footer />
      </div>
    </>
  );
}
