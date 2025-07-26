import { forwardRef } from "react";
import { ResponsiveMap } from "./ui";
import { CONTACT_INFO } from "../utils/constants";
import Form from "./Form";

const Contact = forwardRef(function Contact(props, ref) {
  return (
    <section className="contact-section" ref={ref}>
      <div className="right-pane" dir="rtl">
        <h5>רוצה עוד פרטים?</h5>
        <p className="contact-text">
          כתובתנו: <br />
          {CONTACT_INFO.address}
        </p>
        <p className="contact-text">
          פלאפון: {CONTACT_INFO.phone}
        </p>
        <Form />
      </div>
      <div className="left-pane">
        <ResponsiveMap />
      </div>
    </section>
  );
});
export default Contact;
