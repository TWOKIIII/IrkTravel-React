import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Button8 from '../components/button8'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './skalapage.module.css'

const Skalapage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Skala page - IrkTravel</title>
        <meta property="og:title" content="Skala page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <Image1
            logo="https://cdn-icons.flaticon.com/png/512/5086/premium/5086470.png?token=exp=1640352518~hmac=0f87ffad63ece81c3351f4ec0360068d"
            rootClassName="rootClassName15"
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
          <h1 className={styles['text2']}>Ð¡ÐºÐ°Ð»Ð° Ð¨Ð°Ð¼Ð°Ð½ÐºÐ°</h1>
          <span className={styles['text3']}>
            Ð¡ÐºÐ°Ð»Ð° Ð¨Ð°Ð¼Ð°Ð½ÐºÐ° (Ð¸Ð»Ð¸ Ð¼ÑÑ ÐÑÑÑÐ°Ð½) Ð½Ð°ÑÐ¾Ð´Ð¸ÑÑÑ Ð½Ð° Ð¾ÑÑÑÐ¾Ð²Ðµ ÐÐ»ÑÑÐ¾Ð½. Ð­ÑÐ¾
            Ð¶Ð¸Ð²Ð¾Ð¿Ð¸ÑÐ½ÐµÐ¹ÑÐµÐµ Ð¼ÐµÑÑÐ¾, ÐºÐ¾ÑÐ¾ÑÐ¾Ðµ Ð¼ÐµÑÑÐ°ÑÑ ÑÐ²Ð¸Ð´ÐµÑÑ ÑÑÑÑÑÐ¸
            Ð¿ÑÑÐµÑÐµÑÑÐ²ÐµÐ½Ð½Ð¸ÐºÐ¾Ð². ÐÐµÐºÐ°Ð¼Ð¸ Ð»ÑÐ´Ð¸ Ð¿ÑÐ¸ÐµÐ·Ð¶Ð°Ð»Ð¸ ÑÑÐ´Ð° Ð´Ð»Ñ Ð¿Ð¾ÐºÐ»Ð¾Ð½ÐµÐ½Ð¸Ñ Ð¸
            Ð¿ÑÐ¸Ð½ÐµÑÐµÐ½Ð¸Ñ ÐºÐ»ÑÑÐ². ÐÐµÐ»Ð¸ÑÐµÑÑÐ²ÐµÐ½Ð½Ð¾ÑÑÑ Ð¸ ÑÐ½Ð¸ÐºÐ°Ð»ÑÐ½Ð¾ÑÑÑ ÑÐºÐ°Ð»Ñ Ð¨Ð°Ð¼Ð°Ð½ÐºÐ¸
            Ð½ÐµÐ·ÑÐ¸Ð¼Ð¾ Ð¿Ð¾Ð´ÑÐ¸Ð½ÑÐ»Ð¸ ÑÐ¼Ñ Ð¸ Ð´ÑÑÐ¸ Ð»ÑÐ´ÐµÐ¹. ÐÐ¾ ÑÐµÐ¹ Ð´ÐµÐ½Ñ Ð¼ÑÑ ÐÑÑÑÐ°Ð½ Ð½Ð°Ð·ÑÐ²Ð°ÑÑ
            Ð¾Ð´Ð½Ð¾Ð¹ Ð¸Ð· Ð´ÐµÐ²ÑÑÐ¸ ÑÐ²ÑÑÑÐ½Ñ ÐÐ·Ð¸Ð¸. ÐÑÐ¸ÐµÐ·Ð¶Ð°ÑÑÐ¸Ðµ ÑÑÐ´Ð° ÑÑÑÐ¸ÑÑÑ ÑÑÐ²ÑÑÐ²ÑÑÑ
            Ð½ÐµÐ²ÐµÑÐ¾ÑÑÐ½ÑÑ ÑÐ½ÐµÑÐ³ÐµÑÐ¸ÐºÑ Ð¸ ÑÐ¸Ð»Ñ Ð¾ÑÑÑÐ¾Ð²Ð°, Ð¿ÑÐ¸Ð·Ð½Ð°Ð²Ð°ÑÑÑ ÑÐµÐ±Ðµ Ð² ÑÐ¾Ð¼, ÑÑÐ¾
            Ð´Ð°Ð²Ð½Ð¾ ÑÑÑÐ°ÑÐ¸Ð»Ð¸ ÑÑ ÑÐ²ÑÐ·Ñ Ñ Ð¿ÑÐ¸ÑÐ¾Ð´Ð¾Ð¹, Ð·Ð°Ð»Ð¾Ð¶ÐµÐ½Ð½ÑÑ Ð² ÐºÐ°Ð¶Ð´Ð¾Ð¼ Ð¸Ð· Ð½Ð°Ñ.
            Ð¡ÐºÐ°Ð»Ð°, Ð¸Ð¼ÐµÑÑÐ°Ñ Ð´Ð²Ðµ Ð²ÐµÑÑÐ¸Ð½Ñ, ÑÐ¾ÑÑÐ¾Ð¸Ñ Ð¸Ð· ÐºÑÐ¸ÑÑÐ°Ð»Ð»Ð¸ÑÐµÑÐºÐ¾Ð³Ð¾
            Ð¸Ð·Ð²ÐµÑÑÐ½ÑÐºÐ°-Ð¼ÑÐ°Ð¼Ð¾ÑÐ° Ñ Ð²ÐºÑÐ°Ð¿Ð»ÐµÐ½Ð¸ÑÐ¼Ð¸ Ð³ÑÐ°Ð½Ð°ÑÐ°. Ð ÑÐ¶Ð¸Ðµ Ð»Ð¸ÑÐ°Ð¹Ð½Ð¸ÐºÐ¸ Ð³ÑÑÑÐ¾
            Ð¿Ð¾ÐºÑÑÐ²Ð°ÑÑ Ð¿Ð¾Ð²ÐµÑÑÐ½Ð¾ÑÑÑ ÐºÐ°Ð¼Ð½Ñ. Ð ÑÐ°Ð¼Ð¾Ð¹ ÑÐºÐ°Ð»Ðµ ÐµÑÑÑ ÑÐºÐ²Ð¾Ð·Ð½Ð°Ñ Ð¿ÐµÑÐµÑÐ°,
            ÐºÐ¾ÑÐ¾ÑÑÑ Ð¿Ð¾ Ð´ÑÐµÐ²Ð½Ð¸Ð¼ Ð²ÐµÑÐ¾Ð²Ð°Ð½Ð¸ÑÐ¼ Ð¼Ð¾Ð³ Ð¿Ð¾ÑÐµÑÐ°ÑÑ ÑÐ¾Ð»ÑÐºÐ¾ ÑÐ°Ð¼Ð°Ð½. ÐÐ´ÐµÑÑ Ð±ÑÐ»Ð¸
            Ð½Ð°Ð¹Ð´ÐµÐ½Ñ Ð½Ð°ÑÐºÐ°Ð»ÑÐ½ÑÐµ ÑÐ¸ÑÑÐ½ÐºÐ¸ Ð¸ Ð½Ð°Ð´Ð¿Ð¸ÑÐ¸ Ð½Ð° ÑÐ°Ð½ÑÐºÑÐ¸ÑÐµ, ÐºÐ¾ÑÐ¾ÑÑÐµ ÑÐ¶Ðµ
            ÑÑÑÐ°ÑÐµÐ½Ñ. ÐÐ° ÑÐºÐ°Ð»Ðµ ÑÐ¾ ÑÑÐ¾ÑÐ¾Ð½Ñ Ð²Ð¾Ð´Ñ ÐµÑÑÑ ÑÐ¸ÑÑÐ½Ð¾Ðº, Ð¾ÑÐµÐ½Ñ ÑÐ¸Ð»ÑÐ½Ð¾
            Ð½Ð°Ð¿Ð¾Ð¼Ð¸Ð½Ð°ÑÑÐ¸Ð¹ Ð´ÑÐ°ÐºÐ¾Ð½Ð°. Ð¡Ð°Ð¼Ð¾Ðµ Ð¸Ð½ÑÐµÑÐµÑÐ½Ð¾Ðµ, ÑÑÐ¾ ÑÑÐ¾ Ð¿Ð¾ÑÐ¾Ð´Ð° Ð´ÑÑÐ³Ð¾Ð³Ð¾
            ÑÐ²ÐµÑÐ°. ÐÐ¾ Ð¼ÐµÑÑÐ½ÑÐ¼ Ð»ÐµÐ³ÐµÐ½Ð´Ð°Ð¼ ÑÐ°Ð¼Ð° ÑÐºÐ°Ð»Ð° â ÑÑÐ¾ Ð¼ÐµÑÑÐ¾ Ð¾Ð±Ð¸ÑÐ°Ð½Ð¸Ñ Ð´ÑÑÐ° Ð¸
            Ð²Ð»Ð°ÑÑÐµÐ»Ð¸Ð½Ð° Ð¾ÑÑÑÐ¾Ð²Ð° ÐÐ»ÑÑÐ¾Ð½ Ð¿Ð¾ Ð¸Ð¼ÐµÐ½Ð¸ Ð¥Ð°Ð½ Ð¥ÑÑÑ-ÐÐ°Ð°Ð±Ð°Ð¹. ÐÐ½ Ð±ÑÐ» Ð²Ð¾ Ð³Ð»Ð°Ð²Ðµ
            13 ÑÐµÐ²ÐµÑÐ½ÑÑ ÑÐ°ÑÐ¾Ð² (ÑÑÐ½Ñ Ð½ÐµÐ±Ð¾Ð¶Ð¸ÑÐµÐ»ÐµÐ¹), Ð¿ÑÐ¸ÑÐµÐ´ÑÐ¸Ñ Ð½Ð° Ð·ÐµÐ¼Ð»Ñ Ð¿Ð¾ Ð¿ÑÐ¾ÑÑÐ±Ðµ
            Ð»ÑÐ´ÐµÐ¹. Ð¥Ð°Ð½ Ð¥ÑÑÑ-ÐÐ°Ð°Ð±Ð°Ð¹ Ð¸Ð¼ÐµÐµÑ 3 Ð¼ÐµÑÑÐ° Ð¾Ð±Ð¸ÑÐ°Ð½Ð¸Ñ: Ð¾Ð´Ð½Ð¾ â Ð½Ð° Ð½ÐµÐ±ÐµÑÐ°Ñ,
            Ð²ÑÐ¾ÑÐ¾Ðµ â Ð² Ð¿Ð¾Ð´Ð·ÐµÐ¼Ð½Ð¾Ð¼ Ð¼Ð¸ÑÐµ, Ð° ÑÑÐµÑÑÐµ - Ð½Ð° Ð·ÐµÐ¼Ð»Ðµ Ð¸ ÑÑÐ¾ ÑÐºÐ°Ð»Ð° Ð¨Ð°Ð¼Ð°Ð½ÐºÐ°.
            ÐÐ¾ Ð¸Ð¼Ñ 13 ÑÐ°ÑÐ¾Ð² Ð½Ð° Ð¼ÑÑÐµ ÐÑÑÑÐ°Ð½ Ð±ÑÐ»Ð¸ Ð²Ð¾Ð·Ð´Ð²Ð¸Ð³Ð½ÑÑÑ 13 ÑÐ²ÑÑÐµÐ½Ð½ÑÑ ÑÑÐ¾Ð»Ð±Ð¾Ð²
            ÐºÐ¾Ð½Ð¾Ð²ÑÐ·ÐµÐ¹ â ÑÑÑÐ³Ñ Ð½Ð° ÑÐ°Ð¼Ð¾Ð¹ Ð²ÑÑÐ¾ÐºÐ¾Ð¹ ÑÐ¾ÑÐºÐµ Ð¼ÑÑÐ°. Ð­ÑÐ¾ Ð¼ÐµÑÑÐ¾ ÑÐ²ÑÑÐµÐ½Ð½Ð¾
            Ð´Ð»Ñ Ð½Ð°ÑÐ¾Ð´Ð¾Ð², Ð¿ÑÐ¾Ð¶Ð¸Ð²Ð°ÑÑÐ¸Ñ Ð²Ð¾ÐºÑÑÐ³ ÐÐ°Ð¹ÐºÐ°Ð»Ð°.
          </span>
          <span className={styles['Text4']}></span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <Button8 className={styles['component3']}></Button8>
            </Link>
          </div>
        </div>
        <img
          src="https://ticketstour.ru/image/cache/catalog/marshruty/irkutsk/ostrov-olhon/depositphotos_57357591_xl-2015-1600x1200_g_90.webp"
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
              rootClassName="rootClassName15"
              className={styles['VK-icon']}
            ></Icon10>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Skalapage
