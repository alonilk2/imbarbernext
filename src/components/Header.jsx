import Navbar from "./Navbar";

export default function Header({ contactRef }) {

  const scrollToComponent = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the component
    }
  };

  return (
    <header className="App-header">
      <video className="video" loop autoPlay playsInline muted loading="lazy">
        <source src={"/imbarbernext/assets/1.webm"} type="video/webm" />
        <source src={"/imbarbernext/assets/1.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar />
      <div className="content App-logo-bg">
        {/* <img src={"/imbarbernext/assets/logo.svg"} className="App-logo" alt="logo" /> */}

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
    </header>
  );
}
