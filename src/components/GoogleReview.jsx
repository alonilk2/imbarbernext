import { Rating } from "@mui/material";

export default function GoogleReview({ review }) {
  const { author_name, text } = review;
  return (
    <div className="review-container">
      <Rating name="text-feedback" value={5} readOnly precision={1} />
      <p>{text}</p>
      <p className="name">{author_name}</p>
    </div>
  );
}
