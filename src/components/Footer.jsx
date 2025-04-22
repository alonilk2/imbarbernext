export default function Footer() {
  return (
    <footer className="footer">
      <p>כל הזכויות שמורות © Idan Mavlayev 2025</p>
      <p>Contact us at <a href="mailto:imbarberil2@gmail.com">imbarberil2@gmail.com</a></p>
      <a className="abdev" href="https://alondev.com/">
        <img src={"/assets/abdev.webp"} alt="ABdev Logo" className="abdev-img" />
        <span
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            fontSize: 12,
            margin: 5,
            color: "rgba(255,255,255,1)",
            whiteSpace: "nowrap",
          }}
        >
          Website built by
        </span>
      </a>
    </footer>
  );
}
