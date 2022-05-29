import React, { useState } from 'react';
import Ordermodal from '../../components/OrderModal/OrderModal';
import './ModalTest.scss';

const Modaltest = () => {
  const [openModal, serOpenModal] = useState(false);

  return (
    <div className="box">
      <button
        className="openModalBtn"
        onClick={() => {
          serOpenModal(true);
        }}
      >
        주문하기!
      </button>
      {openModal && <Ordermodal closeModal={serOpenModal} />}
    </div>
  );
};

export default Modaltest;
