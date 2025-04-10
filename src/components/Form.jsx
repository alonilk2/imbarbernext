import { colors } from '@mui/material';
import React, { useState } from 'react';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    satisfied: '',
    changeWhat: '',
    whyLiterature: '',
    whyImAcademy: '',
    futureVision: '',
    investmentUnderstanding: '',
    readyToCommit: '',
    startDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('טופס נשלח:', formData);
    alert('הטופס נשלח בהצלחה!');
  };

  // סגנונות CSS מוגדרים בתוך הקומפוננטה
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      direction: 'rtl',
      color: '#181a18',
      fontSize: '1.25rem'
    },
    paper: {
      backgroundColor: '#ffba5191',
      borderRadius: '8px',
      padding: '32px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    },
    header: {
      color: '#181a18',
      textAlign: 'center',
      marginBottom: '32px',
      fontSize: '28px',
      fontWeight: 'bold'
    },
    formControl: {
      marginBottom: '24px',
      width: '100%'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '500'
    },
    textField: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      resize: 'vertical',
      boxSizing: 'border-box',
      backgroundColor: 'white',
    },
    radioGroup: {
      display: 'flex',
      flexDirection: 'row',
      gap: '24px'
    },
    radioLabel: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    radio: {
      marginLeft: '8px',
      width: '18px',
      height: '18px',
      accentColor: '#181a18',
      backgroundColor: 'white !important',
    },
    button: {
      backgroundColor: '#181a18',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '14px',
      fontWeight: '500',
      width: '100%',
      cursor: 'pointer',
      marginTop: '16px',
      transition: 'background-color 0.2s'
    },
    buttonHover: {
      backgroundColor: '#181a18'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.paper}>
        <h1 style={styles.header}>טופס הרשמה - IM Academy</h1>
        
        <form onSubmit={handleSubmit}>
          {/* שאלה 1 */}
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
                  checked={formData.satisfied === 'כן'}
                  onChange={handleChange}
                  style={styles.radio}
                />
                כן
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="satisfied"
                  value="לא"
                  checked={formData.satisfied === 'לא'}
                  onChange={handleChange}
                  style={styles.radio}
                />
                לא
              </label>
            </div>
          </div>

          {/* שאלה 2 - מופיעה רק אם התשובה לשאלה 1 היא "לא" */}
          {formData.satisfied === 'לא' && (
            <div style={styles.formControl}>
              <label style={styles.label}>
                מה היית רוצה לשנות?
              </label>
              <textarea
                name="changeWhat"
                value={formData.changeWhat}
                onChange={handleChange}
                style={styles.textField}
                rows="3"
              />
            </div>
          )}

          {/* שאלה 3 */}
          <div style={styles.formControl}>
            <label style={styles.label}>
              למה דווקא מקצוע הספרות מושך אותך? (מה גורם לך לחשוב שזה התחום שלך?)
            </label>
            <textarea
              name="whyLiterature"
              value={formData.whyLiterature}
              onChange={handleChange}
              style={styles.textField}
              rows="3"
            />
          </div>

          {/* שאלה 4 */}
          <div style={styles.formControl}>
            <label style={styles.label}>
              מה משך אותך ב-IM Academy?
            </label>
            <textarea
              name="whyImAcademy"
              value={formData.whyImAcademy}
              onChange={handleChange}
              style={styles.textField}
              rows="3"
            />
          </div>

          {/* שאלה 5 */}
          <div style={styles.formControl}>
            <label style={styles.label}>
              איפה אתה רואה את עצמך בעוד שנה מהיום אם תתחיל איתנו עכשיו?
            </label>
            <textarea
              name="futureVision"
              value={formData.futureVision}
              onChange={handleChange}
              style={styles.textField}
              rows="3"
            />
          </div>

          {/* שאלה 6 */}
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
                  checked={formData.investmentUnderstanding === 'כן'}
                  onChange={handleChange}
                  style={styles.radio}
                />
                כן
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="investmentUnderstanding"
                  value="לא"
                  checked={formData.investmentUnderstanding === 'לא'}
                  onChange={handleChange}
                  style={styles.radio}
                />
                לא
              </label>
            </div>
          </div>

          {/* שאלה 7 */}
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
                  checked={formData.readyToCommit === 'כן'}
                  onChange={handleChange}
                  style={styles.radio}
                />
                כן
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="readyToCommit"
                  value="לא"
                  checked={formData.readyToCommit === 'לא'}
                  onChange={handleChange}
                  style={styles.radio}
                />
                לא
              </label>
            </div>
          </div>

          {/* שאלה 8 */}
          <div style={styles.formControl}>
            <label style={styles.label}>
              במידה ונראה שאתה מתאים - מתי תהיה זמין להתחלת התהליך?
            </label>
            <div style={{...styles.radioGroup, flexWrap: 'wrap'}}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="startDate"
                  value="מיידי"
                  checked={formData.startDate === 'מיידי'}
                  onChange={handleChange}
                  style={styles.radio}
                />
                מיידי
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="startDate"
                  value="תוך שבוע"
                  checked={formData.startDate === 'תוך שבוע'}
                  onChange={handleChange}
                  style={styles.radio}
                />
                תוך שבוע
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="startDate"
                  value="תוך חודש"
                  checked={formData.startDate === 'תוך חודש'}
                  onChange={handleChange}
                  style={styles.radio}
                />
                תוך חודש
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            style={styles.button}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
            שלח טופס
          </button>
        </form>
      </div>
    </div>
  );
}