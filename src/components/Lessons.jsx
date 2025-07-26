import CourseHeader from "./CourseHeader";
import { CourseList } from "./ui";
import { COURSE_DATA } from "../utils/constants";

export default function Lessons() {
  return (
    <section className="third-section">
      <div className="rounded-outline"></div>
      <div className="brush">
        <h2 className="courses-title">מסלולים</h2>
      </div>
      
      <CourseHeader
        courseType={COURSE_DATA.group.type}
        lessonsCount={COURSE_DATA.group.lessons}
        equipType={COURSE_DATA.group.equipment}
      />
      <CourseList items={COURSE_DATA.group.items} />

      <CourseHeader
        courseType={COURSE_DATA.oneOnOne.type}
        lessonsCount={COURSE_DATA.oneOnOne.lessons}
        equipType={COURSE_DATA.oneOnOne.equipment}
      />
      <CourseList items={COURSE_DATA.oneOnOne.items} />
    </section>
  );
}