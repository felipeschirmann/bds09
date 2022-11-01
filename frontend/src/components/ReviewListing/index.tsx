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
            <p>{comment.user.name}</p>
          </div>
          <textarea
            name="comments"
            id=""
            readOnly
            value={comment.text}
          ></textarea>
        </div>
      ))}
    </>
  );
};

export default ReviewListing;
