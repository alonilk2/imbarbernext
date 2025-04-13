import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { useRef } from "react";
import { forwardRef } from "react";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import emailjs from "@emailjs/browser";
import { publickey } from "../constants";
import Form from "./Form";

const Contact = forwardRef(function Contact(props, ref) {
  const [content, setContent] = useState(
    "היי! אשמח לקבוע פגישה טלפונית כדי לקבל פרטים על האקדמיה"
  );
  const formRef = useRef();
  const [success, setSuccess] = useState();
  const { width } = useWindowSize();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_ddgz0eh",
        "template_w3ffrb8",
        formRef.current,
        publickey
      );
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
    }
  }

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
        {width < 520 ? (
          <img
            width={"100%"}
            src={
              "https://maps.googleapis.com/maps/api/staticmap?markers=color:yellow%7Ccenter=Yaqinton+St+3%2C+Nof+Hagalil&scale=2&zoom=18&size=500x600&maptype=roadmap&format=png&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=ac719b618b3ec786"
            }
            alt="Map"
          />
        ) : (
          <img
            width={"100%"}
            src={
              "https://maps.googleapis.com/maps/api/staticmap?markers=color:yellow%7Ccenter=Yaqinton+St+3%2C+Nof+Hagalil&scale=2&zoom=17&size=500x1000&maptype=roadmap&format=png&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=ac719b618b3ec786"
            }
            alt="Map"
          />
        )}
      </div>

      {success === true && (
        <Snackbar
          open={success === true}
          autoHideDuration={6000}
          onClose={() => setSuccess()}
        >
          <Alert
            onClose={() => setSuccess()}
            severity="success"
            sx={{ width: "100%" }}
          >
            האימייל נשלח בהצלחה!
          </Alert>
        </Snackbar>
      )}
    </section>
  );
});
export default Contact;
