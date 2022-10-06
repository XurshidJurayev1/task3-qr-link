import React, { useEffect, useState } from 'react';
import s from './Check.module.css';
// import bg from '../assets/Logo2.png';
import bg from '../assets/Euph1.png';
import { ReactComponent as Logo } from '../assets/Euph1 1.svg';
import img from '../assets/img.png';
import { AiOutlineDown, AiFillCloseSquare } from 'react-icons/ai';
import ModalEl from './Modal';
import JsPDF from 'jspdf';
import Modal from 'react-modal';
import jsPDF from 'jspdf';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { api } from '../Api/api';


const Index = () => {
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [modal, setModal] = useState(false);
  const { response, setResponse } = useState();
  const location = useLocation();

  const url = location.pathname.replace('/', '');

  console.log(url);

  console.log(process.env.REACT_APP_URL);

  const user = {
    Username: 'ContractUser', Password: 'X9knh2W6c9SP2H08',
  };

  useEffect(() => {
    if (url.length) {
      const func = async () => {
        await api().post('trade/hs/orderscontract/contract', { order: url }, {
          headers: {
            Authorization: 'Basic ' + btoa(user.Username + ':' + user.Password),
          },

        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      };
      func();
    }
  }, []);

  const customStyles = {
    content: {
      top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)',
    }, overlay: {
      background: 'rgba(51, 51, 51, 0.58)',
    },
  };

  const closeModal = () => {
    setModal(false);
  };
  const downloadBlank = () => {
    const report = new JsPDF('portrait', 'pt', 'a4');
    report.addFont(data, 'TEXT', 10, 10);
    report.save('blank.pdf');
    // report.html(document.querySelector('#blank')).then(() => {
    //   report.save('blank.pdf');
    // });
  };

  const downloadCertificate = () => {
    console.log('asdasd');
    const report = new JsPDF('portrait', 'pt', 'a4');
    report.html(document.querySelector('#certificate')).then(() => {
      report.save('certificate.pdf');
    });
    // const doc = new JsPDF('portrait', 'pt', 'a4');  // optional parameters
    // doc.addImage(img, 'JPEG', 10, 10, 1000, 2000);
    // doc.save('certificate.pdf');
  };

  const data = {
    Наименованиетовара: 'PowerMan low',
    Количество: '1',
    Цена: '297 000',
    Сумма: '297 000',
    ИТОГО: 'Двести девяносто семь тысяч сум												297 000',

  };


  return (<div className={s.main}>
      <div className={s.imgContainer}>
        {/*<div className={s.img} style={{ backgroundImage: `url(${bg})` }} />*/}
        <Logo />
      </div>
      <div className={s.titleDiv}>
        <h3 className={s.title}>Договор купли продажи № 764803 от 17.08.2022
        </h3>
      </div>
      <div className={s.container}>
        <div className={s.date}>
          <p>
            г. Ташкент

          </p>
          <p>
            17.08.2022

          </p>
        </div>

        <div className={s.select}>
          <div className={s.selectHeader} onClick={() => setSelect1(!select1)}>
            <div className={s.iconSelect} style={select1 ? { transform: 'rotate(-180deg)' } : null}>
              <AiOutlineDown />
            </div>
            <div className={s.selectTitle}>
              <p>
                Продавец:
              </p>
              <p>
                <span>YaTT AKBAROV M.A.</span>
              </p>
            </div>
          </div>
          <div className={s.selectContent} style={select1 ? { height: '195px' } : { height: '0px' }}>
            <div className={s.selectContentEl}>
              <p>
                Город:
              </p>
              <p>
                Ташкент
              </p>
            </div>
            <div className={s.selectContentEl}>
              <p>
                Адрес:
              </p>
              <p>
              </p>
            </div>
            <div className={s.selectContentEl}>
              <p>
                ИНН:
              </p>
              <p>
                517029982
              </p>
            </div>
            <div className={s.selectContentEl}>
              <p>
                Тел:
              </p>
              <p>
                555036996
              </p>
            </div>
          </div>
        </div>

        <div className={s.select}>
          <div className={s.selectHeader} onClick={() => setSelect2(!select2)}>
            <div className={s.iconSelect} style={select2 ? { transform: 'rotate(-180deg)' } : null}>
              <AiOutlineDown />
            </div>
            <div className={s.selectTitle}>
              <p>
                Покупатель:
              </p>
              <p>
                <span>Rashid Jahonov Pirimqulovich</span>
              </p>
            </div>
          </div>
          <div className={s.selectContent} style={select2 ? { height: '150px' } : { height: '0px' }}>
            <div className={s.selectContentEl}>
              <p>
                Город:
              </p>
              <p>
                Карши
              </p>
            </div>
            <div className={s.selectContentEl}>
              <p>
                Адрес:
              </p>
              <p>
              </p>
            </div>
            <div className={s.selectContentEl}>
              <p>
                Тел:
              </p>
              <p>
                998996682000
              </p>
            </div>
          </div>
        </div>

        <p className={s.text}>
          Продавец передает в собственность Покупателя товар (наименование, вид, характеристики товара), а Покупатель
          обязуется принять Товар и уплатить за него цену в размере и в порядке, предусмотренных Договором.
        </p>

        <div id="blank" className={s.table}>
          <p className={s.tableTitle}>
            Информация о товаре
          </p>
          <div className={s.tableEl} style={{ borderTop: '0px ! important' }}>
            <p>
              Наименование товара
            </p>
            <span className={s.border} />
            <p>
              <span>PowerMan low</span>
            </p>
          </div>
          <div className={s.tableEl}>
            <p>
              Количество
            </p>
            <span className={s.border} />
            <p>
              <span> 1</span>
            </p>
          </div>
          <div className={s.tableEl}>
            <p>
              Цена
            </p>
            <span className={s.border} />
            <p>
              <span> 297 000</span>
            </p>
          </div>
          <div className={s.tableEl}>
            <p>
              Сумма
            </p>
            <span className={s.border} />
            <p>
              <span> 297 000</span>
            </p>
          </div>
          <div className={s.tableEl}>
            <p>
              Сумма доставки
            </p>
            <span className={s.border} />
            <p>
              <span> 50 000</span>
            </p>
          </div>

          <div className={s.tableEl}>
            <p>
              ИТОГО:
            </p>
            <span className={s.border} />
            <p>
              <span> 347 000</span>
            </p>
          </div>

        </div>

        <p className={s.text}>Продавец обязан передать Покупателю Товар надлежащего качества и в надлежащей упаковке в
          порядке и в сроки, предусмотренные настоящим Договором, передать Товар свободным от прав третьих лиц.
        </p>
        <p className={s.text}>
          Покупатель обязан принять Товар от Продавца в порядке и в сроки, предусмотренные настоящим Договором, оплатить
          Товар в порядке и в сроки, предусмотренные настоящим Договором.
        </p>
        <p className={s.text}>Цена Товара, передаваемого по настоящему Договору, составляет: 297 000 (двести
          девяносто семь тысяч) сум.</p>
        <p className={s.text}>
          Датой оплаты считается дата передачи Покупателем наличных денежных средств Продавцу либо дата поступления
          денежных средств на счет Продавца.
        </p>
        <p className={s.text}>
          Просим проверить целостность упаковки при получении товара.
        </p>
        <p className={s.text}>
          Благодарим за покупку!
        </p>

        <div className={s.divCertificate}>
          <p className={s.certificate} onClick={() => setModal(true)}>
            сертификаты

          </p>

          <p className={s.certificate} onClick={downloadBlank}>
            Скачать документов
          </p>
        </div>


      </div>
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={s.close} onClick={() => setModal(false)}>
          <AiFillCloseSquare />
        </div>
        <div className={s.modalImg} style={{ backgroundImage: `url(${img})` }} id="certificate" />
      </Modal>
    </div>);
};

export default Index;