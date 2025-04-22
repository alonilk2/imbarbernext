import { useRef } from "react";
import { forwardRef } from "react";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

import Form from "./Form";

const Contact = forwardRef(function Contact(props, ref) {
  const [content, setContent] = useState(
    "היי! אשמח לקבוע פגישה טלפונית כדי לקבל פרטים על האקדמיה"
  );
  const formRef = useRef();

  const { width } = useWindowSize();



  return (
    <section className="contact-section" ref={ref}>
      <div className="right-pane" dir="rtl">
        <h5>רוצה עוד פרטים?</h5>
        <p className="contact-text">
          כתובתנו: <br />
          רחוב יקינטון 3, הר יונה
          נוף הגליל 17500
        </p>
        <p className="contact-text">
          פלאפון: 052-7481028
        </p>
        <Form />
      </div>
      <div className="left-pane">
        {width < 768 ? (
          <img
            width={"100%"}
            src={
              "https://maps.googleapis.com/maps/api/staticmap?markers=color:yellow%7Ccenter=Yaqinton+St+3%2C+Nof+Hagalil&scale=2&zoom=17&size=350x400&maptype=roadmap&format=png&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=ac719b618b3ec786"
            }
            alt="Map"
          />
        ) : width >= 768 && width <= 1000 ?  (
          <img
            width={"100%"}
            src={
              "https://maps.googleapis.com/maps/api/staticmap?markers=color:yellow%7Ccenter=Yaqinton+St+3%2C+Nof+Hagalil&scale=2&zoom=16&size=150x500&maptype=roadmap&format=png&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=ac719b618b3ec786"
            }
            alt="Map"
          />
        ) : width >= 1001 && width <= 1500 ?  (
          <img
          width={"100%"}
          src={
            "https://maps.googleapis.com/maps/api/staticmap?markers=color:yellow%7Ccenter=Yaqinton+St+3%2C+Nof+Hagalil&scale=2&zoom=16&size=250x550&maptype=roadmap&format=png&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=ac719b618b3ec786"
          }
          alt="Map"
        />
      ) : (
          <img
            width={"100%"}
            src={
              "https://maps.googleapis.com/maps/api/staticmap?markers=color:yellow%7Ccenter=Yaqinton+St+3%2C+Nof+Hagalil&scale=2&zoom=16&size=390x800&maptype=roadmap&format=png&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=ac719b618b3ec786"
            }
            alt="Map"
          />
        )}
      </div>


    </section>
  );
});
export default Contact;
