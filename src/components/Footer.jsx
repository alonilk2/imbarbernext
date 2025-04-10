import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <SocialIcon url="https://www.tiktok.com/@idan_mavlayev?lang=he-IL" />
        <SocialIcon url="https://www.instagram.com/_im.barber_/" />
        <SocialIcon url="https://www.facebook.com/idan.mavlyev" />
      </div>
      <p>כל הזכויות שמורות © Idan Mavlayev 2023</p>
      <a className="abdev" href="https://github.com/alonilk2">
        <img src={"/assets/abdev.webp"} alt="ABdev" className="abdev-img" />
        <span
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            fontSize: 12,
            margin: 5,
            color: "rgba(255,255,255,0.4)",
            whiteSpace: "nowrap",
          }}
        >
          Built by
        </span>
      </a>
    </footer>
  );
}
