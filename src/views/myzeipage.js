import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import styles from './myzeipage.module.css'
import DefaultButton from "../components/DefaultButton"
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import LogoImage from "../components/LogoImage";

const Myzeipage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Myzei page - IrkTravel</title>
        <meta property="og:title" content="Myzei page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <LogoImage
            rootClassName="rootClassName14"
            className={styles['Company-logo']}
          ></LogoImage>
        </Link>
        <span className={styles['Company-name']}>
          <span className={styles['text']}>IrkTrave</span>
          <span>l</span>
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
          <h1 className={styles['text2']}>
            <span>Музей Тальцы</span>
            <br></br>
            <span></span>
          </h1>
          <span className={styles['text6']}>
            Архитектурно-этнографический музей «Тальцы» – уникальное собрание
            памятников истории, архитектуры и этнографии XVII–XX вв. Он
            расположен на правом берегу Ангары на 47-м километре Байкальского
            тракта по дороге от Иркутска к Байкалу. Музейный комплекс под
            открытым небом привлекает посетителей возможностью непосредственного
            знакомства с материальной и духовной культурой народов Прибайкалья.
            В музее ретроспективно воссоздано четыре историко-культурные зоны:
            русская, бурятская, эвенкийская и тофаларская. Буряты, эвенки и тофы
            – коренные народности Прибайкалья. Об их быте, особенностях жизни и
            верованиях рассказывают эвенкийские и тофаларские стойбища, комплекс
            эвенкийских захоронений и бурятский улус-летник. Русская
            Ангаро-Илимская экспозиционная зона, в которой собраны памятники
            деревянного зодчества Прибайкалья XVII – начала XX в.,
            преимущественно вывезенные с территории Братского и Усть-Илимского
            районов Иркутской области, представлена несколькими группами.
            Экспозиционный комплекс «Волостное село», воссоздающий
            административный центр конца XIX – начала XX в., включает в себя
            комплекс «Волостное правление», церковно-приходскую школу, усадьбу
            псаломщика, усадьбу городового казака. Главной его
            достопримечательностью являются уникальные памятники истории и
            архитектуры оборонного и культового зодчества: Спасская проезжая
            башня (1667 г.) и Казанская церковь (1679 г.) Илимского острога.
          </span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <DefaultButton className={styles['container']} name={"Назад"} />
            </Link>
          </div>
        </div>
        <img
          src="https://fs.tonkosti.ru/0i/y7/0iy7y0c2lyps08kg0wgcsk8k4.jpg"
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
                rootClassName="rootClassName14"
                className={styles['VK-icon']}
            ></Icon10>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Myzeipage
