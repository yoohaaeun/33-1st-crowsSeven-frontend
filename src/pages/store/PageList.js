const PageList = ({
  goToPage,
  firstPage,
  previousPage,
  nextPage,
  lastPage,
}) => {
  return (
    <div className="pageList">
      <button onClick={firstPage}>FIRST</button>
      <button onClick={previousPage}>
        <span className="leftBtn">{`<`}</span>PREV
      </button>
      <ul>
        <li>
          <button
            onClick={e => {
              goToPage(e.target.innerHTML);
            }}
            className="select"
          >
            1
          </button>
        </li>
        <li>
          <button
            onClick={e => {
              goToPage(e.target.innerHTML);
            }}
          >
            2
          </button>
        </li>
      </ul>
      <button onClick={nextPage}>
        NEXT<span className="rightBtn">{`>`}</span>
      </button>
      <button onClick={lastPage}>LAST</button>
    </div>
  );
};

export default PageList;
