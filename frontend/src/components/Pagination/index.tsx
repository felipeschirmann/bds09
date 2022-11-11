import "./styles.css";
import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";
import ReactPaginate from "react-paginate";

type Props = {
  pageCount: number;
  range: number;
  forcePage?: number;
  onChange?: (pageNumber: number) => void;
};

const Pagination = ({ pageCount, range, forcePage, onChange }: Props) => {
  return (
    <div className="pagination-container">
      <ReactPaginate
        forcePage={forcePage}
        pageCount={pageCount}
        pageRangeDisplayed={range}
        marginPagesDisplayed={1}
        containerClassName="pagination-container"
        pageLinkClassName="pagination-item"
        breakClassName="pagination-item"
        previousLabel={<ArrowIcon className="arrow" />}
        nextLabel={<ArrowIcon className="arrow" />}
        nextClassName="arrow-next"
        activeLinkClassName="pagination-active"
        disabledClassName="arrow-inactive"
        onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
      />
    </div>
  );
};

export default Pagination;
