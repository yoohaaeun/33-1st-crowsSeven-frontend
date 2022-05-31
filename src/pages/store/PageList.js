const PageList = () => {
  return (
    <div className="pageList">
      <button>FIRST</button>
      <button>
        <span className="leftBtn">{`<`}</span>PREV
      </button>
      <ul>
        <li>
          <button className="select">1</button>
        </li>
        <li>
          <button>2</button>
        </li>
      </ul>
      <button>
        NEXT<span className="rightBtn">{`>`}</span>
      </button>
      <button>LAST</button>
    </div>
  );
};

export default PageList;
