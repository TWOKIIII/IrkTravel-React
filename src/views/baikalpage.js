import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Button4 from '../components/button4'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './baikalpage.module.css'

const Baikalpage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Baikal page - IrkTravel</title>
        <meta property="og:title" content="Baikal page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <Image1
            rootClassName="rootClassName11"
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
          <h1 className={styles['text2']}>ÐÐ·ÐµÑÐ¾ ÐÐ°Ð¹ÐºÐ°Ð»</h1>
          <span className={styles['Text3']}>
            <span className={styles['text4']}>
              Ð Ð°ÑÐ¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¾ Ð¾Ð·ÐµÑÐ¾ Ð½Ð° ÑÐ³Ðµ ÐÐ¾ÑÑÐ¾ÑÐ½Ð¾Ð¹ Ð¡Ð¸Ð±Ð¸ÑÐ¸. ÐÐ¼ÐµÐµÑ Ð¾Ð½Ð¾ ÑÐµÐºÑÐ¾Ð½Ð¸ÑÐµÑÐºÐ¾Ðµ
              Ð¿ÑÐ¾Ð¸ÑÑÐ¾Ð¶Ð´ÐµÐ½Ð¸Ðµ, Ñ. Ðµ. ÑÐ°ÑÐ¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¾ Ð² ÑÐ°Ð·Ð»Ð¾Ð¼Ðµ Ð·ÐµÐ¼Ð½Ð¾Ð¹ ÐºÐ¾ÑÑ. Ð ÑÐ°Ð¹Ð¾Ð½Ðµ
              ÐÐ°Ð¹ÐºÐ°Ð»Ð° Ð¿Ð¾ÑÑÐ¾ÑÐ½Ð½Ð¾ Ð¿ÑÐ¾Ð¸ÑÑÐ¾Ð´ÑÑ Ð½ÐµÐ±Ð¾Ð»ÑÑÐ¸Ðµ Ð·ÐµÐ¼Ð»ÐµÑÑÑÑÐµÐ½Ð¸Ñ. ÐÐ»Ð¸Ð½Ð° Ð¾Ð·ÐµÑÐ°
              636 ÐºÐ¼. Ð¨Ð¸ÑÐ¸Ð½Ð° Ð² ÑÐ°Ð·Ð½ÑÑ Ð¼ÐµÑÑÐ°Ñ Ð¸Ð·Ð¼ÐµÐ½ÑÐµÑÑÑ Ð¾Ñ 24 Ð´Ð¾ 79 ÐºÐ¼. ÐÐ·ÐµÑÐ¾
              ÑÐ²Ð»ÑÐµÑÑÑ ÑÐ°Ð¼ÑÐ¼ Ð³Ð»ÑÐ±Ð¾ÐºÐ¸Ð¼ Ð² Ð¼Ð¸ÑÐµ. ÐÐ°ÐºÑÐ¸Ð¼Ð°Ð»ÑÐ½Ð°Ñ ÐµÐ³Ð¾ Ð³Ð»ÑÐ±Ð¸Ð½Ð° 1642Ð¼,
              ÑÑÐµÐ´Ð½ÑÑ Ð³Ð»ÑÐ±Ð¸Ð½Ð° 744Ð¼. Ð ÐÐ°Ð¹ÐºÐ°Ð» Ð²Ð¿Ð°Ð´Ð°ÐµÑ 336 ÑÐµÐº, Ð° Ð²ÑÑÐµÐºÐ°ÐµÑ ÑÐ¾Ð»ÑÐºÐ¾
              Ð¾Ð´Ð½Ð° â ÐÐ½Ð³Ð°ÑÐ°. ÐÐ¾Ð´Ð° Ð² Ð¾Ð·ÐµÑÐµ Ð¾ÑÐµÐ½Ñ ÑÐ¸ÑÑÐ°Ñ, Ð±Ð»Ð°Ð³Ð¾Ð´Ð°ÑÑ ÑÐ½Ð´ÐµÐ¼Ð¸ÐºÑ
              (Ð¾ÑÐ³Ð°Ð½Ð¸Ð·Ð¼Ñ, ÐºÐ¾ÑÐ¾ÑÑÐ¹ Ð¾Ð±Ð¸ÑÐ°ÐµÑ ÑÐ¾Ð»ÑÐºÐ¾ Ð² ÑÑÐ¾Ð¼ Ð¾Ð·ÐµÑÐµ) ÑÐ°ÑÐºÑ ÑÐ¿Ð¸ÑÑÑÐµ. ÐÐ½
              Ð¾ÑÐ¸ÑÐ°ÐµÑ Ð²Ð¾Ð´Ñ, Ð¿ÑÐ¾Ð¿ÑÑÐºÐ°Ñ ÐµÑ ÑÐµÑÐµÐ· ÑÐ²Ð¾Ð¹ Ð¾ÑÐ³Ð°Ð½Ð¸Ð·Ð¼. Ð Ð²Ð¾Ð´Ðµ Ð¾ÑÐµÐ½Ñ Ð¼Ð°Ð»Ð¾
              Ð²Ð·Ð²ÐµÑÐµÐ½Ð½Ð¾Ð¹ Ð¾ÑÐ³Ð°Ð½Ð¸ÐºÐ¸ Ð¼Ð¸Ð½ÐµÑÐ°Ð»ÑÐ½ÑÑ ÑÐ°ÑÑÐ¸Ñ. ÐÑÐ¾Ð·ÑÐ°ÑÐ½Ð¾ÑÑÑ Ð²Ð¾Ð´Ñ
              Ð½Ð°ÑÑÐ¾Ð»ÑÐºÐ¾ Ð²ÐµÐ»Ð¸ÐºÐ°, ÑÑÐ¾ ÐºÐ°Ð¼Ð½Ð¸ Ð¸ Ð¿ÑÐµÐ´Ð¼ÐµÑÑ Ð²Ð¸Ð´Ð½Ñ Ð½Ð° Ð³Ð»ÑÐ±Ð¸Ð½Ðµ Ð´Ð¾ 40 Ð¼.
              ÐÐ¾Ð´Ð° ÑÐ¾Ð»Ð¾Ð´Ð½Ð°Ñ. ÐÐµÑÐ¾Ð¼ ÐµÑ ÑÐµÐ¼Ð¿ÐµÑÐ°ÑÑÑÐ° +8-9 Ð³ÑÐ°Ð´ÑÑÐ¾Ð². Ð¡ Ð½Ð°ÑÐ°Ð»Ð° ÑÐ½Ð²Ð°ÑÑ
              Ð¸ Ð´Ð¾ Ð½Ð°ÑÐ°Ð»Ð° Ð¼Ð°Ñ Ð¾Ð·ÐµÑÐ¾ Ð¿Ð¾ÐºÑÑÐ²Ð°ÐµÑÑÑ Ð»ÑÐ´Ð¾Ð¼. ÐÐµ Ð·Ð°Ð¼ÐµÑÐ·Ð°ÐµÑ ÑÐ¾Ð»ÑÐºÐ¾
              Ð½ÐµÐ±Ð¾Ð»ÑÑÐ¾Ð¹ ÑÑÐ°ÑÑÐ¾Ðº Ñ Ð¸ÑÑÐ¾ÐºÐ° ÐÐ½Ð³Ð°ÑÑ. Ð Ð¿ÑÐµÐ´ÐµÐ»Ð°Ñ Ð°ÐºÐ²Ð°ÑÐ¾ÑÐ¸Ð¸ Ð¾Ð·ÐµÑÐ°
              Ð½Ð°ÑÑÐ¸ÑÑÐ²Ð°ÐµÑÑÑ 30 Ð¾ÑÑÑÐ¾Ð²Ð¾Ð², Ð½Ð¾ ÑÐ¾Ð»ÑÐºÐ¾ Ð¾Ð´Ð¸Ð½ Ð¸Ð· Ð½Ð¸Ñ ÐºÑÑÐ¿Ð½ÑÐ¹ â ÐÐ»ÑÑÐ¾Ð½.
              ÐÐ²Ðµ ÑÑÐµÑÐ¸ Ð²ÑÐµÑ Ð¾Ð±Ð¸ÑÐ°ÑÐµÐ»ÐµÐ¹ ÐÐ°Ð¹ÐºÐ°Ð»Ð° ÑÐ½Ð¸ÐºÐ°Ð»ÑÐ½Ñ. Ð¡Ð°Ð¼ÑÐµ Ð¸Ð·Ð²ÐµÑÑÐ½ÑÐµ
              Ð¿ÑÐµÐ´ÑÑÐ°Ð²Ð¸ÑÐµÐ»Ð¸ ÐÐ°Ð¹ÐºÐ°Ð»ÑÑÐºÐ¾Ð¹ ÑÐ½Ð´ÐµÐ¼Ð¸ÑÐ½Ð¾Ð¹ ÑÐ°ÑÐ½Ñ â ÑÑÐ¾ ÐÐ°Ð¹ÐºÐ°Ð»ÑÑÐºÐ¸Ð¹
              Ð¾Ð¼ÑÐ»Ñ, Ð½ÐµÑÐ¿Ð°, ÑÑÐ±Ð° Ð³Ð¾Ð»Ð¾Ð¼ÑÐ½ÐºÐ° Ð¸ Ð¼Ð½Ð¾Ð³Ð¾ÑÐ¸ÑÐ»ÐµÐ½Ð½ÑÐµ ÑÐ°ÐºÐ¾Ð¾Ð±ÑÐ°Ð·Ð½ÑÐµ,
              ÐºÐ¾ÑÐ¾ÑÑÐµ ÑÐ²Ð»ÑÑÑÑÑ Ð³Ð»Ð°Ð²Ð½ÑÐ¼Ð¸ ÑÐ¸ÑÑÐ¸Ð»ÑÑÐ¸ÐºÐ°Ð¼Ð¸ Ð¾Ð·ÐµÑÐ°. ÐÐ·ÐµÑÐ¾ ÐÐ°Ð¹ÐºÐ°Ð»
              Ð²ÐºÐ»ÑÑÐµÐ½Ð¾ Ð² Ð¿ÐµÑÐµÑÐµÐ½Ñ Ð¾Ð±ÑÐµÐºÑÐ¾Ð² Â«ÐÑÐµÐ¼Ð¸ÑÐ½Ð¾Ð³Ð¾ Ð¿ÑÐ¸ÑÐ¾Ð´Ð½Ð¾Ð³Ð¾ Ð½Ð°ÑÐ»ÐµÐ´Ð¸ÑÂ».
            </span>
          </span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <Button4 className={styles['component3']}></Button4>
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
