import "./styles.css";
import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <div className="pagination-container">
      <ReactPaginate
        pageCount={5}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        containerClassName="pagination-container"
        pageLinkClassName="pagination-item"
        breakClassName="pagination-item"
        previousLabel={<ArrowIcon />}
        nextLabel={<ArrowIcon />}
        nextClassName="arrow-next"
        activeLinkClassName="pagination-active"
        disabledClassName="arrow-inactive"
      />
    </div>
  );
};

export default Pagination;
