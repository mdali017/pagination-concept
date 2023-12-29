import React from "react";

const Pagination = ({
  totalPosts,
  postPerPage,
  setCurentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= totalPosts / postPerPage; i++) {
    pages.push(i);
  }
  console.log(pages, 8);
  return (
    <div>
      {/* <h1>Pagination</h1> */}
      <div className="mb-">
        {pages.map((page, index) => (
          <button
            className={`border px-3 ${page === currentPage ? "active" : ""}
            `}
            onClick={() => setCurentPage(page)}
            key={index}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
