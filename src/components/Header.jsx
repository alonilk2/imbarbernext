import Navbar from "./Navbar";
import { Button } from "./ui";
import useScrollBehavior from "../hooks/useScrollBehavior";
import { EXTERNAL_LINKS } from "../utils/constants";

export default function Header({ contactRef }) {
  const { scrollToContact } = useScrollBehavior(contactRef);

  const handleBookingClick = () => {
    window.location.href = EXTERNAL_LINKS.booking;
  };

  return (
    <header className="App-header">
      <Navbar />
      <video className="video" loop autoPlay playsInline muted loading="lazy">
        <source src={"/assets/1.webm"} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="content App-logo-bg">
        <div className="titles">
          <h1 className="visually-hidden">IM.Barber - האקדמיה לספרות</h1>
          <div className="row line-container">
            <div class="circle"></div>
            <div class="line"></div>
            <div className="english-title">IM.Barber's Academy</div>
            <div class="line"></div>
            <div class="circle"></div>
          </div>

          <h1 className="title">האקדמיה לספרות</h1>
          <h2 className="subtitle">להפוך כל ספר לאמן, כל תספורת ליצירת מופת – באקדמיה שבה הדיוק פוגש את הדמיון, והחזון הופך למקצוע.</h2>
          <div className="buttons">
            <Button
              onClick={handleBookingClick}
              variant="primary"
            >
              קביעת תור לתספורת
            </Button>
            <Button 
              onClick={scrollToContact} 
              variant="secondary"
            >
              לפרטים נוספים
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
