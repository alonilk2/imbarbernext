import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Socials from "./Socials";
import useWindowSize from "@/hooks/useWindowSize";
import "react-photo-album/rows.css";

const RowsPhotoAlbum = dynamic(
  () => import("react-photo-album").then((mod) => mod.RowsPhotoAlbum),
  {
    ssr: false,
    loading: () => (
      <div className="gallery__placeholder">
        <span>טוען את הגלריה…</span>
      </div>
    ),
  }
);

const photos = [
  {
    src: "/assets/images/IMG_2693.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "/assets/images/IMG_5753.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "/assets/images/IMG_6657.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "/assets/images/IMG_7135.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "/assets/images/IMG_7152.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "/assets/images/IMG_6661.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/assets/images/IMG_6663.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/assets/images/366422800_1577079526152606_7295038832287343510_n.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "/assets/images/367363791_6396963823686581_6020232073178473218_n.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "/assets/images/365973163_3611257245820627_9153701522228245834_n.webp",
    width: 300,
    height: 400,
  },
  {
    src: "/assets/images/366123880_957821968765001_4965962855025676254_n.webp",
    width: 300,
    height: 400,
  },

  {
    src: "/assets/images/IMG_1866-min.webp",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_1881-min.webp",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_1893-min.webp",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_5107-min.jpg",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_5115-min.jpg",
    width: 400,
    height: 700,
  },

  {
    src: "/assets/images/IMG_5116-min.jpg",
    width: 400,
    height: 700,
  },
  {
    src: "/assets/images/IMG_5126-min.jpg",
    width: 400,
    height: 700,
  },
  {
    src: "/assets/images/IMG_5127-min.jpg",
    width: 400,
    height: 700,
  },
  {
    src: "/assets/images/IMG_5128-min.jpg",
    width: 400,
    height: 700,
  },
  {
    src: "/assets/images/IMG_5129-min.jpg",
    width: 400,
    height: 700,
  },

  {
    src: "/assets/images/IMG_2076-min.jpg",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_2080-min.jpg",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_2083-min.jpg",
    width: 400,
    height: 600,
  },

  {
    src: "/assets/images/IMG_2092-min.jpg",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_2101-min.jpg",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_2132-min.jpg",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_2136-min.jpg",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_2161-min.jpg",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_2174-min.jpg",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_2182-min.jpg",
    width: 400,
    height: 600,
  },
];

const reviews = [
  {
    author_name: "יאיר גולדשטיין",

    text: "אווירה מדהימה, כשאתה נכנס אתה מרגיש כאילו אתה נכנס לבית מלון,ריח טוב, אווירה טובה, ישר מקבל חיוך מהספרים.\nברגע שאתה נכנס למספרה אתה מקבל הצעה לקפה/מים ועוד המון חטיפים ודברים מתוקים אחרים.\nהכל מתוקתק במספרה והניקיון זה החלק הכי טוב שם.\nממליץ בחום",
  },
  {
    author_name: "נחשון יזרייב",

    text: "המספרה הכי טובה בצפון בפער!!\nיחס אדיב שירותי, מקבלים אותך בחיוך,\nאתה מקבל יחס אישי, דיוק עד לפרטים הקטנים, אווירה טובה, מציעים לך שתייה וכל דבר שאתה רק צריך, נקי חיטוי על כל דבר\nאין מילים באמת ממליץ בחום לכולם!!!❤️",
  },
  {
    author_name: "שובל לוי",

    text: "יש אנשים שמבחינתם התספורת השבועית זה נטל,\nלא במקרה הזה.\nתענוג להגיע למספרת IM Barber כל פעם מחדש!\nאווירה כיפית ונעימה שגורמת לך להנות מכל תספורת!\nתספורות ברמה הגבוהה ביותר, צוות מקצועי וחזק!\nמומלץ בחום!!!",
  },
  {
    author_name: "Nicole Kestelman",
    text: "מספרה ברמה הכי גבוהה שיש!\nשירות, צוות מקצועי, מקום נקי עם אווירה טובה !!\nעידן הספר והמורה הכי מקצועיים בצפון, האקדמייה שלו מכשירה את התלמידים להיות ספרים ברמה הכי גבוהה שיש עוד מההתחלה. אקדמיה מספר 1 .\nמומלץ מאוד !!❤️",
  },
  {
    author_name: "ולריה גנדניק",
    text: "מספרה ברמה הכי גבוהה שיש,\nצוות ספרים שלא רק מוציאים עם תספורת קטלנית אלא גם מביאים יחס אישי מדהים ומה שבטוח שיוצאים גם עם תספורת וגם עם חיוך! מקום מתוקתק, יפה , נקי ואפילו קפה על חשבונם🫢 ללא ספק אחזור שוב!!!!!",
  },
  {
    author_name: "אורן לוי",
    text: "הגעתי למספרה של עידן אחרי המלצה מחבר, קיבלתי שירות מדהים, יחס אישי, תספורת ברמה גבוהה מאוד, אווירה טובה, מקום נקי ומסודר. ממליץ בחום!",
  },
  {
    author_name: "Rial Howari",
    text: "מספרה מס' 1 בצפון!! נוחות, יחס אדיב, מקצועיות וכל מה שאתם צריכים במקום אחד מקצועי. מבטיח תגיעו פעם אחת אתם תתאהבו במקום! חוזר ואומר מקצועיות ואמינות 100% ממליץ בחום!",
  },
];

const SLIDE_INTERVAL = 6000;

export default function FourthSection() {
  const { width } = useWindowSize();
  const slidesToShow = useMemo(() => {
    if (!width) {
      return 1;
    }
    if (width < 600) {
      return 1;
    }
    if (width < 1024) {
      return 2;
    }
    return 3;
  }, [width]);

  const maxIndex = Math.max(0, reviews.length - slidesToShow);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused || reviews.length <= slidesToShow) {
      return undefined;
    }

    const autoplayTimer = setInterval(() => {
      handleNext();
    }, SLIDE_INTERVAL);

    return () => clearInterval(autoplayTimer);
  }, [handleNext, isPaused, slidesToShow]);

  const handleDotClick = useCallback(
    (index) => {
      setCurrentIndex(index);
    },
    []
  );

  const handleTouchStart = useCallback((event) => {
    touchStartX.current = event.touches[0].clientX;
    setIsPaused(true);
  }, []);

  const handleTouchEnd = useCallback(
    (event) => {
      if (touchStartX.current === null) {
        setIsPaused(false);
        return;
      }

      const deltaX = event.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          handlePrev();
        } else {
          handleNext();
        }
      }

      touchStartX.current = null;
      setIsPaused(false);
    },
    [handleNext, handlePrev]
  );

  const sliderTrackStyle = useMemo(
    () => ({
      "--slides-to-show": slidesToShow,
      "--slide-index": currentIndex,
    }),
    [slidesToShow, currentIndex]
  );

  const pageCount = maxIndex + 1;

  return (
    <section className="gallery">
      <div className="followus layout-container">
        <div className="followus__card">
          <p className="followus__eyebrow">יש מצב שאתה עוד לא עוקב?!</p>
          <h2 className="followus__title">הצטרפו לקהילה שלנו</h2>
          <p className="followus__subtitle">
            קבלו הצצות מאחורי הקלעים, טיפים יומיומיים וטרנדים חמים לפני כולם.
          </p>
          <div className="followus__socials">
            <Socials
              iconSize={40}
              linkStyle={{ color: "var(--color-ice-white)" }}
              containerStyle={{ gap: "clamp(0.75rem, 2vw, 1.5rem)" }}
            />
          </div>
        </div>
      </div>

      <div className="recommendation">
        <div className="brush brush--headline">
          <h2 className="gallery__headline" style={{fontSize: '32px'}}>לקוחות ממליצים:</h2>
        </div>
        <div
          className="reviews-slider"
          role="region"
          aria-label="סיפורי לקוחות"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="reviews-slider__viewport">
            <div className="reviews-slider__track" style={sliderTrackStyle}>
              {reviews.map((review) => (
                <article className="reviews-slider__card" key={review.author_name}>
                  <div className="reviews-slider__card-inner">
                    <p className="reviews-slider__text">{review.text}</p>
                    <p className="reviews-slider__author">{review.author_name}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {reviews.length > slidesToShow && (
            <>
              <button
                type="button"
                className="reviews-slider__nav reviews-slider__nav--prev"
                onClick={handlePrev}
                aria-label="המלצה קודמת"
              >
                ‹
              </button>
              <button
                type="button"
                className="reviews-slider__nav reviews-slider__nav--next"
                onClick={handleNext}
                aria-label="המלצה הבאה"
              >
                ›
              </button>
              <div className="reviews-slider__dots" role="tablist" aria-label="בחירת המלצה">
                {Array.from({ length: pageCount }).map((_, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <button
                      key={`review-dot-${index}`}
                      type="button"
                      className={`reviews-slider__dot${isActive ? " reviews-slider__dot--active" : ""}`}
                      onClick={() => handleDotClick(index)}
                      aria-label={`הצגת המלצות עמוד ${index + 1}`}
                      aria-pressed={isActive}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="recommendation">
        <div className="brush brush--headline">
          <h2 className="gallery__headline" style={{fontSize: '32px'}}>הצצה לתהליך:</h2>
        </div>

        <div className="gallery__album">
          <RowsPhotoAlbum photos={photos} targetRowHeight={600} />
        </div>
      </div>
    </section>
  );
}
