/**
 * Reusable course list component
 */
const CourseList = ({ items, className = "" }) => {
  return (
    <div className={`course-container ${className}`}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;