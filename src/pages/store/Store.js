import { CgViewSplit } from 'react-icons/cg';
import { MdCalendarViewMonth } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StoreModal from '../../components/storeModal/StoreModal';
import PageList from './PageList';
import Items from './Items';
import './Store.scss';

const Store = () => {
  const [items, setItems] = useState([]);
  const [listType, setListType] = useState('small');
  const [openModal, setOpenModal] = useState(false);
  const [itemData, setItemData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://10.58.1.252:8000/products/list${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => setItems(result.product_list));
  }, [location.search]);

  // ** MOCK DATA **
  // useEffect(() => {
  //   fetch('/data/ITEM_LIST.json')
  //     .then(res => res.json())
  //     .then(result => setItems(result));
  // }, []);

  const goToPage = btnIndex => {
    const limit = 8;
    const offset = btnIndex * limit;
    const queryString = `?offset=${offset}&limit=${limit}`;
    navigate(`${queryString}`);
  };

  const sortNewest = () => {
    const queryString = '?sort_method=-the_newest';
    navigate(`${queryString}`);
  };

  const sortName = () => {
    const queryString = '?sort_method=name';
    navigate(`${queryString}`);
  };

  const sortHighPrice = () => {
    const queryString = '?sort_method=price';
    navigate(`${queryString}`);
  };

  const sortLowPrice = () => {
    const queryString = '?sort_method=-price';
    navigate(`${queryString}`);
  };

  const changeBigList = () => {
    setListType('big');
  };

  const changeSmallList = () => {
    setListType('small');
  };

  const getItemData = ItemData => {
    setOpenModal(true);
    setItemData(ItemData);
  };

  // 시간 부족으로 미구현
  // const firstPage = () => {};
  // const previousPage = btnIndex => {};
  // const nextPage = btnIndex => {};
  // const lastPage = () => {};

  return (
    <>
      {openModal && <StoreModal items={itemData} closeModal={setOpenModal} />}
      <div className="store">
        <section>
          <h2>전체상품</h2>
          <div className="itemCategory">
            <div className="itemAmount">
              <b>{items.length}</b>
              <span>개의 상품이 있습니다.</span>
            </div>
            <div className="itemSort">
              <button onClick={sortNewest}>신상품</button>
              <button onClick={sortName}>상품명</button>
              <button onClick={sortHighPrice}>낮은가격</button>
              <button onClick={sortLowPrice}>높은가격</button>
              <button onClick={changeSmallList} className="icon">
                <MdCalendarViewMonth />
              </button>
              <button onClick={changeBigList} className="icon">
                <CgViewSplit />
              </button>
            </div>
          </div>
          <div className="itemList">
            {items.map(({ id, state, thumbnail, name, price }) => {
              return (
                <Items
                  getItemData={getItemData}
                  id={id}
                  listType={listType}
                  key={id}
                  state={state}
                  img={thumbnail}
                  itemName={name}
                  price={price}
                />
              );
            })}
          </div>
          <PageList
            goToPage={goToPage}
            // 시간 부족으로 미구현
            // firstPage={firstPage}
            // previousPage={previousPage}
            // nextPage={nextPage}
            // lastPage={lastPage}
          />
        </section>
      </div>
    </>
  );
};

export default Store;
