import { Divider } from "@mui/material";

export default function CourseHeader({ courseType, lessonsCount, equipType }) {
  return (
    <div className="courseheader">
      <div className="courseheader-column">
        <p
          className="courseheader-column-title-large light-brown"
          style={
            courseType === "קורס אינטנסיבי" ? {
              transform: `translateX(-5%)`,
            } : null
          }
        >
          {courseType}
          {courseType === "קורס אינטנסיבי" && (
            <span className="recommended">(מומלץ)</span>
          )}
        </p>
      </div>
      <Divider
        orientation="vertical"
        flexItem
        light
        className="divider-brown"
      />
      <div className="courseheader-column">
        <p className="courseheader-column-number silver">{lessonsCount}</p>
        <p className="courseheader-column-title silver">שיעורים מקיפים</p>
      </div>
      <Divider
        orientation="vertical"
        flexItem
        light
        className="divider-brown"
      />

      <div className="courseheader-column">
        {equipType === "ציוד מתקדם" ? (
          <p className="courseheader-column-title-large cherry">{equipType}</p>
        ) : (
          <p className="courseheader-column-title-large silver">{equipType}</p>
        )}
      </div>
    </div>
  );
}
