import { SocialIcon } from "react-social-icons";
import useWindowSize from "../hooks/useWindowSize";

export default function Header({ contactRef }) {
  const { width } = useWindowSize();

  const scrollToComponent = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the component
    }
  };

  return (
    <header className="App-header">
      <video className="video" loop autoPlay playsInline muted loading="lazy">
        <source src={"/assets/1.webm"} type="video/webm" />
        <source src={"/assets/1.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content App-logo-bg">
        <img src={"/assets/logo.svg"} className="App-logo" alt="logo" />

        <div className="titles">
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
        <button
          onClick={() => (window.location.href = "https://calmark.io/p/ff2yx")}
          className="appoint"
        >
          קביעת תור לתספורת
        </button>
        <button onClick={scrollToComponent} className="contact-btn">
לפרטים נוספים
        </button>
      </div>
        </div>
      </div>


      {width > 520 && (
        <div className="socialsrow">
          <SocialIcon
            url="https://www.tiktok.com/@idan_mavlayev?lang=he-IL"
            style={{ width: "30px", height: "30px" }}
          />
          <SocialIcon
            url="https://www.instagram.com/imbarber_academy"
            style={{ width: "30px", height: "30px" }}
          />
          <SocialIcon
            url="https://www.facebook.com/idanbarber"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      )}
    </header>
  );
}
