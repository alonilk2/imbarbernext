import useWindowSize from '@/hooks/useWindowSize';
import { useState, useEffect } from 'react';
import { createElement } from 'react';

const styles = {
  container: {
  },
  fixedContainer: {
    height: 900,
    overflow: 'hidden'
  },
  fixedContainerMobile: {
    height: 500,
    overflow: 'hidden'
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    transition: 'transform 0.2s ease-out',
    transformOrigin: 'center center'
  },
  overlay: {
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '24px',
    borderRadius: '8px',
    textAlign: 'center',
    color: 'white',
    maxWidth: '500px'
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  subtitle: {
    fontSize: '1.25rem'
  },
  contentSection: {
    paddingTop: '100vh'
  },
  content: {
    backgroundColor: 'white',
    padding: '32px',
    minHeight: '100vh'
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  paragraph: {
    marginBottom: '16px'
  }
};

export default function ScrollZoomImage({
  imageSrc, 
  imageAlt = "תמונת רקע",
  minScale = 1,
  maxScale = 1.5,
  title = "אפקט זום בגלילה",
  subtitle = "גלול למטה כדי לראות את התמונה מתקרבת"
}) {
  const [scale, setScale] = useState(minScale);
  const {width} = useWindowSize(); // קריאה לפונקציה כדי לעדכן את גובה התמונה אם יש צורך
  // פונקציה שתטפל באירוע הגלילה
  const handleScroll = () => {
    // חישוב אחוז הגלילה של הדף (0-1)
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    // חישוב הסקייל בהתאם לאחוז הגלילה
    const scaleRange = maxScale - minScale;
    const newScale = minScale + (scrollPercentage * scaleRange);
    
    // הגבלת הערך בין minScale ל-maxScale
    const clampedScale = Math.min(maxScale, Math.max(minScale, newScale));
    
    setScale(clampedScale);
  };

  // הוספת מאזין לאירוע גלילה
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // ניקוי המאזין כשהקומפוננטה מתפרקת
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // שילוב סגנון הסקייל הדינמי עם שאר סגנונות התמונה
  const imageStyle = {
    ...styles.image,
    transform: `scale(${scale})`
  };

  return (
    <div style={styles.container}>
      <div style={width <= 550 ? styles.fixedContainerMobile : styles.fixedContainer}>
        <div style={styles.imageWrapper}>
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            style={imageStyle}
          />
          
          <div style={styles.overlay}>
            <div style={styles.textBox}>
              <h1 style={styles.title}>{title}</h1>
              <p style={styles.subtitle}>{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}