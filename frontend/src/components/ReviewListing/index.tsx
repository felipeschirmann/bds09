import { ReactComponent as Star } from "assets/images/star.svg";
import { Review } from "types/review";

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <>
      {reviews?.map((comment) => (
        <div className="container-comments" key={comment.id}>
          <div className="comments-title">
            <Star />
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
