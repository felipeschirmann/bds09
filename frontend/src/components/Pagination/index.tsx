import "./styles.css";
import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <>
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
      <div className="pagination-container">
        <ArrowIcon className="arrow-inactive" />
        <div className="pagination-item active">1</div>
        <div className="pagination-item">2</div>
        <div className="pagination-item">...</div>
        <div className="pagination-item">5</div>
        <ArrowIcon className="arrow-active arrow-next" />
      </div>
    </>
  );
};

export default Pagination;
