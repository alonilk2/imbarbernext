import useWindowSize from "@/hooks/useWindowSize";
import { Rating } from "@mui/material";

export default function GoogleReview({ review }) {
  const { author_name, text } = review;
  const isMobile = useWindowSize().width <= 768; // בדיקה אם המכשיר נייד
  return (
    <div className={isMobile ? "review-container-mobile" : "review-container"}>
      <Rating name="text-feedback" value={5} readOnly precision={1} />
      <p>{text}</p>
      <p className="name">{author_name}</p>
    </div>
  );
}
