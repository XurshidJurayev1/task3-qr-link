import React from 'react';
import Modal from 'react-modal';
import s from './Check.module.css';
import { AiFillCloseSquare } from 'react-icons/ai';
import img from '../assets/img.png';

const ModalEl = (props) => {
  const { modal, setModal } = props;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      background: 'rgba(51, 51, 51, 0.58)',
    },
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>

      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={s.modalImg} style={{ backgroundImage: `url(${img})` }} />
      </Modal>
      {/*<div className={s.modal} style={modal ? { display: 'flex' } : { display: 'none' }}>*/}
      {/*  <div className={s.modalContent} onBlur={() => setModal(false)}>*/}
      {/*    <div className={s.close} onClick={() => setModal(false)}>*/}
      {/*      <AiFillCloseSquare />*/}
      {/*    </div>*/}
      {/*    <div className={s.modalImg} style={{ backgroundImage: `url(${img})` }} />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default ModalEl;