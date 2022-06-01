import { CgViewSplit } from 'react-icons/cg';
import { MdCalendarViewMonth } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageList from './PageList';
import Items from './Items';
import StoreModal from '../../components/storeModal/StoreModal';
import './Store.scss';

const Store = () => {
  const [items, setItems] = useState([]);
  const [listType, setListType] = useState('small');

  useEffect(() => {
    fetch('/data/ITEM_LIST.json')
      .then(res => res.json())
      .then(result => setItems(result));
  }, []);

  const changeBigList = () => {
    setListType('big');
  };

  const changeSmallList = () => {
    setListType('small');
  };

  const firstPage = () => {
    console.log('firstPage');
  };

  const previousPage = () => {
    console.log('previousPage');
  };

  const nextPage = () => {
    console.log('nextPage');
  };

  const lastPage = () => {
    console.log('lastPage');
  };

  const goToPage = btnIndex => {
    console.log(btnIndex);
  };

  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate('/productDetail');
  };

  return (
    <>
      {openModal && <StoreModal closeModal={setOpenModal} />}
      <div className="store">
        <section>
          <h2>전체상품</h2>
          <div className="itemCategory">
            <div className="itemAmount">
              <b>{items.length}</b>
              <span>개의 상품이 있습니다.</span>
            </div>
            <div className="itemSort">
              <button>신상품</button>
              <button>상품명</button>
              <button>낮은가격</button>
              <button>높은가격</button>
              <button onClick={changeSmallList} className="icon">
                <MdCalendarViewMonth />
              </button>
              <button onClick={changeBigList} className="icon">
                <CgViewSplit />
              </button>
            </div>
          </div>
          <div className="itemList">
            {items.map(({ id, state, itemThumbnail, itemName, price }) => {
              return (
                <Items
                  listType={listType}
                  key={id}
                  state={state}
                  img={itemThumbnail}
                  name={itemName}
                  price={price}
                  showModal={setOpenModal}
                  goToDetail={goToDetail}
                />
              );
            })}
          </div>
          <PageList
            goToPage={goToPage}
            firstPage={firstPage}
            previousPage={previousPage}
            nextPage={nextPage}
            lastPage={lastPage}
          />
        </section>
      </div>
    </>
  );
};

export default Store;
