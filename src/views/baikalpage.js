import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import DefaultButton from '../components/DefaultButton'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './baikalpage.module.css';
import LogoImage from "../components/LogoImage";

const Baikalpage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Baikal page - IrkTravel</title>
        <meta property="og:title" content="Baikal page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <LogoImage
            rootClassName="rootClassName11"
            className={styles['Company-logo']}
          ></LogoImage>
        </Link>
        <span className={styles['Company-name']}>
          <span className={styles['text']}>IrkTravel</span>
        </span>
        <nav className={styles['Nav']}>
          <Link to="/baikalpage" className={styles['navlink1']}>
            <Text className={styles['component']}></Text>
          </Link>
          <Link to="/irkutskpage" className={styles['navlink2']}>
            <Text1 className={styles['component1']}></Text1>
          </Link>
          <Link to="/about-mepage" className={styles['navlink3']}>
            <Text2 className={styles['component2']}></Text2>
          </Link>
        </nav>
      </header>
      <div className={styles['Body']}>
        <div className={styles['container1']}>
          <h1 className={styles['text2']}>Озеро Байкал</h1>
          <span className={styles['Text3']}>
            <span className={styles['text4']}>
              Расположено озеро на юге Восточной Сибири. Имеет оно тектоническое
              происхождение, т. е. расположено в разломе земной коры. В районе
              Байкала постоянно происходят небольшие землетрясения. Длина озера
              636 км. Ширина в разных местах изменяется от 24 до 79 км. Озеро
              является самым глубоким в мире. Максимальная его глубина 1642м,
              средняя глубина 744м. В Байкал впадает 336 рек, а вытекает только
              одна – Ангара. Вода в озере очень чистая, благодаря эндемику
              (организму, который обитает только в этом озере) рачку эпишуре. Он
              очищает воду, пропуская её через свой организм. В воде очень мало
              взвешенной органики минеральных частиц. Прозрачность воды
              настолько велика, что камни и предметы видны на глубине до 40 м.
              Вода холодная. Летом её температура +8-9 градусов. С начала января
              и до начала мая озеро покрывается льдом. Не замерзает только
              небольшой участок у истока Ангары. В пределах акватории озера
              насчитывается 30 островов, но только один из них крупный – Ольхон.
              Две трети всех обитателей Байкала уникальны. Самые известные
              представители Байкальской эндемичной фауны – это Байкальский
              омуль, нерпа, рыба голомянка и многочисленные ракообразные,
              которые являются главными чистильщиками озера. Озеро Байкал
              включено в перечень объектов «Всемирного природного наследия».
            </span>
          </span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <DefaultButton className={styles['container']} name={"Назад"} />
            </Link>
          </div>
        </div>
        <img
          src="https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2019-02/RIAN_5626737.HR_.ru_.jpg?itok=wSFQZEYH"
          loading="eager"
          className={styles['Baikal-image']}
        />
      </div>
      <footer className={styles['Footer']}>
        <span className={styles['Footer-text']}>
          © 2021 Gleb Liatokhov, All Rights Reserved.
        </span>
        <div className={styles['IconGroup']}>
          <a
              href="https://www.instagram.com/liatokhov/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link']}
          >
            <Icon8 className={styles['Instagram-icon']}></Icon8>
          </a>
          <a
              href="https://t.me/Gleb6095"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link1']}
          >
            <Icon9 className={styles['Telegram-icon']}></Icon9>
          </a>
          <a
              href="https://vk.com/liatokhov"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link2']}
          >
            <Icon10
                rootClassName="rootClassName11"
                className={styles['VK-icon']}
            ></Icon10>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Baikalpage
