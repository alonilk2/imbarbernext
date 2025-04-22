import { useEffect, useState } from "react";
import ScrollZoomImage from "./ScrollZoomImage";
import useWindowSize from "@/hooks/useWindowSize";

export default function Introduction({contactRef}) {
  const [mounted, setMounted] = useState(false);
  const isMobile = useWindowSize().width < 550; // Adjust this value based on your design breakpoints
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToComponent = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the component
    }
  };

  if (!mounted) return <></>;
  return (
    <section className="first-section">
      <div className="introduction"></div>

      <div className="video-container">
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2 style={{marginBottom: '5%'}}>העתיד שלך מתחיל כאן!</h2>
          <div className="left-pane">
            <p>
              חולם על קריירה מצליחה שתשנה לך את החיים?
              <br />
              זה הרגע לקחת צעד קדימה ולהצטרף לאקדמיה המובילה בתחום הברברינג
              בישראל.
              <br />
              <br />
              במסלול אינטנסיבי וממוקד של חודשיים בלבד, תקבל הכשרה מעשית ברמה
              הגבוהה ביותר,
              <br />
              תלמד מהמאסטרים של התחום, ותצא עם מקצוע מבוקש ויוקרתי לכל החיים.
              <br />
              <br />
              עשרות ספרים בוגרי האקדמיה שלנו כבר הפכו לעצמאיים ומובילים בענף.
              <br />
              עכשיו תורך!
              <br />
              <br />
              <strong>
                הגיע הזמן לעשות את הצעד הראשון – הצטרף אלינו והפוך את התשוקה שלך
                לקריירה מצליחה!
              </strong>
            </p>
            <button onClick={scrollToComponent} className="details-btn">
              לקבלת פרטים נוספים
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video controls preload="metadata" width="400" height="480" poster="/assets/images/videoframe_0.webp">
            <source src="/assets/Firstvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="idan-container">
        <div className="images">
          <ScrollZoomImage
            imageSrc={"/assets/images/idan.jpg"}
            maxScale={1.5}
            minScale={1}
            imageAlt="עידן מבלייב"
          />
        </div>

        <div className="text">
          <div className="title-first">
            יש לנו נסיון של <br />
            <span className="title-second">מעל 100</span>
            <span className="title-second">חניכים</span>
          </div>

          <div className="first-p black">
            <p>
              שלום! אני עידן מבלייב, בעלים ומייסד של IM Barbershop Academy.
              <br />
              יזם, אמן ואיש עסקים.
              <br />
              את הדרך שלי התחלתי ב-2017 מתוך חזון להפוך את האקדמיה והמספרה שלי
              למובילות בתחום.
              <br /> <br />
              במשך השנים הפכתי את המספרה שלי לאימפריה משגשגת בעיר שיש בה תחרות
              רבה, ואני לא רק מנהל – אני גם אחד שמבין את הדרך.
              <br />
              היום אני גאה במעל 100 ספרים שעברו את התהליך איתנו, ממתחילים ועד
              מנוסים, שיצרו תוצאות גדולות בעסק שלהם.
              <br />
              החזון שלי הוא להמשיך להוביל אתכם לתוצאות עוד יותר גדולות.
              <br />
              ואני מבטיח לכם – אני לא עוצר כאן!
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="first-container">
        <div className="images">
          <ScrollZoomImage
            imageSrc={"/assets/images/intro-2.webp"}
            maxScale={1.7}
            minScale={1}
            imageAlt="תמונת רקע"
          />
        </div>

        <div className="text">
          <div className="title-first green">
            ליווי אישי ומקצועי
            <br />
            <span className="title-second">שיתמוך בכם</span>
            <span className="title-second">בדרך</span>
          </div>

          <div className="second-p">
            <p>
              ההצלחה של התלמידים שלנו היא לא רק יעד, היא שליחות.
              <br />
              אנחנו מבטיחים להעניק לכל תלמיד שעובר איתנו את התהליך את הכלים,
              הידע והניסיון שלנו כדי להבטיח את הצלחתו.
              <br />
              הדרך להצלחה דורשת עבודה קשה, השקעה, ולא מעט אמונה עצמית.
              <br />
              אנחנו כאן, בכל רגע, עם הליווי האישי, המקצועי והעסקי שיתמוך בכם
              בדרך.
            </p>
          </div>
          <button onClick={scrollToComponent} className="details-btn">
            לקבלת פרטים נוספים
          </button>
        </div>
      </div>

      <div className="second-container">
        <div className="images">
          <ScrollZoomImage
            imageSrc={"/assets/images/intro-1.webp"}
            maxScale={1.7}
            minScale={1}
            imageAlt="הצצה לקורס"
          />
        </div>

        <div className="text">
          <div className="title-first">
            הדרך להצלחה שלך
            <br />
            <span className="title-second">מתחילה כאן</span>
          </div>

          <div className="second-p">
            <p>
              הדרך של ספר מתחיל לא תמיד קלה.
              <br />
              היא דורשת התמדה, סבלנות, ומעל הכל – רצון אמיתי להצליח ולהתפתח.
              <br />
              אנחנו לא עוזבים אתכם ברגעים הקשים, אנחנו פה כדי לבנות אתכם, להאמין
              בכם, ולהוביל אתכם לניצחון.
              <br />
              זה לא קורה ביום אחד, אבל יום אחד זה יקרה, וביחד נביא אתכם אל המקום
              שאתם שואפים אליו.
              <br />
              הדרך להצלחה שלכם מתחילה כאן, איתנו, ב-IM Barbershop Academy.
              <br />
            </p>
          </div>
          <button onClick={scrollToComponent} className="details-btn-dark">
            לקבלת פרטים נוספים
          </button>
        </div>
      </div>

      <div className="first-container" style={{padding: "5% 0"}}>
        <div className="images">
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <video controls preload="metadata" width="400" height="480" poster="/assets/images/videoframe_3.webp">
              <source src="/assets/early.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="text" style={isMobile ? {padding: "2%"} : {}}>
          <div className="title-first green">
            לא משנה מתי מתחילים
            <br />
            <span className="title-second">תמיד אפשר לעשות את זה נכון</span>
          </div>

          <div className="second-p">
            <p>תצפו בקטע קצר מאחד השיעורים אצלנו באקדמיה, ותבינו שהכל אפשרי.</p>
          </div>
          <button onClick={scrollToComponent} className="details-btn">
            לקבלת פרטים נוספים
          </button>
        </div>
      </div>

      
      <div className="second-container" style={{padding: "5% 0"}}>
      <div className="images">
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <video controls preload="metadata" width="400" height="480" poster="/assets/images/videoframe_2.webp">
              <source src="/assets/baha.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="text">
          <div className="title-first">
            כבר למדת משהו בעבר
            <br />
            <span className="title-second">ועדיין לא מרגיש הבוס של עצמך?</span>
          </div>

          <div className="second-p">
            <p>בוא ותראה מה יש לבהא בוגר האקדמייה שלנו לומר!
            </p>
          </div>
          <button onClick={scrollToComponent} className="details-btn-dark">
            לקבלת פרטים נוספים
          </button>
        </div>
      </div>
    </section>
  );
}
