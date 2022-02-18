import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LogoImage from '../components/LogoImage'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './k-b-j-dpage.module.css'
import DefaultButton from "../components/DefaultButton";

const KBJDpage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>KBJD page - IrkTravel</title>
        <meta property="og:title" content="KBJD page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <LogoImage
            rootClassName="rootClassName13"
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
            <span>КБЖД</span>
            <br></br>
            <span></span>
          </h1>
          <span className={styles['Text6']}>
            Кругобайкальская железная дорога - уникальный памятник архитектуры и
            одна из самых популярных экскурсий по Байкалу. Она сочетает в себе
            красоту байкальских гор, самого озера, уникальные архитектурные
            сооружения, и конечно же великую историю! Мало кто остается
            равнодушным от той красоты и величия, которое предстает перед ними в
            виде сочетания КБЖД и озера Байкал! В настоящее время
            Кругобайкальской железной дорогой обычно называют ветку Слюдянка II
            — Байкал длиной 89 километров. На дороге сейчас имеется четыре
            станции (Култук, Маритуй, Уланово и Байкал) и один разъезд 137-й км.
            На КБЖД используется 38 тоннелей общей длиной 9063 м (самый длинный
            из них — тоннель через мыс Половинный длиной 777 м), 15 каменных
            галерей общей длиной 295 м (сейчас используется только 5 из них) и 3
            железобетонных галереи с отверстиями, 248 мостов и виадуков, 268
            подпорных стенок. По насыщенности инженерными сооружениями КБЖД не
            имеет равных в России и занимает одно из первых мест в мире. Тоннели
            и каменные галереи КБЖД уникальны тем, что они строились по
            нетиповым проектам и не были перестроены в последующие годы,
            сохранив первоначальный замысел архитекторов и инженеров начала XX
            века.
          </span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <DefaultButton className={styles['component']} name={"Назад"} />
            </Link>
          </div>
        </div>
        <img
          src="https://baikalterra.com/img/kbzhd/kbzhd/kbzhd-1530758074.jpg"
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
                rootClassName="rootClassName13"
                className={styles['VK-icon']}
            ></Icon10>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default KBJDpage
