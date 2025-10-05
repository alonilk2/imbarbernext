import { forwardRef } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Form from "./Form";

const MAP_URLS = {
  small:
    "https://maps.googleapis.com/maps/api/staticmap?markers=color:white%7Ccenter=Halulav+St+25%2C+Nof+Hagalil&scale=2&zoom=17&size=400x350&maptype=roadmap&format=png&key=AIzaSyBlCaoKEmsCM4fZtL6PAJgzGu9B2Nc2fxg&map_id=ac719b618b3ec786",
  medium:
    "https://maps.googleapis.com/maps/api/staticmap?markers=color:white%7Ccenter=Halulav+St+25%2C+Nof+Hagalil&scale=2&zoom=16&size=500x150&maptype=roadmap&format=png&key=AIzaSyBlCaoKEmsCM4fZtL6PAJgzGu9B2Nc2fxg&map_id=ac719b618b3ec786",
  large:
    "https://maps.googleapis.com/maps/api/staticmap?markers=color:white%7Ccenter=Halulav+St+25%2C+Nof+Hagalil&scale=2&zoom=16&size=550x250&maptype=roadmap&format=png&key=AIzaSyBlCaoKEmsCM4fZtL6PAJgzGu9B2Nc2fxg&map_id=ac719b618b3ec786",
  xlarge:
    "https://maps.googleapis.com/maps/api/staticmap?markers=color:white%7Ccenter=Halulav+St+25%2C+Nof+Hagalil&scale=2&zoom=16&size=1800x1024&maptype=roadmap&format=png&key=AIzaSyBlCaoKEmsCM4fZtL6PAJgzGu9B2Nc2fxg&map_id=ac719b618b3ec786",
};

const MAP_ALT_TEXT = "מפת הגעה לאקדמיית IM Barber ברחוב יקינטון 3, נוף הגליל";

const Contact = forwardRef(function Contact(_props, ref) {
  const { width } = useWindowSize();

  const mapSrc = (() => {
    if (!width) return MAP_URLS.xlarge;
    if (width < 768) return MAP_URLS.small;
    if (width <= 1000) return MAP_URLS.medium;
    if (width <= 1500) return MAP_URLS.large;
    return MAP_URLS.xlarge;
  })();

  return (
    <section
      className="contact-section section"
      id="contact-section"
      ref={ref}
      aria-labelledby="contact-heading"
    >
      <div className="right-pane" dir="rtl">
        <h5 id="contact-heading">רוצה עוד פרטים?</h5>
        <p className="contact-text">
          כתובת: <br />
          מרכז חני סנטר, הלולב 25, נוף הגליל
        </p>
        <p className="contact-text">
          פלאפון: {" "}
          <a className="contact-link" href="tel:+972527481028">
            052-7481028
          </a>
        </p>
                <div className="media-frame media-frame--map">
          <img
            src={mapSrc}
            alt={MAP_ALT_TEXT}
            loading="lazy"
            decoding="async"
          />
        </div>
        <Form />
      </div>

    </section>
  );
});
export default Contact;
