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
import { connect } from 'react-redux';
import { getCertificate, getContract } from '../redux/CheckAction';
import Loader from './Loader';


const Index = (props) => {
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [modal, setModal] = useState(false);
  const location = useLocation();
  const contract = props.contract;


  const url = location.pathname.replace('/', '');


  useEffect(() => {
    if (url.length) {

      // props.getCertificate(url);
      props.getContract(url);

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
    // report.addFont(props.certificate, 'PDF', 10, 10);
    // report.save('blank.pdf');
    // report.html(document.querySelector('#content')).then(() => {
    //   report.save('blank.pdf');
    // });
    let blob = new Blob([props.certificate], { type: 'application/pdf' });
    console.log(blob);
    report.addPage(blob, 'PDF');
    report.save('blank.pdf');

  };

  const downloadCertificate = () => {

    const report = new JsPDF('portrait', 'pt', 'a4');
    report.html(document.querySelector('#certificate')).then(() => {
      report.save('certificate.pdf');
    });
    // const doc = new JsPDF('portrait', 'pt', 'a4');  // optional parameters
    // doc.addImage(img, 'JPEG', 10, 10, 1000, 2000);
    // doc.save('certificate.pdf');
  };

  console.log(props);
  console.log(contract,
  );


  return (
    <div className={s.main}>
      {
        props.contract.data.contract ?
          <>
            <div className={s.imgContainer}>
              {/*<div className={s.img} style={{ backgroundImage: `url(${bg})` }} />*/}
              <Logo />
            </div>
            <div id="content">


              <div className={s.titleDiv}>
                <h3 className={s.title}>Договор купли продажи
                  № {contract.data.contract.number} от {contract.data.contract.date}
                </h3>
              </div>
            </div>
            <div className={s.container}>
              <div id="content">
                <div className={s.date}>
                  <p>
                    г. Ташкент

                  </p>
                  <p>
                    {contract.data.contract.date}

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
                        <span>{contract.data.contract.salesman_name}</span>
                      </p>
                    </div>
                  </div>
                  <div className={s.selectContent} style={select1 ? { height: '215px' } : { height: '0px' }}>
                    <div className={s.selectContentEl}>
                      <p>
                        Город:
                      </p>
                      <p>
                        {contract.data.contract.salesman_city}
                      </p>
                    </div>
                    <div className={s.selectContentEl}>
                      <p>
                        Адрес:
                      </p>
                      <p>
                        {contract.data.contract.salesman_adress}
                      </p>
                    </div>
                    <div className={s.selectContentEl}>
                      <p>
                        ИНН:
                      </p>
                      <p>
                        {contract.data.contract.salesman_inn}
                      </p>
                    </div>
                    <div className={s.selectContentEl}>
                      <p>
                        Тел:
                      </p>
                      <p>
                        {contract.data.contract.salesman_telephone}
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
                        <span>{contract.data.contract.buyer_name}</span>
                      </p>
                    </div>
                  </div>
                  <div className={s.selectContent} style={select2 ? { height: '170px' } : { height: '0px' }}>
                    <div className={s.selectContentEl}>
                      <p>
                        Город:
                      </p>
                      <p>
                        {contract.data.contract.buyer_city}
                      </p>
                    </div>
                    <div className={s.selectContentEl}>
                      <p>
                        Адрес:
                      </p>
                      <p>
                        {contract.data.contract.buyer_adress}
                      </p>
                    </div>
                    <div className={s.selectContentEl}>
                      <p>
                        Тел:
                      </p>
                      <p>
                        {contract.data.contract.buyer_telephone}
                      </p>
                    </div>
                  </div>
                </div>

                <p className={s.text}>
                  Продавец передает в собственность Покупателя товар (наименование, вид, характеристики товара), а
                  Покупатель
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
                      <span>{contract.data.contract.product}</span>
                    </p>
                  </div>
                  <div className={s.tableEl}>
                    <p>
                      Количество
                    </p>
                    <span className={s.border} />
                    <p>
                      <span> {contract.data.contract.quantity}</span>
                    </p>
                  </div>
                  <div className={s.tableEl}>
                    <p>
                      Цена
                    </p>
                    <span className={s.border} />
                    <p>
                      <span> {contract.data.contract.price}</span>
                    </p>
                  </div>
                  <div className={s.tableEl}>
                    <p>
                      Сумма
                    </p>
                    <span className={s.border} />
                    <p>
                      <span>{contract.data.contract.sum}</span>
                    </p>
                  </div>
                  <div className={s.tableEl}>
                    <p>
                      Сумма доставки
                    </p>
                    <span className={s.border} />
                    <p>
                      <span> {contract.data.contract.cost_of_delivery}</span>
                    </p>
                  </div>

                  <div className={s.tableEl}>
                    <p>
                      ИТОГО:
                    </p>
                    <span className={s.border} />
                    <p>
                      <span> {contract.data.contract.total_sum}</span>
                    </p>
                  </div>

                </div>

                <p className={s.text}>Продавец обязан передать Покупателю Товар надлежащего качества и в надлежащей
                  упаковке в
                  порядке и в сроки, предусмотренные настоящим Договором, передать Товар свободным от прав третьих лиц.
                </p>
                <p className={s.text}>
                  Покупатель обязан принять Товар от Продавца в порядке и в сроки, предусмотренные настоящим Договором,
                  оплатить
                  Товар в порядке и в сроки, предусмотренные настоящим Договором.
                </p>
                <p className={s.text}>Цена Товара и услуги доставки, передаваемого по настоящему Договору,
                  составляет: {contract.data.contract.total_sum} ({contract.data.contract.total_sum_string}) сум.</p>
                <p className={s.text}>
                  Датой оплаты считается дата передачи Покупателем наличных денежных средств Продавцу либо дата
                  поступления
                  денежных средств на счет Продавца.
                </p>
                <p className={s.text}>
                  Просим проверить целостность упаковки при получении товара.
                </p>
                <p className={s.text}>
                  Благодарим за покупку!
                </p>
              </div>
              <div className={s.divCertificate}>
                <p className={s.certificate} onClick={() => setModal(true)}>
                  сертификаты

                </p>

                {/*<p className={s.certificate} onClick={downloadBlank}>*/}
                {/*  Скачать документов*/}
                {/*</p>*/}
                <a href={contract.data.linkCertificate} className={s.certificate} target="_blank"
                   rel="noreferrer">
                  Скачать документы
                </a>

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
          </>
          :
          <>
            <Loader />
          </>
      }
    </div>
  );


};

const mapStateToProps = (state) => {
  return {
    contract: state.contract,
    certificate: state.certificate,
    link: state.getLink,
  };
};


export default connect(mapStateToProps, {
  getContract,
  getCertificate,
})(Index);