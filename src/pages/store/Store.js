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
  const [totalCounts, setTotalCounts] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://10.58.2.129:8000/products/list${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setItems(result.product_list.products);
        setTotalCounts(result.product_list.total_count);
      });
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

  //{location.search ? urlCategory : '전체상품'}
  const sortNewest = () => {
    location.search
      ? navigate(`?category=${urlCategory}&sort_method=-the_newest`)
      : navigate(`?sort_method=-the_newest`);
  };

  const sortName = () => {
    location.search
      ? navigate(`?category=${urlCategory}&sort_method=name`)
      : navigate(`?sort_method=name`);
  };

  const sortHighPrice = () => {
    location.search
      ? navigate(`?category=${urlCategory}&sort_method=price`)
      : navigate(`?sort_method=price`);
  };

  const sortLowPrice = () => {
    location.search
      ? navigate(`?category=${urlCategory}&sort_method=-price`)
      : navigate(`?sort_method=-price`);
  };

  const changeBigList = () => {
    setListType('big');
  };

  const changeSmallList = () => {
    setListType('small');
  };

  const firstPage = () => {};
  const previousPage = btnIndex => {};
  const nextPage = btnIndex => {};
  const lastPage = () => {};

  const getItemData = ItemData => {
    setOpenModal(true);
    setItemData(ItemData);
  };

  // console.log('store qs', decodeURIComponent(location.search));
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get('category');

  const goToMaterial = e => {
    location.search
      ? navigate(`?category=${urlCategory}&material=${e.target.innerHTML}`)
      : navigate(`?sort_method=-price`);
  };

  const CATEGORY = {
    컵: [
      { id: 1, name: '마블' },
      { id: 2, name: '스틴슨' },
      { id: 3, name: '클래식' },
    ],
    플레이트: [
      { id: 1, name: '마블' },
      { id: 2, name: '스틴슨' },
      { id: 3, name: '클래식' },
    ],
    보울: [
      { id: 1, name: '마블' },
      { id: 3, name: '클래식' },
    ],
    키친웨어: [{ id: 1, name: '마블' }],
    굿즈: [
      { id: 1, name: '휴대폰케이스' },
      { id: 2, name: '에어팟케이스' },
      { id: 3, name: '신발' },
    ],
  };

  return (
    <>
      {openModal && <StoreModal items={itemData} closeModal={setOpenModal} />}
      <div className="store">
        <section>
          <h2>{location.search ? urlCategory : '전체상품'}</h2>
          {urlCategory && (
            <div className="category">
              {CATEGORY[urlCategory].map(({ id, name }) => {
                return (
                  <button key={id} onClick={goToMaterial}>
                    {name}
                  </button>
                );
              })}
            </div>
          )}
          <div className="itemCategory">
            <div className="itemAmount">
              <b>{items.length && totalCounts}</b>
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
            {items.map(({ id, itemThumbnail, itemName, price }) => {
              return (
                <Items
                  getItemData={getItemData}
                  id={id}
                  listType={listType}
                  key={id}
                  img={itemThumbnail}
                  itemName={itemName}
                  price={price}
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
