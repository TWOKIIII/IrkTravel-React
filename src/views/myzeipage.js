import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Button7 from '../components/button7'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './myzeipage.module.css'

const Myzeipage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Myzei page - IrkTravel</title>
        <meta property="og:title" content="Myzei page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <Image1
            rootClassName="rootClassName14"
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
            <span>ÐÑÐ·ÐµÐ¹ Ð¢Ð°Ð»ÑÑÑ</span>
            <br></br>
            <span></span>
          </h1>
          <span className={styles['text6']}>
            ÐÑÑÐ¸ÑÐµÐºÑÑÑÐ½Ð¾-ÑÑÐ½Ð¾Ð³ÑÐ°ÑÐ¸ÑÐµÑÐºÐ¸Ð¹ Ð¼ÑÐ·ÐµÐ¹ Â«Ð¢Ð°Ð»ÑÑÑÂ» â ÑÐ½Ð¸ÐºÐ°Ð»ÑÐ½Ð¾Ðµ ÑÐ¾Ð±ÑÐ°Ð½Ð¸Ðµ
            Ð¿Ð°Ð¼ÑÑÐ½Ð¸ÐºÐ¾Ð² Ð¸ÑÑÐ¾ÑÐ¸Ð¸, Ð°ÑÑÐ¸ÑÐµÐºÑÑÑÑ Ð¸ ÑÑÐ½Ð¾Ð³ÑÐ°ÑÐ¸Ð¸ XVIIâXX Ð²Ð². ÐÐ½
            ÑÐ°ÑÐ¿Ð¾Ð»Ð¾Ð¶ÐµÐ½ Ð½Ð° Ð¿ÑÐ°Ð²Ð¾Ð¼ Ð±ÐµÑÐµÐ³Ñ ÐÐ½Ð³Ð°ÑÑ Ð½Ð° 47-Ð¼ ÐºÐ¸Ð»Ð¾Ð¼ÐµÑÑÐµ ÐÐ°Ð¹ÐºÐ°Ð»ÑÑÐºÐ¾Ð³Ð¾
            ÑÑÐ°ÐºÑÐ° Ð¿Ð¾ Ð´Ð¾ÑÐ¾Ð³Ðµ Ð¾Ñ ÐÑÐºÑÑÑÐºÐ° Ðº ÐÐ°Ð¹ÐºÐ°Ð»Ñ. ÐÑÐ·ÐµÐ¹Ð½ÑÐ¹ ÐºÐ¾Ð¼Ð¿Ð»ÐµÐºÑ Ð¿Ð¾Ð´
            Ð¾ÑÐºÑÑÑÑÐ¼ Ð½ÐµÐ±Ð¾Ð¼ Ð¿ÑÐ¸Ð²Ð»ÐµÐºÐ°ÐµÑ Ð¿Ð¾ÑÐµÑÐ¸ÑÐµÐ»ÐµÐ¹ Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑÑÑ Ð½ÐµÐ¿Ð¾ÑÑÐµÐ´ÑÑÐ²ÐµÐ½Ð½Ð¾Ð³Ð¾
            Ð·Ð½Ð°ÐºÐ¾Ð¼ÑÑÐ²Ð° Ñ Ð¼Ð°ÑÐµÑÐ¸Ð°Ð»ÑÐ½Ð¾Ð¹ Ð¸ Ð´ÑÑÐ¾Ð²Ð½Ð¾Ð¹ ÐºÑÐ»ÑÑÑÑÐ¾Ð¹ Ð½Ð°ÑÐ¾Ð´Ð¾Ð² ÐÑÐ¸Ð±Ð°Ð¹ÐºÐ°Ð»ÑÑ.
            Ð Ð¼ÑÐ·ÐµÐµ ÑÐµÑÑÐ¾ÑÐ¿ÐµÐºÑÐ¸Ð²Ð½Ð¾ Ð²Ð¾ÑÑÐ¾Ð·Ð´Ð°Ð½Ð¾ ÑÐµÑÑÑÐµ Ð¸ÑÑÐ¾ÑÐ¸ÐºÐ¾-ÐºÑÐ»ÑÑÑÑÐ½ÑÐµ Ð·Ð¾Ð½Ñ:
            ÑÑÑÑÐºÐ°Ñ, Ð±ÑÑÑÑÑÐºÐ°Ñ, ÑÐ²ÐµÐ½ÐºÐ¸Ð¹ÑÐºÐ°Ñ Ð¸ ÑÐ¾ÑÐ°Ð»Ð°ÑÑÐºÐ°Ñ. ÐÑÑÑÑÑ, ÑÐ²ÐµÐ½ÐºÐ¸ Ð¸ ÑÐ¾ÑÑ
            â ÐºÐ¾ÑÐµÐ½Ð½ÑÐµ Ð½Ð°ÑÐ¾Ð´Ð½Ð¾ÑÑÐ¸ ÐÑÐ¸Ð±Ð°Ð¹ÐºÐ°Ð»ÑÑ. ÐÐ± Ð¸Ñ Ð±ÑÑÐµ, Ð¾ÑÐ¾Ð±ÐµÐ½Ð½Ð¾ÑÑÑÑ Ð¶Ð¸Ð·Ð½Ð¸ Ð¸
            Ð²ÐµÑÐ¾Ð²Ð°Ð½Ð¸ÑÑ ÑÐ°ÑÑÐºÐ°Ð·ÑÐ²Ð°ÑÑ ÑÐ²ÐµÐ½ÐºÐ¸Ð¹ÑÐºÐ¸Ðµ Ð¸ ÑÐ¾ÑÐ°Ð»Ð°ÑÑÐºÐ¸Ðµ ÑÑÐ¾Ð¹Ð±Ð¸ÑÐ°, ÐºÐ¾Ð¼Ð¿Ð»ÐµÐºÑ
            ÑÐ²ÐµÐ½ÐºÐ¸Ð¹ÑÐºÐ¸Ñ Ð·Ð°ÑÐ¾ÑÐ¾Ð½ÐµÐ½Ð¸Ð¹ Ð¸ Ð±ÑÑÑÑÑÐºÐ¸Ð¹ ÑÐ»ÑÑ-Ð»ÐµÑÐ½Ð¸Ðº. Ð ÑÑÑÐºÐ°Ñ
            ÐÐ½Ð³Ð°ÑÐ¾-ÐÐ»Ð¸Ð¼ÑÐºÐ°Ñ ÑÐºÑÐ¿Ð¾Ð·Ð¸ÑÐ¸Ð¾Ð½Ð½Ð°Ñ Ð·Ð¾Ð½Ð°, Ð² ÐºÐ¾ÑÐ¾ÑÐ¾Ð¹ ÑÐ¾Ð±ÑÐ°Ð½Ñ Ð¿Ð°Ð¼ÑÑÐ½Ð¸ÐºÐ¸
            Ð´ÐµÑÐµÐ²ÑÐ½Ð½Ð¾Ð³Ð¾ Ð·Ð¾Ð´ÑÐµÑÑÐ²Ð° ÐÑÐ¸Ð±Ð°Ð¹ÐºÐ°Ð»ÑÑ XVII â Ð½Ð°ÑÐ°Ð»Ð° XX Ð².,
            Ð¿ÑÐµÐ¸Ð¼ÑÑÐµÑÑÐ²ÐµÐ½Ð½Ð¾ Ð²ÑÐ²ÐµÐ·ÐµÐ½Ð½ÑÐµ Ñ ÑÐµÑÑÐ¸ÑÐ¾ÑÐ¸Ð¸ ÐÑÐ°ÑÑÐºÐ¾Ð³Ð¾ Ð¸ Ð£ÑÑÑ-ÐÐ»Ð¸Ð¼ÑÐºÐ¾Ð³Ð¾
            ÑÐ°Ð¹Ð¾Ð½Ð¾Ð² ÐÑÐºÑÑÑÐºÐ¾Ð¹ Ð¾Ð±Ð»Ð°ÑÑÐ¸, Ð¿ÑÐµÐ´ÑÑÐ°Ð²Ð»ÐµÐ½Ð° Ð½ÐµÑÐºÐ¾Ð»ÑÐºÐ¸Ð¼Ð¸ Ð³ÑÑÐ¿Ð¿Ð°Ð¼Ð¸.
            Ð­ÐºÑÐ¿Ð¾Ð·Ð¸ÑÐ¸Ð¾Ð½Ð½ÑÐ¹ ÐºÐ¾Ð¼Ð¿Ð»ÐµÐºÑ Â«ÐÐ¾Ð»Ð¾ÑÑÐ½Ð¾Ðµ ÑÐµÐ»Ð¾Â», Ð²Ð¾ÑÑÐ¾Ð·Ð´Ð°ÑÑÐ¸Ð¹
            Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑÑÐ°ÑÐ¸Ð²Ð½ÑÐ¹ ÑÐµÐ½ÑÑ ÐºÐ¾Ð½ÑÐ° XIX â Ð½Ð°ÑÐ°Ð»Ð° XX Ð²., Ð²ÐºÐ»ÑÑÐ°ÐµÑ Ð² ÑÐµÐ±Ñ
            ÐºÐ¾Ð¼Ð¿Ð»ÐµÐºÑ Â«ÐÐ¾Ð»Ð¾ÑÑÐ½Ð¾Ðµ Ð¿ÑÐ°Ð²Ð»ÐµÐ½Ð¸ÐµÂ», ÑÐµÑÐºÐ¾Ð²Ð½Ð¾-Ð¿ÑÐ¸ÑÐ¾Ð´ÑÐºÑÑ ÑÐºÐ¾Ð»Ñ, ÑÑÐ°Ð´ÑÐ±Ñ
            Ð¿ÑÐ°Ð»Ð¾Ð¼ÑÐ¸ÐºÐ°, ÑÑÐ°Ð´ÑÐ±Ñ Ð³Ð¾ÑÐ¾Ð´Ð¾Ð²Ð¾Ð³Ð¾ ÐºÐ°Ð·Ð°ÐºÐ°. ÐÐ»Ð°Ð²Ð½Ð¾Ð¹ ÐµÐ³Ð¾
            Ð´Ð¾ÑÑÐ¾Ð¿ÑÐ¸Ð¼ÐµÑÐ°ÑÐµÐ»ÑÐ½Ð¾ÑÑÑÑ ÑÐ²Ð»ÑÑÑÑÑ ÑÐ½Ð¸ÐºÐ°Ð»ÑÐ½ÑÐµ Ð¿Ð°Ð¼ÑÑÐ½Ð¸ÐºÐ¸ Ð¸ÑÑÐ¾ÑÐ¸Ð¸ Ð¸
            Ð°ÑÑÐ¸ÑÐµÐºÑÑÑÑ Ð¾Ð±Ð¾ÑÐ¾Ð½Ð½Ð¾Ð³Ð¾ Ð¸ ÐºÑÐ»ÑÑÐ¾Ð²Ð¾Ð³Ð¾ Ð·Ð¾Ð´ÑÐµÑÑÐ²Ð°: Ð¡Ð¿Ð°ÑÑÐºÐ°Ñ Ð¿ÑÐ¾ÐµÐ·Ð¶Ð°Ñ
            Ð±Ð°ÑÐ½Ñ (1667 Ð³.) Ð¸ ÐÐ°Ð·Ð°Ð½ÑÐºÐ°Ñ ÑÐµÑÐºÐ¾Ð²Ñ (1679 Ð³.) ÐÐ»Ð¸Ð¼ÑÐºÐ¾Ð³Ð¾ Ð¾ÑÑÑÐ¾Ð³Ð°.
          </span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <Button7 className={styles['component3']}></Button7>
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
