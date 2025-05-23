import useWindowSize from "@/hooks/useWindowSize";
import { colors } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, Button, Snackbar, TextField } from "@mui/material";

import { publickey } from "../constants";
export default function ApplicationForm() {
  const isMobile = useWindowSize().width < 550; // Adjust this value based on your design breakpoints

  // סגנונות CSS מוגדרים בתוך הקומפוננטה
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "40px auto",
      padding: isMobile ? "0" : "20px",
      fontFamily: "Arial, sans-serif",
      direction: "rtl",
      color: "#181a18",
      fontSize: isMobile ? "1rem" : "1.25rem",
    },
    paper: {
      backgroundColor: "#ffba5191",
      borderRadius: "8px",
      padding: "32px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
    header: {
      color: "#181a18",
      textAlign: "center",
      marginBottom: "32px",
      fontSize: "22px",
      fontWeight: "bold",
    },
    formControl: {
      marginBottom: "24px",
      width: "100%",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "500",
    },
    textField: {
      width: "100%",
      padding: "12px",
      border: "1px solid transparent",
      borderRadius: "12px",
      resize: "vertical",
      boxSizing: "border-box",
      backgroundColor: "#ffd390",
      color: "black",
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
    },
    radio: {
      marginLeft: "8px",
      width: "18px",
      height: "18px",
      accentColor: "white",
      backgroundColor: "white !important",
    },
    button: {
      backgroundColor: "#181a18",
      color: "#ffd390",
      border: "none",
      borderRadius: "12px",
      padding: "14px",
      fontWeight: "700",
      width: "100%",
      cursor: "pointer",
      marginTop: "16px",
      transition: "background-color 0.2s",
      fontSize: "1rem"
    },
    buttonHover: {
      backgroundColor: "#181a18",
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
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
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
