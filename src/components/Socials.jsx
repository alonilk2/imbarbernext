import useWindowSize from "@/hooks/useWindowSize";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";

export default function Socials({
  links = {
    facebook: "https://www.facebook.com/idanbarber",
    instagram: "https://www.instagram.com/imbarber_academy",
    tiktok: "https://www.tiktok.com/@idan_mavlayev?lang=he-IL",
  },
  iconSize = 24,
  containerStyle = {},
  linkStyle = {},
}) {
  const isMobile = useWindowSize().width < 550; // Adjust this value based on your design breakpoints
  const defaultContainerStyle = {
    display: "flex",
    gap: "8px",
    ...containerStyle,
  };

  const defaultLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    ...linkStyle,
  };

  return (
    <div style={defaultContainerStyle}>
      <a
        href={links.facebook}
        target="_blank"
        rel="noopener noreferrer"
        style={defaultLinkStyle}
      >
        <SiFacebook viewBox="-5 -5 32 32" size={iconSize} stroke="black" strokeWidth={1} />
      </a>
      <a
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        style={defaultLinkStyle}
      >
        <SiInstagram viewBox="-5 -5 32 32" size={iconSize} stroke="black" strokeWidth={1} />
      </a>
      <a
        href={links.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        style={defaultLinkStyle}
      >
        <SiTiktok viewBox="-5 -5 32 32" size={iconSize} stroke="black" strokeWidth={1} />
      </a>
    </div>
  );
}
