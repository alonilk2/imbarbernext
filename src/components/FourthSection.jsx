import { RowsPhotoAlbum } from "react-photo-album";
import useWindowSize from "../hooks/useWindowSize";
import Slideshow from "./Slideshow";
import Socials from "./Socials";
import "react-photo-album/rows.css";

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
    src: "/assets/images/365973163_3611257245820627_9153701522228245834_n.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "/assets/images/366123880_957821968765001_4965962855025676254_n.jpg",
    width: 300,
    height: 400,
  },

  {
    src: "/assets/images/IMG_1866-min.JPG",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_1881-min.jpg",
    width: 400,
    height: 600,
  },
  {
    src: "/assets/images/IMG_1893-min.jpg",
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
  },  {
    src: "/assets/images/IMG_5126-min.jpg",
    width: 400,
    height: 700,
    },  {
    src: "/assets/images/IMG_5127-min.jpg",
    width: 400,
    height: 700,
    },  {
    src: "/assets/images/IMG_5128-min.jpg",
    width: 400,
    height: 700,
  },  {
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
  },  {
    src: "/assets/images/IMG_2101-min.jpg",
    width: 400,
    height: 600,
    },  {
    src: "/assets/images/IMG_2132-min.jpg",
    width: 400,
    height: 600,
    },  {
    src: "/assets/images/IMG_2136-min.jpg",
    width: 400,
    height: 600,
  },  {
    src: "/assets/images/IMG_2161-min.jpg",
    width: 400,
    height: 600,
  },  {
    src: "/assets/images/IMG_2174-min.jpg",
    width: 400,
    height: 600,
  },  {
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
  {
    author_name: "Tal Knyazev",
    text: "מקום נקי עם אווירה טובה, ספרים ואנשים מאוד חברותיים, שירות של בית מלון 5 כוכבים והכי חשוב ספרים הכי מקצועים שיש עם הרמה הכי גבוהה שיש אין מצב שלא תצאו עם חיוך על הפנים ועם התספורת הכי טובה שיש ממליץ בחום",
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
          <Socials
            iconSize={48}
            linkStyle={{ color: "#cc7a00" }}
            containerStyle={{ marginTop: "5%" }}
          />
        </div>
      </div>



      <div className="recommendation">
        <h2>לקוחות ממליצים:</h2>

        <Slideshow reviews={reviews} />
      </div>
      <div className="recommendation">
        <h2>הצצה לתהליך:</h2>

        <RowsPhotoAlbum photos={photos} targetRowHeight={600} />
      </div>
    </section>
  );
}
