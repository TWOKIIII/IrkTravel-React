import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Button3 from '../components/button3'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './irkutskpage.module.css'

const Irkutskpage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Irkutsk page - IrkTravel</title>
        <meta property="og:title" content="Irkutsk page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <Image1
            rootClassName="rootClassName10"
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
          <h1 className={styles['text2']}>ÐÐ¾ÑÐ¾Ð´ ÐÑÐºÑÑÑÐº</h1>
          <span className={styles['Text3']}>
            ÐÑÐºÑÑÑÐº ÑÐ°ÑÐ¿Ð¾Ð»Ð¾Ð¶ÐµÐ½ Ð² ÐÐ¾ÑÑÐ¾ÑÐ½Ð¾Ð¹ Ð¡Ð¸Ð±Ð¸ÑÐ¸, Ð½Ð° Ð±ÐµÑÐµÐ³Ð°Ñ ÑÐµÐºÐ¸ ÐÐ½Ð³Ð°ÑÑ, Ð¿ÑÐ¸
            Ð²Ð¿Ð°Ð´ÐµÐ½Ð¸Ð¸ Ð² Ð½ÐµÑ ÑÐµÐºÐ¸ ÐÑÐºÑÑ, Ð² 66 ÐºÐ¼ Ð¾Ñ ÐÐ°Ð¹ÐºÐ°Ð»Ð°. ÐÐ»Ð¸Ð¼Ð°Ñ ÑÐµÐ·ÐºÐ¾
            ÐºÐ¾Ð½ÑÐ¸Ð½ÐµÐ½ÑÐ°Ð»ÑÐ½ÑÐ¹, ÑÐ¾ Ð·Ð½Ð°ÑÐ¸ÑÐµÐ»ÑÐ½ÑÐ¼Ð¸ Ð¿ÐµÑÐµÐ¿Ð°Ð´Ð°Ð¼Ð¸ ÑÐµÐ¼Ð¿ÐµÑÐ°ÑÑÑ. ÐÐ·-Ð·Ð°
            Ð±Ð»Ð¸Ð·Ð¾ÑÑÐ¸ Ðº ÑÐµÐ¹ÑÐ¼Ð¸ÑÐµÑÐºÐ¸ Ð°ÐºÑÐ¸Ð²Ð½Ð¾Ð¼Ñ ÐÐ°Ð¹ÐºÐ°Ð»ÑÑÐºÐ¾Ð¼Ñ ÑÐ¸ÑÑÑ ÑÐµÐ³ÑÐ»ÑÑÐ½Ñ ÑÐ»Ð°Ð±ÑÐµ
            Ð·ÐµÐ¼Ð»ÐµÑÑÑÑÐµÐ½Ð¸Ñ. Ð¯Ð²Ð»ÑÐµÑÑÑ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑÑÐ°ÑÐ¸Ð²Ð½ÑÐ¼ ÑÐµÐ½ÑÑÐ¾Ð¼ ÐÑÐºÑÑÑÐºÐ¾Ð¹ Ð¾Ð±Ð»Ð°ÑÑÐ¸ Ð¸
            ÐÑÐºÑÑÑÐºÐ¾Ð³Ð¾ ÑÐ°Ð¹Ð¾Ð½Ð°, Ð² ÐºÐ¾ÑÐ¾ÑÑÐ¹ Ð½Ðµ Ð²ÑÐ¾Ð´Ð¸Ñ Ð¸ Ð¾Ð±ÑÐ°Ð·ÑÐµÑ Ð¾ÑÐ´ÐµÐ»ÑÐ½Ð¾Ðµ
            Ð¼ÑÐ½Ð¸ÑÐ¸Ð¿Ð°Ð»ÑÐ½Ð¾Ðµ Ð¾Ð±ÑÐ°Ð·Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð³Ð¾ÑÐ¾Ð´ ÐÑÐºÑÑÑÐº ÑÐ¾ ÑÑÐ°ÑÑÑÐ¾Ð¼ Ð³Ð¾ÑÐ¾Ð´ÑÐºÐ¾Ð³Ð¾
            Ð¾ÐºÑÑÐ³Ð° ÐºÐ°Ðº ÐµÐ´Ð¸Ð½ÑÑÐ²ÐµÐ½Ð½ÑÐ¹ Ð½Ð°ÑÐµÐ»ÑÐ½Ð½ÑÐ¹ Ð¿ÑÐ½ÐºÑ Ð² ÐµÐ³Ð¾ ÑÐ¾ÑÑÐ°Ð²Ðµ. Ð¨ÐµÑÑÐ¾Ð¹ Ð¿Ð¾
            Ð²ÐµÐ»Ð¸ÑÐ¸Ð½Ðµ Ð³Ð¾ÑÐ¾Ð´ Ð¡Ð¸Ð±Ð¸ÑÐ¸ Ñ ÑÐ¸ÑÐ»ÐµÐ½Ð½Ð¾ÑÑÑÑ Ð½Ð°ÑÐµÐ»ÐµÐ½Ð¸Ñ 617 315 ÑÐµÐ»Ð¾Ð²ÐµÐºÐ°.
            ÐÑÐ½ÐµÑÑÐ½ Ðº Ð¸ÑÑÐ¾ÑÐ¸ÑÐµÑÐºÐ¸Ð¼ Ð¿Ð¾ÑÐµÐ»ÐµÐ½Ð¸ÑÐ¼ Ð Ð¾ÑÑÐ¸Ð¸; Ð¸ÑÑÐ¾ÑÐ¸ÑÐµÑÐºÐ¸Ð¹ ÑÐµÐ½ÑÑ Ð³Ð¾ÑÐ¾Ð´Ð°
            Ð²Ð½ÐµÑÑÐ½ Ð² Ð¿ÑÐµÐ´Ð²Ð°ÑÐ¸ÑÐµÐ»ÑÐ½ÑÐ¹ ÑÐ¿Ð¸ÑÐ¾Ðº ÐÑÐµÐ¼Ð¸ÑÐ½Ð¾Ð³Ð¾ Ð½Ð°ÑÐ»ÐµÐ´Ð¸Ñ Ð®ÐÐÐ¡ÐÐ. ÐÐ°ÑÐ¾Ð´ÑÑÑ
            Ð² Ð³Ð¾ÑÐ¾Ð´Ðµ Ð²Ð°Ð¼ ÑÐ»ÐµÐ´ÑÐµÑ Ð¿Ð¾ÑÐµÑÐ¸ÑÑ ÑÐ°ÐºÐ¸Ðµ Ð¼ÐµÑÑÐ° ÐºÐ°Ðº: Ð¿Ð°Ð¼ÑÑÐ½Ð¸Ðº ÑÐ¸Ð¼Ð²Ð¾Ð»Ð°
            Ð³Ð¾ÑÐ¾Ð´Ð° Â«ÐÐ°Ð±ÑÂ», Ð¸ÑÑÐ¾ÑÐ¸ÑÐµÑÐºÐ¸Ð¹ ÑÐ°Ð¹Ð¾Ð½ Â«130-Ð¹ ÐºÐ²Ð°ÑÑÐ°Ð»Â», ÐÐ¸Ð¶Ð½ÑÑ Ð½Ð°Ð±ÐµÑÐµÐ¶Ð½ÑÑ
            ÐÐ½Ð³Ð°ÑÑ, Ð° ÑÐ°ÐºÐ¶Ðµ Ð¼ÑÐ·ÐµÐ¹-Ð»ÐµÐ´Ð¾ÐºÐ¾Ð» Â«ÐÐ½Ð³Ð°ÑÐ°Â».
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <Button3
                rootClassName="rootClassName"
                className={styles['component3']}
              ></Button3>
            </Link>
          </div>
        </div>
        <img
          src="https://cdnn21.img.ria.ru/images/07e5/06/13/1737671552_0:0:3011:1694_1920x0_80_0_0_435d5bf1e84de25c6d138ead8cc53a77.jpg"
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
              rootClassName="rootClassName10"
              className={styles['VK-icon']}
            ></Icon10>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Irkutskpage
