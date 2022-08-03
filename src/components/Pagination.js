import React from "react";
import "../scss/_pagination.scss";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="center">
        <div className="pagination">
          {pageNumbers.map((number) => (
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pagination;
