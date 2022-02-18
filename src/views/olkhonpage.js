import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './olkhonpage.module.css'
import DefaultButton from "../components/DefaultButton";
import LogoImage from "../components/LogoImage";

const Olkhonpage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Olkhon page - IrkTravel</title>
        <meta property="og:title" content="Olkhon page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <LogoImage
            rootClassName="rootClassName12"
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
          <h1 className={styles['text2']}>Остров Ольхон</h1>
          <span></span>
          <span className={styles['text4']}>
            Ольхон - территория мифов и легенд, сказочный остров, величественно
            раскинувшийся в сердце озера Байкал. Ольхон является самым крупным
            островом Байкала и третьим по величине «озерным» островом в мире,
            его общая площадь составляет около 730 кв. км. Всё существование
            Ольхона пропитано мистикой. Этот остров особенно почитаем среди
            шаманов и буддистов: здесь первый бурятский шаман получил
            способность слышать духов и отвечать им, и именно здесь в пещере
            Шаманского мыса обитает с незапамятных времен самое почитаемое на
            Байкале божество – Угутэ-нойон, грозный хозяин Ольхона. Здесь до сих
            пор гнездятся гигантские степные орлы, которые почитались у бурят
            священными животными. В одной из легенд говорится о том, что
            Белоголовый Орел является родным сыном «хозяина» острова Ольхон,
            обитателя ольхонского мыса Бурхан. Орел – защитник ольхонского
            народа от злых божеств. Говорят, что он живет на священной горе Жима
            (вершина острова) до сих пор и высоко в горах командует белоголовыми
            орлами всей Земли. Самое благоприятное время для посещения Ольхона –
            с середины мая по середину декабря, т. к. именно в этот период
            остров имеет постоянную связь с большой землей с помощью паромной
            переправы. Если цель поездки - уединение и любование красотами
            Ольхона, стоит ехать в июне или сентябре. Купаться в эти месяцы
            нельзя, т. к. вода слишком холодная, но зато на острове тихо и
            спокойно. Пиком туристического сезона на Ольхоне являются самые
            теплые месяцы – июль и август, в это время вода в озере достаточно
            прогревается для купания. Климат на острове Ольхон сухой, более 300
            дней в году стоит солнечная погода. Но следует учесть, что почти
            полгода остров продувают сильнейшие горные ветра.
          </span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <DefaultButton className={styles['container']} name={"Назад"} />
            </Link>
          </div>
        </div>
        <img
          src="https://look.com.ua/pic/201402/1920x1080/look.com.ua-93311.jpg"
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
                rootClassName="rootClassName12"
                className={styles['VK-icon']}
            ></Icon10>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Olkhonpage
