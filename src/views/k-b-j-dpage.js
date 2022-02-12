import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Button6 from '../components/button6'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './k-b-j-dpage.module.css'

const KBJDpage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>KBJD page - IrkTravel</title>
        <meta property="og:title" content="KBJD page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <Image1
            rootClassName="rootClassName13"
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
          <h1 className={styles['text2']}>
            <span>ÐÐÐÐ</span>
            <br></br>
            <span></span>
          </h1>
          <span className={styles['Text6']}>
            ÐÑÑÐ³Ð¾Ð±Ð°Ð¹ÐºÐ°Ð»ÑÑÐºÐ°Ñ Ð¶ÐµÐ»ÐµÐ·Ð½Ð°Ñ Ð´Ð¾ÑÐ¾Ð³Ð° - ÑÐ½Ð¸ÐºÐ°Ð»ÑÐ½ÑÐ¹ Ð¿Ð°Ð¼ÑÑÐ½Ð¸Ðº Ð°ÑÑÐ¸ÑÐµÐºÑÑÑÑ Ð¸
            Ð¾Ð´Ð½Ð° Ð¸Ð· ÑÐ°Ð¼ÑÑ Ð¿Ð¾Ð¿ÑÐ»ÑÑÐ½ÑÑ ÑÐºÑÐºÑÑÑÐ¸Ð¹ Ð¿Ð¾ ÐÐ°Ð¹ÐºÐ°Ð»Ñ. ÐÐ½Ð° ÑÐ¾ÑÐµÑÐ°ÐµÑ Ð² ÑÐµÐ±Ðµ
            ÐºÑÐ°ÑÐ¾ÑÑ Ð±Ð°Ð¹ÐºÐ°Ð»ÑÑÐºÐ¸Ñ Ð³Ð¾Ñ, ÑÐ°Ð¼Ð¾Ð³Ð¾ Ð¾Ð·ÐµÑÐ°, ÑÐ½Ð¸ÐºÐ°Ð»ÑÐ½ÑÐµ Ð°ÑÑÐ¸ÑÐµÐºÑÑÑÐ½ÑÐµ
            ÑÐ¾Ð¾ÑÑÐ¶ÐµÐ½Ð¸Ñ, Ð¸ ÐºÐ¾Ð½ÐµÑÐ½Ð¾ Ð¶Ðµ Ð²ÐµÐ»Ð¸ÐºÑÑ Ð¸ÑÑÐ¾ÑÐ¸Ñ! ÐÐ°Ð»Ð¾ ÐºÑÐ¾ Ð¾ÑÑÐ°ÐµÑÑÑ
            ÑÐ°Ð²Ð½Ð¾Ð´ÑÑÐ½ÑÐ¼ Ð¾Ñ ÑÐ¾Ð¹ ÐºÑÐ°ÑÐ¾ÑÑ Ð¸ Ð²ÐµÐ»Ð¸ÑÐ¸Ñ, ÐºÐ¾ÑÐ¾ÑÐ¾Ðµ Ð¿ÑÐµÐ´ÑÑÐ°ÐµÑ Ð¿ÐµÑÐµÐ´ Ð½Ð¸Ð¼Ð¸ Ð²
            Ð²Ð¸Ð´Ðµ ÑÐ¾ÑÐµÑÐ°Ð½Ð¸Ñ ÐÐÐÐ Ð¸ Ð¾Ð·ÐµÑÐ° ÐÐ°Ð¹ÐºÐ°Ð»! Ð Ð½Ð°ÑÑÐ¾ÑÑÐµÐµ Ð²ÑÐµÐ¼Ñ
            ÐÑÑÐ³Ð¾Ð±Ð°Ð¹ÐºÐ°Ð»ÑÑÐºÐ¾Ð¹ Ð¶ÐµÐ»ÐµÐ·Ð½Ð¾Ð¹ Ð´Ð¾ÑÐ¾Ð³Ð¾Ð¹ Ð¾Ð±ÑÑÐ½Ð¾ Ð½Ð°Ð·ÑÐ²Ð°ÑÑ Ð²ÐµÑÐºÑ Ð¡Ð»ÑÐ´ÑÐ½ÐºÐ° II
            â ÐÐ°Ð¹ÐºÐ°Ð» Ð´Ð»Ð¸Ð½Ð¾Ð¹ 89 ÐºÐ¸Ð»Ð¾Ð¼ÐµÑÑÐ¾Ð². ÐÐ° Ð´Ð¾ÑÐ¾Ð³Ðµ ÑÐµÐ¹ÑÐ°Ñ Ð¸Ð¼ÐµÐµÑÑÑ ÑÐµÑÑÑÐµ
            ÑÑÐ°Ð½ÑÐ¸Ð¸ (ÐÑÐ»ÑÑÐº, ÐÐ°ÑÐ¸ÑÑÐ¹, Ð£Ð»Ð°Ð½Ð¾Ð²Ð¾ Ð¸ ÐÐ°Ð¹ÐºÐ°Ð») Ð¸ Ð¾Ð´Ð¸Ð½ ÑÐ°Ð·ÑÐµÐ·Ð´ 137-Ð¹ ÐºÐ¼.
            ÐÐ° ÐÐÐÐ Ð¸ÑÐ¿Ð¾Ð»ÑÐ·ÑÐµÑÑÑ 38 ÑÐ¾Ð½Ð½ÐµÐ»ÐµÐ¹ Ð¾Ð±ÑÐµÐ¹ Ð´Ð»Ð¸Ð½Ð¾Ð¹ 9063 Ð¼ (ÑÐ°Ð¼ÑÐ¹ Ð´Ð»Ð¸Ð½Ð½ÑÐ¹
            Ð¸Ð· Ð½Ð¸Ñ â ÑÐ¾Ð½Ð½ÐµÐ»Ñ ÑÐµÑÐµÐ· Ð¼ÑÑ ÐÐ¾Ð»Ð¾Ð²Ð¸Ð½Ð½ÑÐ¹ Ð´Ð»Ð¸Ð½Ð¾Ð¹ 777 Ð¼), 15 ÐºÐ°Ð¼ÐµÐ½Ð½ÑÑ
            Ð³Ð°Ð»ÐµÑÐµÐ¹ Ð¾Ð±ÑÐµÐ¹ Ð´Ð»Ð¸Ð½Ð¾Ð¹ 295 Ð¼ (ÑÐµÐ¹ÑÐ°Ñ Ð¸ÑÐ¿Ð¾Ð»ÑÐ·ÑÐµÑÑÑ ÑÐ¾Ð»ÑÐºÐ¾ 5 Ð¸Ð· Ð½Ð¸Ñ) Ð¸ 3
            Ð¶ÐµÐ»ÐµÐ·Ð¾Ð±ÐµÑÐ¾Ð½Ð½ÑÑ Ð³Ð°Ð»ÐµÑÐµÐ¸ Ñ Ð¾ÑÐ²ÐµÑÑÑÐ¸ÑÐ¼Ð¸, 248 Ð¼Ð¾ÑÑÐ¾Ð² Ð¸ Ð²Ð¸Ð°Ð´ÑÐºÐ¾Ð², 268
            Ð¿Ð¾Ð´Ð¿Ð¾ÑÐ½ÑÑ ÑÑÐµÐ½Ð¾Ðº. ÐÐ¾ Ð½Ð°ÑÑÑÐµÐ½Ð½Ð¾ÑÑÐ¸ Ð¸Ð½Ð¶ÐµÐ½ÐµÑÐ½ÑÐ¼Ð¸ ÑÐ¾Ð¾ÑÑÐ¶ÐµÐ½Ð¸ÑÐ¼Ð¸ ÐÐÐÐ Ð½Ðµ
            Ð¸Ð¼ÐµÐµÑ ÑÐ°Ð²Ð½ÑÑ Ð² Ð Ð¾ÑÑÐ¸Ð¸ Ð¸ Ð·Ð°Ð½Ð¸Ð¼Ð°ÐµÑ Ð¾Ð´Ð½Ð¾ Ð¸Ð· Ð¿ÐµÑÐ²ÑÑ Ð¼ÐµÑÑ Ð² Ð¼Ð¸ÑÐµ. Ð¢Ð¾Ð½Ð½ÐµÐ»Ð¸
            Ð¸ ÐºÐ°Ð¼ÐµÐ½Ð½ÑÐµ Ð³Ð°Ð»ÐµÑÐµÐ¸ ÐÐÐÐ ÑÐ½Ð¸ÐºÐ°Ð»ÑÐ½Ñ ÑÐµÐ¼, ÑÑÐ¾ Ð¾Ð½Ð¸ ÑÑÑÐ¾Ð¸Ð»Ð¸ÑÑ Ð¿Ð¾
            Ð½ÐµÑÐ¸Ð¿Ð¾Ð²ÑÐ¼ Ð¿ÑÐ¾ÐµÐºÑÐ°Ð¼ Ð¸ Ð½Ðµ Ð±ÑÐ»Ð¸ Ð¿ÐµÑÐµÑÑÑÐ¾ÐµÐ½Ñ Ð² Ð¿Ð¾ÑÐ»ÐµÐ´ÑÑÑÐ¸Ðµ Ð³Ð¾Ð´Ñ,
            ÑÐ¾ÑÑÐ°Ð½Ð¸Ð² Ð¿ÐµÑÐ²Ð¾Ð½Ð°ÑÐ°Ð»ÑÐ½ÑÐ¹ Ð·Ð°Ð¼ÑÑÐµÐ» Ð°ÑÑÐ¸ÑÐµÐºÑÐ¾ÑÐ¾Ð² Ð¸ Ð¸Ð½Ð¶ÐµÐ½ÐµÑÐ¾Ð² Ð½Ð°ÑÐ°Ð»Ð° XX
            Ð²ÐµÐºÐ°.
          </span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <Button6 className={styles['component3']}></Button6>
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
