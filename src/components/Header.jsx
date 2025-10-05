import { useEffect, useState } from "react";

export default function Header({ contactRef }) {
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setShouldAutoplay(!mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const scrollToComponent = () => {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const fallback = document.getElementById("contact-section");
    if (fallback) {
      fallback.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="App-header" role="banner">
      <div className="App-header__media">
        <video
          className="App-header__video"
          loop={shouldAutoplay}
          autoPlay={shouldAutoplay}
          muted
          playsInline
          poster="/assets/images/videoframe_0.webp"
          preload="metadata"
        >
          <source src={"/assets/1.webm"} type="video/webm" />
          הדפדפן שלך אינו תומך בניגון וידאו.
        </video>
      </div>
      <div className="content App-logo-bg">
        <div className="App-header__inner layout-container">
          <h1 className="visually-hidden">Mavlayev's Academy - האקדמיה לספרות</h1>
          <div className="row line-container" aria-hidden="true">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="english-title">Mavlayev's Academy</div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>

          <img
            src="/assets/logo.png"
            alt="לוגו אקדמיית Mavlayev"
            className="academy-logo"
            loading="lazy"
          />
          <h2 className="subtitle text-balance">
            להפוך כל ספר לאמן, כל תספורת ליצירת מופת – באקדמיה שבה הדיוק פוגש את הדמיון,
            והחזון הופך למקצוע.
          </h2>
          <div className="buttons">
            <button
              type="button"
              onClick={() => (window.location.href = "https://calmark.io/p/ff2yx")}
              className="button button--primary"
            >
              קביעת תור לתספורת
            </button>
            <button type="button" onClick={scrollToComponent} className="button button--ghost">
              לתאם שיחת ייעוץ
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
