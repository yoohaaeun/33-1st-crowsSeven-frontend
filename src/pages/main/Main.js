import './Main.scss';

const MainButton = () => {
  return <button className="mainButton">구매하기</button>;
};

const Main = () => {
  return (
    <section className="mainSection">
      <img
        className="mainImage"
        src="https://cdn.pixabay.com/photo/2019/05/04/14/31/ceramic-4178215_1280.jpg"
        alt="메인페이지 접시"
      />
      <MainButton />
    </section>
  );
};

export default Main;
