import useWindowSize from "@/hooks/useWindowSize";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, Snackbar } from "@mui/material";

import { publickey } from "../constants";
export default function ApplicationForm() {
  const isMobile = useWindowSize().width < 550; // Adjust this value based on your design breakpoints

  // סגנונות CSS מוגדרים בתוך הקומפוננטה
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "40px auto",
      padding: isMobile ? "0" : "20px",
      fontFamily: "Rubik, Arial, sans-serif",
      direction: "rtl",
      color: "#FFFFFF",
      fontSize: isMobile ? "1rem" : "1.25rem",
    },
    paper: {
      backgroundColor: "rgba(15, 15, 15, 0.95)",
      borderRadius: "20px",
      padding: "32px",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(0, 127, 227, 0.15), 0 0 20px rgba(0, 127, 227, 0.2)",
      border: "2px solid rgba(0, 127, 227, 0.3)",
      backdropFilter: "blur(20px)",
    },
    header: {
      color: "transparent",
      background: "linear-gradient(120deg, #FFFFFF 0%, #3d9ff0 50%, #007fe3 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      textAlign: "center",
      marginBottom: "32px",
      fontSize: "28px",
      fontWeight: "800",
      textShadow: "0 0 20px rgba(0, 127, 227, 0.3)",
      filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.8))",
    },
    formControl: {
      marginBottom: "24px",
      width: "100%",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "500",
      color: "#FFFFFF",
    },
    textField: {
      width: "100%",
      padding: "12px",
      border: "2px solid rgba(0, 127, 227, 0.4)",
      borderRadius: "12px",
      resize: "vertical",
      boxSizing: "border-box",
      backgroundColor: "rgba(26, 26, 26, 0.8)",
      color: "#FFFFFF",
      transition: "all 0.3s ease",
      outline: "none",
    },
    radioGroup: {
      display: "flex",
      flexDirection: "row",
      gap: "24px",
    },
    radioLabel: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      color: "#FFFFFF",
    },
    radio: {
      marginLeft: "8px",
      width: "18px",
      height: "18px",
      accentColor: "#007fe3",
      cursor: "pointer",
    },
    button: {
      background: "linear-gradient(135deg, #007fe3 0%, #005bb5 100%)",
      color: "#000000",
      border: "2px solid #007fe3",
      borderRadius: "12px",
      padding: "14px",
      fontWeight: "700",
      width: "100%",
      cursor: "pointer",
      marginTop: "16px",
      transition: "all 0.3s ease",
      fontSize: "1rem",
      textTransform: "uppercase",
      letterSpacing: "1.5px",
      boxShadow: "0 0 20px rgba(0, 127, 227, 0.2), 0 0 15px rgba(0, 127, 227, 0.2)",
    },
    buttonHover: {
      background: "linear-gradient(135deg, #3d9ff0 0%, #007fe3 100%)",
      transform: "translateY(-3px) scale(1.02)",
      boxShadow: "0 10px 50px rgba(0, 127, 227, 0.25), 0 0 25px rgba(0, 127, 227, 0.3)",
      borderColor: "#3d9ff0",
    },
  };
  const formRef = useRef({
    name: "",
    phone: "",
    email: "",
    satisfied: "",
    changeWhat: "",
    whyLiterature: "",
    whyImAcademy: "",
    futureVision: "",
    investmentUnderstanding: "",
    readyToCommit: "",
    startDate: "",
  });
  const [success, setSuccess] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("ABC");
      await emailjs.sendForm(
        "service_c0mdbl5",
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
    <div style={styles.container}>
      <div style={styles.paper}>
        <h1 style={styles.header}>טופס הרשמה - IM Academy</h1>

        <form onSubmit={handleSubmit} ref={formRef}>
          <div style={styles.formControl}>
            <label style={styles.label}>
              שם מלא<span color="red">*</span>:
            </label>
            <input
              required
              type="text"
              name="name"
              style={styles.textField}
              aria-label="שם מלא"
            />
          </div>
          <div style={styles.formControl}>
            <label style={styles.label}>
              פלאפון<span color="red">*</span>:
            </label>
            <input
              required
              type="text"
              name="phone"
              style={styles.textField}
              aria-label="פלאפון"
            />
          </div>
          <div style={styles.formControl}>
            <label style={styles.label}>
              אימייל<span color="red">*</span>:
            </label>
            <input
              required
              type="text"
              name="email"
              style={styles.textField}
              aria-label="אימייל"
            />
          </div>
          <div style={styles.formControl}>
            <label style={styles.label}>
              האם אתה מרוצה מהמצב שלך היום מבחינת עבודה, זמן פנוי ומשכורת?
            </label>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="satisfied"
                  value="כן"
                  style={styles.radio}
                  aria-label="מרוצה - כן"
                />
                כן
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="satisfied"
                  value="לא"
                  style={styles.radio}
                  aria-label="מרוצה - לא"
                />
                לא
              </label>
            </div>
          </div>
          {formRef.current.satisfied === "לא" && (
            <div style={styles.formControl}>
              <label style={styles.label}>מה היית רוצה לשנות?</label>
              <textarea
                name="changeWhat"
                style={styles.textField}
                rows="3"
                aria-label="מה היית רוצה לשנות"
              />
            </div>
          )}
          <div style={styles.formControl}>
            <label style={styles.label}>
              למה דווקא מקצוע הספרות מושך אותך? (מה גורם לך לחשוב שזה התחום
              שלך?)
            </label>
            <textarea
              name="whyLiterature"
              style={styles.textField}
              rows="3"
              aria-label="למה דווקא מקצוע הספרות מושך אותך"
            />
          </div>
          <div style={styles.formControl}>
            <label style={styles.label}>מה משך אותך ב-IM Academy?</label>
            <textarea
              name="whyImAcademy"
              style={styles.textField}
              rows="3"
              aria-label="מה משך אותך ב-IM Academy"
            />
          </div>
          <div style={styles.formControl}>
            <label style={styles.label}>
              איפה אתה רואה את עצמך בעוד שנה מהיום אם תתחיל איתנו עכשיו?
            </label>
            <textarea
              name="futureVision"
              style={styles.textField}
              rows="3"
              aria-label="איפה אתה רואה את עצמך בעוד שנה מהיום"
            />
          </div>
          <div style={styles.formControl}>
            <label style={styles.label}>
              האם אתה מבין שזה תהליך השקעה בעצמך ולא "הוצאה"?
            </label>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="investmentUnderstanding"
                  value="כן"
                  style={styles.radio}
                  aria-label="מבין שזה תהליך השקעה - כן"
                />
                כן
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="investmentUnderstanding"
                  value="לא"
                  style={styles.radio}
                  aria-label="מבין שזה תהליך השקעה - לא"
                />
                לא
              </label>
            </div>
          </div>
          <div style={styles.formControl}>
            <label style={styles.label}>
              האם אתה מוכן להתחייב לתהליך ולהשקיע בעצמך כדי להצליח?
            </label>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="readyToCommit"
                  value="כן"
                  style={styles.radio}
                  aria-label="מוכן להתחייב - כן"
                />
                כן
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="readyToCommit"
                  value="לא"
                  style={styles.radio}
                  aria-label="מוכן להתחייב - לא"
                />
                לא
              </label>
            </div>
          </div>
          <div style={styles.formControl}>
            <label style={styles.label}>
              במידה ונראה שאתה מתאים - מתי תהיה זמין להתחלת התהליך?
            </label>
            <div style={{ ...styles.radioGroup, flexWrap: "wrap" }}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="startDate"
                  value="מיידי"
                  style={styles.radio}
                  aria-label="זמין להתחלה - מיידי"
                />
                מיידי
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="startDate"
                  value="תוך שבוע"
                  style={styles.radio}
                  aria-label="זמין להתחלה - תוך שבוע"
                />
                תוך שבוע
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="startDate"
                  value="תוך חודש"
                  style={styles.radio}
                  aria-label="זמין להתחלה - תוך חודש"
                />
                תוך חודש
              </label>
            </div>
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.background = styles.buttonHover.background;
              e.target.style.transform = styles.buttonHover.transform;
              e.target.style.boxShadow = styles.buttonHover.boxShadow;
              e.target.style.borderColor = styles.buttonHover.borderColor;
            }}
            onMouseOut={(e) => {
              e.target.style.background = styles.button.background;
              e.target.style.transform = "none";
              e.target.style.boxShadow = styles.button.boxShadow;
              e.target.style.borderColor = styles.button.borderColor;
            }}
          >
            שלח טופס
          </button>
        </form>
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
      </div>
    </div>
  );
}
