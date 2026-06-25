import { Review } from "types/review";

const StarIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7 0.5L8.76 5.74H14L9.62 9.02L11.38 14.26L7 10.98L2.62 14.26L4.38 9.02L0 5.74H5.24L7 0.5Z"
      fill="#FF8400"
    />
  </svg>
);

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <>
      {reviews?.map((comment) => (
        <div className="container-comments" key={comment.id}>
          <div className="comments-title">
            <StarIcon />
            <h5 className="comment-user-name">{comment.user.name}</h5>
          </div>
          <div className="comment-text-container">
            <p className="comment-text">{comment.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReviewListing;
