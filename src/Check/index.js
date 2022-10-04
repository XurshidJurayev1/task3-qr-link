import React, { useState } from 'react';
import s from './Check.module.css';
import bg from '../assets/photo_2022-10-03_22-25-48.jpg';
import img from '../assets/img.png';
import { AiOutlineDown, AiFillCloseSquare } from 'react-icons/ai';
import ModalEl from './Modal';

const Index = () => {
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className={s.main}>
      <div className={s.img} style={{ backgroundImage: `url(${bg})` }} />
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

        <div className={s.table}>
          <p className={s.tableTitle}>
            Информация о товаре
          </p>
          <div className={s.tableEl} style={{ borderTop: '0px ! important' }}>
            <p>
              Наименование товара
            </p>
            <span className={s.border} />
            <p>
              PowerMan low
            </p>
          </div>
          <div className={s.tableEl}>
            <p>
              Количество
            </p>
            <span className={s.border} />
            <p>
              1
            </p>
          </div>
          <div className={s.tableEl}>
            <p>
              Цена
            </p>
            <span className={s.border} />
            <p>
              297 000
            </p>
          </div>
          <div className={s.tableEl}>
            <p>
              Сумма
            </p>
            <span className={s.border} />
            <p>
              297 000
            </p>
          </div>

          <div className={s.tableEl}>
            <p>
              ИТОГО:
            </p>
            <span className={s.border} />
            <p>
              297 000
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

        <p className={s.certificate} onClick={() => setModal(true)}>
          сертификаты

        </p>


      </div>
      <ModalEl modal={modal} setModal={setModal} />
    </div>
  );
};

export default Index;