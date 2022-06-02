const PageList = ({
  goToPage,
  firstPage,
  previousPage,
  nextPage,
  lastPage,
}) => {
  const pageButton = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

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
      </ul>
      <button onClick={nextPage}>
        NEXT<span className="rightBtn">{`>`}</span>
      </button>
      <button onClick={lastPage}>LAST</button>
    </div>
  );
};

export default PageList;
