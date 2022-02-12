import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Button5 from '../components/button5'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './olkhonpage.module.css'

const Olkhonpage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Olkhon page - IrkTravel</title>
        <meta property="og:title" content="Olkhon page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <Image1
            rootClassName="rootClassName12"
            className={styles['Company-logo']}
          ></Image1>
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
          <h1 className={styles['text2']}>ÐÑÑÑÐ¾Ð² ÐÐ»ÑÑÐ¾Ð½</h1>
          <span></span>
          <span className={styles['text4']}>
            ÐÐ»ÑÑÐ¾Ð½ - ÑÐµÑÑÐ¸ÑÐ¾ÑÐ¸Ñ Ð¼Ð¸ÑÐ¾Ð² Ð¸ Ð»ÐµÐ³ÐµÐ½Ð´, ÑÐºÐ°Ð·Ð¾ÑÐ½ÑÐ¹ Ð¾ÑÑÑÐ¾Ð², Ð²ÐµÐ»Ð¸ÑÐµÑÑÐ²ÐµÐ½Ð½Ð¾
            ÑÐ°ÑÐºÐ¸Ð½ÑÐ²ÑÐ¸Ð¹ÑÑ Ð² ÑÐµÑÐ´ÑÐµ Ð¾Ð·ÐµÑÐ° ÐÐ°Ð¹ÐºÐ°Ð». ÐÐ»ÑÑÐ¾Ð½ ÑÐ²Ð»ÑÐµÑÑÑ ÑÐ°Ð¼ÑÐ¼ ÐºÑÑÐ¿Ð½ÑÐ¼
            Ð¾ÑÑÑÐ¾Ð²Ð¾Ð¼ ÐÐ°Ð¹ÐºÐ°Ð»Ð° Ð¸ ÑÑÐµÑÑÐ¸Ð¼ Ð¿Ð¾ Ð²ÐµÐ»Ð¸ÑÐ¸Ð½Ðµ Â«Ð¾Ð·ÐµÑÐ½ÑÐ¼Â» Ð¾ÑÑÑÐ¾Ð²Ð¾Ð¼ Ð² Ð¼Ð¸ÑÐµ,
            ÐµÐ³Ð¾ Ð¾Ð±ÑÐ°Ñ Ð¿Ð»Ð¾ÑÐ°Ð´Ñ ÑÐ¾ÑÑÐ°Ð²Ð»ÑÐµÑ Ð¾ÐºÐ¾Ð»Ð¾ 730 ÐºÐ². ÐºÐ¼. ÐÑÑ ÑÑÑÐµÑÑÐ²Ð¾Ð²Ð°Ð½Ð¸Ðµ
            ÐÐ»ÑÑÐ¾Ð½Ð° Ð¿ÑÐ¾Ð¿Ð¸ÑÐ°Ð½Ð¾ Ð¼Ð¸ÑÑÐ¸ÐºÐ¾Ð¹. Ð­ÑÐ¾Ñ Ð¾ÑÑÑÐ¾Ð² Ð¾ÑÐ¾Ð±ÐµÐ½Ð½Ð¾ Ð¿Ð¾ÑÐ¸ÑÐ°ÐµÐ¼ ÑÑÐµÐ´Ð¸
            ÑÐ°Ð¼Ð°Ð½Ð¾Ð² Ð¸ Ð±ÑÐ´Ð´Ð¸ÑÑÐ¾Ð²: Ð·Ð´ÐµÑÑ Ð¿ÐµÑÐ²ÑÐ¹ Ð±ÑÑÑÑÑÐºÐ¸Ð¹ ÑÐ°Ð¼Ð°Ð½ Ð¿Ð¾Ð»ÑÑÐ¸Ð»
            ÑÐ¿Ð¾ÑÐ¾Ð±Ð½Ð¾ÑÑÑ ÑÐ»ÑÑÐ°ÑÑ Ð´ÑÑÐ¾Ð² Ð¸ Ð¾ÑÐ²ÐµÑÐ°ÑÑ Ð¸Ð¼, Ð¸ Ð¸Ð¼ÐµÐ½Ð½Ð¾ Ð·Ð´ÐµÑÑ Ð² Ð¿ÐµÑÐµÑÐµ
            Ð¨Ð°Ð¼Ð°Ð½ÑÐºÐ¾Ð³Ð¾ Ð¼ÑÑÐ° Ð¾Ð±Ð¸ÑÐ°ÐµÑ Ñ Ð½ÐµÐ·Ð°Ð¿Ð°Ð¼ÑÑÐ½ÑÑ Ð²ÑÐµÐ¼ÐµÐ½ ÑÐ°Ð¼Ð¾Ðµ Ð¿Ð¾ÑÐ¸ÑÐ°ÐµÐ¼Ð¾Ðµ Ð½Ð°
            ÐÐ°Ð¹ÐºÐ°Ð»Ðµ Ð±Ð¾Ð¶ÐµÑÑÐ²Ð¾ â Ð£Ð³ÑÑÑ-Ð½Ð¾Ð¹Ð¾Ð½, Ð³ÑÐ¾Ð·Ð½ÑÐ¹ ÑÐ¾Ð·ÑÐ¸Ð½ ÐÐ»ÑÑÐ¾Ð½Ð°. ÐÐ´ÐµÑÑ Ð´Ð¾ ÑÐ¸Ñ
            Ð¿Ð¾Ñ Ð³Ð½ÐµÐ·Ð´ÑÑÑÑ Ð³Ð¸Ð³Ð°Ð½ÑÑÐºÐ¸Ðµ ÑÑÐµÐ¿Ð½ÑÐµ Ð¾ÑÐ»Ñ, ÐºÐ¾ÑÐ¾ÑÑÐµ Ð¿Ð¾ÑÐ¸ÑÐ°Ð»Ð¸ÑÑ Ñ Ð±ÑÑÑÑ
            ÑÐ²ÑÑÐµÐ½Ð½ÑÐ¼Ð¸ Ð¶Ð¸Ð²Ð¾ÑÐ½ÑÐ¼Ð¸. Ð Ð¾Ð´Ð½Ð¾Ð¹ Ð¸Ð· Ð»ÐµÐ³ÐµÐ½Ð´ Ð³Ð¾Ð²Ð¾ÑÐ¸ÑÑÑ Ð¾ ÑÐ¾Ð¼, ÑÑÐ¾
            ÐÐµÐ»Ð¾Ð³Ð¾Ð»Ð¾Ð²ÑÐ¹ ÐÑÐµÐ» ÑÐ²Ð»ÑÐµÑÑÑ ÑÐ¾Ð´Ð½ÑÐ¼ ÑÑÐ½Ð¾Ð¼ Â«ÑÐ¾Ð·ÑÐ¸Ð½Ð°Â» Ð¾ÑÑÑÐ¾Ð²Ð° ÐÐ»ÑÑÐ¾Ð½,
            Ð¾Ð±Ð¸ÑÐ°ÑÐµÐ»Ñ Ð¾Ð»ÑÑÐ¾Ð½ÑÐºÐ¾Ð³Ð¾ Ð¼ÑÑÐ° ÐÑÑÑÐ°Ð½. ÐÑÐµÐ» â Ð·Ð°ÑÐ¸ÑÐ½Ð¸Ðº Ð¾Ð»ÑÑÐ¾Ð½ÑÐºÐ¾Ð³Ð¾
            Ð½Ð°ÑÐ¾Ð´Ð° Ð¾Ñ Ð·Ð»ÑÑ Ð±Ð¾Ð¶ÐµÑÑÐ². ÐÐ¾Ð²Ð¾ÑÑÑ, ÑÑÐ¾ Ð¾Ð½ Ð¶Ð¸Ð²ÐµÑ Ð½Ð° ÑÐ²ÑÑÐµÐ½Ð½Ð¾Ð¹ Ð³Ð¾ÑÐµ ÐÐ¸Ð¼Ð°
            (Ð²ÐµÑÑÐ¸Ð½Ð° Ð¾ÑÑÑÐ¾Ð²Ð°) Ð´Ð¾ ÑÐ¸Ñ Ð¿Ð¾Ñ Ð¸ Ð²ÑÑÐ¾ÐºÐ¾ Ð² Ð³Ð¾ÑÐ°Ñ ÐºÐ¾Ð¼Ð°Ð½Ð´ÑÐµÑ Ð±ÐµÐ»Ð¾Ð³Ð¾Ð»Ð¾Ð²ÑÐ¼Ð¸
            Ð¾ÑÐ»Ð°Ð¼Ð¸ Ð²ÑÐµÐ¹ ÐÐµÐ¼Ð»Ð¸. Ð¡Ð°Ð¼Ð¾Ðµ Ð±Ð»Ð°Ð³Ð¾Ð¿ÑÐ¸ÑÑÐ½Ð¾Ðµ Ð²ÑÐµÐ¼Ñ Ð´Ð»Ñ Ð¿Ð¾ÑÐµÑÐµÐ½Ð¸Ñ ÐÐ»ÑÑÐ¾Ð½Ð° â
            Ñ ÑÐµÑÐµÐ´Ð¸Ð½Ñ Ð¼Ð°Ñ Ð¿Ð¾ ÑÐµÑÐµÐ´Ð¸Ð½Ñ Ð´ÐµÐºÐ°Ð±ÑÑ, Ñ. Ðº. Ð¸Ð¼ÐµÐ½Ð½Ð¾ Ð² ÑÑÐ¾Ñ Ð¿ÐµÑÐ¸Ð¾Ð´
            Ð¾ÑÑÑÐ¾Ð² Ð¸Ð¼ÐµÐµÑ Ð¿Ð¾ÑÑÐ¾ÑÐ½Ð½ÑÑ ÑÐ²ÑÐ·Ñ Ñ Ð±Ð¾Ð»ÑÑÐ¾Ð¹ Ð·ÐµÐ¼Ð»ÐµÐ¹ Ñ Ð¿Ð¾Ð¼Ð¾ÑÑÑ Ð¿Ð°ÑÐ¾Ð¼Ð½Ð¾Ð¹
            Ð¿ÐµÑÐµÐ¿ÑÐ°Ð²Ñ. ÐÑÐ»Ð¸ ÑÐµÐ»Ñ Ð¿Ð¾ÐµÐ·Ð´ÐºÐ¸ - ÑÐµÐ´Ð¸Ð½ÐµÐ½Ð¸Ðµ Ð¸ Ð»ÑÐ±Ð¾Ð²Ð°Ð½Ð¸Ðµ ÐºÑÐ°ÑÐ¾ÑÐ°Ð¼Ð¸
            ÐÐ»ÑÑÐ¾Ð½Ð°, ÑÑÐ¾Ð¸Ñ ÐµÑÐ°ÑÑ Ð² Ð¸ÑÐ½Ðµ Ð¸Ð»Ð¸ ÑÐµÐ½ÑÑÐ±ÑÐµ. ÐÑÐ¿Ð°ÑÑÑÑ Ð² ÑÑÐ¸ Ð¼ÐµÑÑÑÑ
            Ð½ÐµÐ»ÑÐ·Ñ, Ñ. Ðº. Ð²Ð¾Ð´Ð° ÑÐ»Ð¸ÑÐºÐ¾Ð¼ ÑÐ¾Ð»Ð¾Ð´Ð½Ð°Ñ, Ð½Ð¾ Ð·Ð°ÑÐ¾ Ð½Ð° Ð¾ÑÑÑÐ¾Ð²Ðµ ÑÐ¸ÑÐ¾ Ð¸
            ÑÐ¿Ð¾ÐºÐ¾Ð¹Ð½Ð¾. ÐÐ¸ÐºÐ¾Ð¼ ÑÑÑÐ¸ÑÑÐ¸ÑÐµÑÐºÐ¾Ð³Ð¾ ÑÐµÐ·Ð¾Ð½Ð° Ð½Ð° ÐÐ»ÑÑÐ¾Ð½Ðµ ÑÐ²Ð»ÑÑÑÑÑ ÑÐ°Ð¼ÑÐµ
            ÑÐµÐ¿Ð»ÑÐµ Ð¼ÐµÑÑÑÑ â Ð¸ÑÐ»Ñ Ð¸ Ð°Ð²Ð³ÑÑÑ, Ð² ÑÑÐ¾ Ð²ÑÐµÐ¼Ñ Ð²Ð¾Ð´Ð° Ð² Ð¾Ð·ÐµÑÐµ Ð´Ð¾ÑÑÐ°ÑÐ¾ÑÐ½Ð¾
            Ð¿ÑÐ¾Ð³ÑÐµÐ²Ð°ÐµÑÑÑ Ð´Ð»Ñ ÐºÑÐ¿Ð°Ð½Ð¸Ñ. ÐÐ»Ð¸Ð¼Ð°Ñ Ð½Ð° Ð¾ÑÑÑÐ¾Ð²Ðµ ÐÐ»ÑÑÐ¾Ð½ ÑÑÑÐ¾Ð¹, Ð±Ð¾Ð»ÐµÐµ 300
            Ð´Ð½ÐµÐ¹ Ð² Ð³Ð¾Ð´Ñ ÑÑÐ¾Ð¸Ñ ÑÐ¾Ð»Ð½ÐµÑÐ½Ð°Ñ Ð¿Ð¾Ð³Ð¾Ð´Ð°. ÐÐ¾ ÑÐ»ÐµÐ´ÑÐµÑ ÑÑÐµÑÑÑ, ÑÑÐ¾ Ð¿Ð¾ÑÑÐ¸
            Ð¿Ð¾Ð»Ð³Ð¾Ð´Ð° Ð¾ÑÑÑÐ¾Ð² Ð¿ÑÐ¾Ð´ÑÐ²Ð°ÑÑ ÑÐ¸Ð»ÑÐ½ÐµÐ¹ÑÐ¸Ðµ Ð³Ð¾ÑÐ½ÑÐµ Ð²ÐµÑÑÐ°.
          </span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <Button5 className={styles['component3']}></Button5>
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
          Â© 2021 Gleb Liatokhov, All Rights Reserved.
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
