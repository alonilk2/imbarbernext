import Gallery from "react-photo-gallery";
import GoogleReview from "./GoogleReview";
import { SocialIcon } from "react-social-icons";
import useWindowSize from "../hooks/useWindowSize";

const photos = [
  {
    src: "/assets/images/IMG_2693.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/assets/images/IMG_5753.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/assets/images/IMG_6657.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/assets/images/IMG_7135.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/assets/images/IMG_7152.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/assets/images/IMG_7374.jpg",
    width: 3,
    height: 4,
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
    width: 3,
    height: 4,
  },
  {
    src: "/assets/images/367363791_6396963823686581_6020232073178473218_n.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/assets/images/365973163_3611257245820627_9153701522228245834_n.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/assets/images/366123880_957821968765001_4965962855025676254_n.jpg",
    width: 3,
    height: 4,
  },
];

function PhotoAlbum() {
  return <Gallery photos={photos} targetRowHeight={600} />;
}

const reviews = [
  {
    author_name: "יאיר גולדשטיין",
    author_url:
      "https://www.google.com/maps/contrib/107751446021654339077/reviews",
    language: "iw",
    original_language: "iw",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMQRhvkpcVru0d8rqv2ImXfY7Fgg83Esw1NMIaynBfjl2ck=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "in the last week",
    text: "אווירה מדהימה, כשאתה נכנס אתה מרגיש כאילו אתה נכנס לבית מלון,ריח טוב, אווירה טובה, ישר מקבל חיוך מהספרים.\nברגע שאתה נכנס למספרה אתה מקבל הצעה לקפה/מים ועוד המון חטיפים ודברים מתוקים אחרים.\nהכל מתוקתק במספרה והניקיון זה החלק הכי טוב שם.\nממליץ בחום",
    time: 1691955038,
    translated: false,
  },
  {
    author_name: "נחשון יזרייב",
    author_url:
      "https://www.google.com/maps/contrib/115324118043971305782/reviews",
    language: "iw",
    original_language: "iw",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AAcHTtdu88TMbnmin6W2Lc5TPCqXwPq4aK1Ub2IFvcsUwEEu=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "in the last week",
    text: "המספרה הכי טובה בצפון בפער!!\nיחס אדיב שירותי, מקבלים אותך בחיוך,\nאתה מקבל יחס אישי, דיוק עד לפרטים הקטנים, אווירה טובה, מציעים לך שתייה וכל דבר שאתה רק צריך, נקי חיטוי על כל דבר\nאין מילים באמת ממליץ בחום לכולם!!!❤️",
    time: 1691958483,
    translated: false,
  },
  {
    author_name: "שובל לוי",
    author_url:
      "https://www.google.com/maps/contrib/118292548582591872043/reviews",
    language: "iw",
    original_language: "iw",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AAcHTtebkp1GxDBvC9DjMtX3_A7EHLyHV_ceZeGfDokazIJV=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "in the last week",
    text: "יש אנשים שמבחינתם התספורת השבועית זה נטל,\nלא במקרה הזה.\nתענוג להגיע למספרת IM Barber כל פעם מחדש!\nאווירה כיפית ונעימה שגורמת לך להנות מכל תספורת!\nתספורות ברמה הגבוהה ביותר, צוות מקצועי וחזק!\nמומלץ בחום!!!",
    time: 1691961241,
    translated: false,
  },
  {
    author_name: "Nicole Kestelman",
    author_url:
      "https://www.google.com/maps/contrib/102767699469067413381/reviews",
    language: "iw",
    original_language: "iw",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMQcVFN6_LpAqcGEOj2msu-Jc7_zkIb3w5atpJBBOmcDvg=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "in the last week",
    text: "מספרה ברמה הכי גבוהה שיש!\nשירות, צוות מקצועי, מקום נקי עם אווירה טובה !!\nעידן הספר והמורה הכי מקצועיים בצפון, האקדמייה שלו מכשירה את התלמידים להיות ספרים ברמה הכי גבוהה שיש עוד מההתחלה. אקדמיה מספר 1 .\nמומלץ מאוד !!❤️",
    time: 1691959197,
    translated: false,
  },
  {
    author_name: "ולריה גנדניק",
    author_url:
      "https://www.google.com/maps/contrib/110795939331548007365/reviews",
    language: "iw",
    original_language: "iw",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AAcHTtebVAXLRN48L6NyulpYP-2eqgulpJg3aJpCtVLKn5c0=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "in the last week",
    text: "מספרה ברמה הכי גבוהה שיש,\nצוות ספרים שלא רק מוציאים עם תספורת קטלנית אלא גם מביאים יחס אישי מדהים ומה שבטוח שיוצאים גם עם תספורת וגם עם חיוך! מקום מתוקתק, יפה , נקי ואפילו קפה על חשבונם🫢 ללא ספק אחזור שוב!!!!!",
    time: 1691960056,
    translated: false,
  },
];

export default function FourthSection() {
  const { width } = useWindowSize();

  return (
    <section className="gallery">
      <div className="followus">
        <div className="rectangle-yellow" />
        <div className="rectangle-white" />

        <p className="back">יש מצב שאתה עוד לא עוקב?!</p>
        <p className="back-1">יש מצב שאתה עוד לא עוקב?!</p>
        <p className="front">יש מצב שאתה עוד לא עוקב?!</p>
        <div className="socialsrow-follow">
          {width < 550 ? (
            <>
              <SocialIcon
                url="https://www.tiktok.com/@idan_mavlayev?lang=he-IL"
                style={{ width: "8vw", height: "8vw" }}
              />
              <SocialIcon
                url="https://www.instagram.com/imbarber_academy"
                style={{ width: "8vw", height: "8vw" }}
              />
              <SocialIcon
                url="https://www.facebook.com/idanbarber"
                style={{ width: "8vw", height: "8vw" }}
              />
            </>
          ) : (
            <>
              <SocialIcon
                url="https://www.tiktok.com/@idan_mavlayev?lang=he-IL"
                style={{ width: "2.5vw", height: "2.5vw" }}
              />
              <SocialIcon
                url="https://www.instagram.com/imbarber_academy"
                style={{ width: "2.5vw", height: "2.5vw" }}
              />
              <SocialIcon
                url="https://www.facebook.com/idanbarber"
                style={{ width: "2.5vw", height: "2.5vw" }}
              />
            </>
          )}
        </div>
      </div>
      <div className="brush">
        <h2>לקוחות ממליצים</h2>
      </div>
      <div className="recommendation">
        {reviews.map((review) => (
          <GoogleReview review={review} />
        ))}
      </div>

      <PhotoAlbum />
    </section>
  );
}
