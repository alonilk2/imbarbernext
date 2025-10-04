import { Rating } from "@mui/material";

export default function GoogleReview({ review }) {
  const { author_name, text } = review;
  return (
    <article className="testimonial-card">
      <Rating name="text-feedback" value={5} readOnly precision={1} />
      <p className="testimonial-card__text">{text}</p>
      <p className="testimonial-card__name">{author_name}</p>
    </article>
  );
}
