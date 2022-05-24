import MainButton from './MainButton';
import './Main.scss';

const Main = () => {
  return (
    <section className="mainSection">
      <img
        src="https://cdn.pixabay.com/photo/2021/02/06/19/31/pancakes-5989144_1280.jpg"
        alt="메인페이지 접시"
      />
      <MainButton />
    </section>
  );
};

export default Main;
