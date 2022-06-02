const PageList = ({
  goToPage,
  firstPage,
  previousPage,
  nextPage,
  lastPage,
}) => {
  const pageButton = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  // function Pagination({ total, limit, btnIndex }) {
  //   const numPages = Math.ceil(total / limit);
  // }

  return (
    <div className="pageList">
      <button onClick={firstPage}>FIRST</button>
      <button onClick={previousPage}>
        <span className="leftBtn">{`<`}</span>PREV
      </button>
      <ul>
        {pageButton.map(({ id }) => {
          return (
            <li key={id}>
              <button
                onClick={e => {
                  goToPage(e.target.innerHTML - 1);
                }}
              >
                {id}
              </button>
            </li>
          );
        })}
        {/* <div className="pagination">
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <button
                className="paginationBtn"
                key={i + 1}
                onClick={e => btnIndex(e.target.innerText)}
              >
                {i + 1}
              </button>
            ))}
        </div> */}
      </ul>
      <button onClick={nextPage}>
        NEXT<span className="rightBtn">{`>`}</span>
      </button>
      <button onClick={lastPage}>LAST</button>
    </div>
  );
};

export default PageList;
