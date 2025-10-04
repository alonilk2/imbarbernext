
export default function Header({ contactRef }) {

  const scrollToComponent = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the component
    }
  };

  return (
    <header className="App-header">
      <video className="video" loop autoPlay playsInline muted loading="lazy">
        <source src={"/assets/1.webm"} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="content App-logo-bg">
        <div className="titles">
          <h1 className="visually-hidden">Mavlayev's Academy - האקדמיה לספרות</h1>
          <div className="row line-container">
            <div class="circle"></div>
            <div class="line"></div>
            <div className="english-title">Mavlayev's Academy</div>
            <div class="line"></div>
            <div class="circle"></div>
          </div>

          <img
            src="/assets/logo.png"
            alt="Mavlayev's Academy logo"
            className="academy-logo"
            loading="lazy"
          />
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
