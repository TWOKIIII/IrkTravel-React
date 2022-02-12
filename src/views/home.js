import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Button1 from '../components/button1'
import Button from '../components/button'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>IrkTravel</title>
        <meta property="og:title" content="IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <Image1
            logo="https://cdn-icons.flaticon.com/png/512/5086/premium/5086470.png?token=exp=1640399633~hmac=94947489bb14290b351941a4b05e750e"
            rootClassName="rootClassName"
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
          <h1 className={styles['text02']}>Ð¡Ð¸Ð±Ð¸ÑÑÐºÐ¸Ðµ ÐºÑÐ°ÑÐ¾ÑÑ</h1>
          <span className={styles['text03']}>
            <span>
              ÐÑÐºÑÑÑÐºÐ°Ñ Ð¾Ð±Ð»Ð°ÑÑÑ, Ð½ÐµÑÐ¼Ð¾ÑÑÑ Ð½Ð° ÑÐ´Ð°Ð»ÐµÐ½Ð½Ð¾ÑÑÑ Ð¾Ñ ÑÐµÐ½ÑÑÐ°Ð»ÑÐ½ÑÑ
              ÑÐµÐ³Ð¸Ð¾Ð½Ð¾Ð², ÑÐ²Ð»ÑÐµÑÑÑ Ð²Ð°Ð¶Ð½Ð¾Ð¹ ÑÐ¾ÑÑÐ°Ð²Ð»ÑÑÑÐµÐ¹ ÑÑÑÐ¸ÑÑÐ¸ÑÐµÑÐºÐ¾Ð³Ð¾ ÐºÐ»Ð°ÑÑÐµÑÐ°
              Ð Ð¾ÑÑÐ¸Ð¸. Ð Ð¿ÐµÑÐ²ÑÑ Ð¾ÑÐµÑÐµÐ´Ñ, Ð¾Ð½Ð° ÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑÑ Ð¿ÑÐ¸ÑÑÐ³Ð°ÑÐµÐ»ÑÐ½Ð¾Ð¹ Ð±Ð»Ð°Ð³Ð¾Ð´Ð°ÑÑ
              ÑÐ²Ð¾Ð¸Ð¼ Ð¿ÑÐ¸ÑÐ¾Ð´Ð½ÑÐ¼ Ð±Ð¾Ð³Ð°ÑÑÑÐ²Ð°Ð¼, Ð±Ð»Ð°Ð³Ð¾Ð¿ÑÐ¸ÑÑÐ½Ð¾Ð¹ ÑÐºÐ¾Ð»Ð¾Ð³Ð¸ÑÐµÑÐºÐ¾Ð¹
              Ð¾Ð±ÑÑÐ°Ð½Ð¾Ð²ÐºÐµ, ÑÐ½Ð¸ÐºÐ°Ð»ÑÐ½ÑÐ¼ Ð²Ð¾Ð´Ð½ÑÐ¼ ÑÐµÑÑÑÑÐ°Ð¼. ÐÐµÐ¼Ð°Ð»Ð¾Ðµ ÑÐ´ÐµÐ»Ð°Ð½Ð¾ Ð·Ð°
              Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ðµ Ð³Ð¾Ð´Ñ Ð´Ð»Ñ ÑÐ°Ð·Ð²Ð¸ÑÐ¸Ñ ÑÐºÑÐºÑÑÑÐ¸Ð¾Ð½Ð½Ð¾Ð³Ð¾ ÑÑÑÐ¸Ð·Ð¼Ð° Ð¸
              Ð¸Ð½ÑÑÐ°ÑÑÑÑÐºÑÑÑÑ, ÑÑÐ¾Ð±Ñ Ð¾ÑÐ´ÑÑ Ð² ÑÑÑÐ¾Ð²Ð¾Ð¼ ÐºÑÐ°Ñ Ð¾ÐºÐ°Ð·Ð°Ð»ÑÑ ÐºÐ¾Ð¼ÑÐ¾ÑÑÐ½ÑÐ¼ Ð¸
              Ð½ÐµÐ¿Ð¾Ð²ÑÐ¾ÑÐ¸Ð¼ÑÐ¼. Ð¡ÑÐµÐ´Ð¸ Ð¾ÑÐ½Ð¾Ð²Ð½ÑÑ ÑÑÑÐ¸ÑÑÐ¸ÑÐµÑÐºÐ¸Ñ Ð½Ð°Ð¿ÑÐ°Ð²Ð»ÐµÐ½Ð¸Ð¹ Ð¼Ð¾Ð¶Ð½Ð¾
              Ð²ÑÐ´ÐµÐ»Ð¸ÑÑ: Ð¿ÐµÑÐ¸Ðµ Ð¼Ð°ÑÑÑÑÑÑ Ð¿Ð¾ ÑÐ°Ð¹Ð³Ðµ, ÑÐ¿Ð»Ð°Ð² Ð¿Ð¾ ÑÐ¸Ð±Ð¸ÑÑÐºÐ¸Ð¼ ÑÐµÐºÐ°Ð¼,
              ÑÐµÐ¼ÐµÐ¹Ð½ÑÐ¹ Ð¾ÑÐ´ÑÑ Ð½Ð° Ð±ÐµÑÐµÐ³Ñ ÐÐ°Ð¹ÐºÐ°Ð»Ð°, Ð²ÐµÑÑÐ¾Ð»ÐµÑÐ½ÑÐµ ÑÐºÑÐºÑÑÑÐ¸Ð¸,
              Ð±Ð°Ð»ÑÐ½ÐµÐ¾Ð»Ð¾Ð³Ð¸ÑÐµÑÐºÐ¾Ðµ Ð»ÐµÑÐµÐ½Ð¸Ðµ, ÑÑÐ±Ð°Ð»ÐºÐ° Ð¸ Ð¾ÑÐ¾ÑÐ°. ÐÐµÐ¼Ð°Ð»Ð¾Ð¹ Ð¿Ð¾Ð¿ÑÐ»ÑÑÐ½Ð¾ÑÑÑÑ
              Ð¿Ð¾Ð»ÑÐ·ÑÐµÑÑÑ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»ÑÐ½ÑÐ¹ ÑÑÑÐ¸Ð·Ð¼ â Ð² ÐÑÐºÑÑÑÐºÐ¾Ð¹ Ð¾Ð±Ð»Ð°ÑÑÐ¸
              ÑÐ°Ð·Ð²ÐµÑÐ²Ð»ÐµÐ½Ð½Ð°Ñ ÑÐµÑÑ Ð°Ð²ÑÐ¾Ð´Ð¾ÑÐ¾Ð³, ÑÐ²ÑÐ·Ð°Ð½Ð½ÑÑ Ñ ÑÐ¸ÑÐºÐ¾Ð¼ Ð¸ ÑÐ»Ð¾Ð¶Ð½Ð¾ÑÑÑÐ¼Ð¸,
              ÑÑÐ¾ Ð¿ÑÐ¸Ð²Ð»ÐµÐºÐ°ÐµÑ ÑÐºÑÑÑÐµÐ¼Ð°Ð»Ð¾Ð² Ðº ÑÐ°Ð¼Ð¾ÑÑÐ¾ÑÑÐµÐ»ÑÐ½Ð¾Ð¼Ñ Ð¿ÑÑÐµÑÐµÑÑÐ²Ð¸Ñ Ð¿Ð¾
              ÑÐ°Ð¹Ð³Ðµ. ÐÐ±Ð»Ð°ÑÑÐ½Ð°Ñ ÑÑÐ¾Ð»Ð¸ÑÐ° ÐÑÐºÑÑÑÐº â ÑÑÐ¾ Ð´ÑÐµÐ²Ð½Ð¸Ð¹ ÑÐ¸Ð±Ð¸ÑÑÐºÐ¸Ð¹ Ð³Ð¾ÑÐ¾Ð´,
              Ð³Ð´Ðµ Ð¸ÑÑÐ¾ÑÐ¸Ñ ÑÐµÐ²ÐµÑÐ½ÑÑ Ð½Ð°ÑÐ¾Ð´Ð¾Ð² ÑÐµÑÐ½Ð¾ Ð¿ÐµÑÐµÐ¿Ð»ÐµÑÐµÐ½Ð° Ñ ÑÑÑÑÐºÐ¸Ð¼Ð¸
              Ð½Ð°ÑÐ¸Ð¾Ð½Ð°Ð»ÑÐ½ÑÐ¼Ð¸ ÑÑÐ°Ð´Ð¸ÑÐ¸ÑÐ¼Ð¸. ÐÑÐ½Ð¾Ð²Ð½Ð°Ñ Ð´Ð¾ÑÑÐ¾Ð¿ÑÐ¸Ð¼ÐµÑÐ°ÑÐµÐ»ÑÐ½Ð¾ÑÑÑ ÐÑÐºÑÑÑÐºÐ¾Ð¹
              Ð¾Ð±Ð»Ð°ÑÑÐ¸ â Ð¾Ð·ÐµÑÐ¾ ÐÐ°Ð¹ÐºÐ°Ð». ÐÐ»Ñ ÑÐ¾Ð²ÑÐµÐ¼ÐµÐ½Ð½Ð¾Ð³Ð¾ Ð¾ÑÐ´ÑÑÐ° Ð½Ð° ÐÐ°Ð¹ÐºÐ°Ð»Ðµ ÑÐ¾Ð·Ð´Ð°Ð½Ñ
              Ð²ÑÐµ ÑÑÐ»Ð¾Ð²Ð¸Ñ. ÐÑÐ°ÐºÑÐ¸ÑÐµÑÐºÐ¸ Ð²ÑÐµ ÑÐ¶Ð½Ð¾Ðµ Ð¿Ð¾Ð±ÐµÑÐµÐ¶ÑÐµ Ð¾Ð·ÐµÑÐ° Ð·Ð°ÑÑÑÐ¾ÐµÐ½Ð¾
              Ð±Ð°Ð·Ð°Ð¼Ð¸ Ð¾ÑÐ´ÑÑÐ°, ÐºÐ¾ÑÑÐµÐ´Ð¶Ð°Ð¼Ð¸, Ð¿Ð°Ð½ÑÐ¸Ð¾Ð½Ð°ÑÐ°Ð¼Ð¸. Ð§Ð¸ÑÑÑÐ¹ Ð²Ð¾Ð·Ð´ÑÑ, ÑÑÐ±Ð°Ð»ÐºÐ°,
              Ð¿Ð°ÑÑÑÐ½ÑÐ¹ ÑÐ¿Ð¾ÑÑ, ÑÐ½Ð¸ÐºÐ°Ð»ÑÐ½Ð°Ñ Ð¿ÑÐ¸ÑÐ¾Ð´Ð° ÑÐ²Ð»ÑÑÑÑÑ Ð³Ð»Ð°Ð²Ð½Ð¾Ð¹ ÑÐµÐ»ÑÑ Ð´Ð»Ñ
              Ð¿ÑÑÐµÑÐµÑÑÐ²ÐµÐ½Ð½Ð¸ÐºÐ¾Ð². ÐÑÐ´ÐµÐ»ÑÐ½Ð¾Ðµ Ð½Ð°Ð¿ÑÐ°Ð²Ð»ÐµÐ½Ð¸Ðµ ÑÑÑÐ¸Ð·Ð¼Ð° â ÑÑÐ¾ Ð¿Ð¾ÐµÐ·Ð´ÐºÐ° Ð½Ð°
              Ð¾ÑÑÑÐ¾Ð² ÐÐ»ÑÑÐ¾Ð½. ÐÑÐ³ÐºÐ¸Ð¹ ÐºÐ»Ð¸Ð¼Ð°Ñ Ð¸ Ð¿Ð¾Ð»Ð¾Ð³Ð¸Ðµ Ð±ÐµÑÐµÐ³Ð° ÑÑÐ¾Ð¹ Ð¼ÐµÑÑÐ½Ð¾ÑÑÐ¸
              ÑÐ´ÐµÐ»Ð°Ð»Ð¸ ÐÐ»ÑÑÐ¾Ð½ Ð¼ÐµÑÑÐ½Ð¾Ð¹ Ð·Ð´ÑÐ°Ð²Ð½Ð¸ÑÐµÐ¹ Ð¸ Ð¸Ð·Ð»ÑÐ±Ð»ÐµÐ½Ð½ÑÐ¼ Ð¼ÐµÑÑÐ¾Ð¼ Ð¾ÑÐ´ÑÑÐ°.
              ÐÑÑÑÐ¾Ð² ÑÐµÑÐ½Ð¾ ÑÐ²ÑÐ·Ð°Ð½ Ñ ÑÑÐ°Ð´Ð¸ÑÐ¸ÑÐ¼Ð¸ Ð±ÑÐ´Ð´Ð¸Ð·Ð¼Ð° Ð¸ ÑÐ°Ð¼Ð°Ð½Ð¸Ð·Ð¼Ð°, Ð¸Ð¼ÐµÐµÑ
              Ð¼Ð½Ð¾Ð¶ÐµÑÑÐ²Ð¾ Ð´ÑÐµÐ²Ð½Ð¸Ñ ÐºÑÐ»ÑÑÑÑÐ½Ð¾-Ð¸ÑÑÐ¾ÑÐ¸ÑÐµÑÐºÐ¸Ñ Ð¿Ð°Ð¼ÑÑÐ½Ð¸ÐºÐ¾Ð². ÐÐ¾ÑÐµÐ»Ð¾Ðº
              ÐÐ¸ÑÑÐ²ÑÐ½ÐºÐ° Ð¸Ð¼ÐµÐµÑ Ð¼Ð½Ð¾Ð³Ð¾Ð²ÐµÐºÐ¾Ð²ÑÑ Ð¸ÑÑÐ¾ÑÐ¸Ñ. ÐÐ´ÐµÑÑ ÐµÑÑÑ
              ÐÑÑÐ¸ÑÐµÐºÑÑÑÐ½Ð¾-ÑÑÐ½Ð¾Ð³ÑÐ°ÑÐ¸ÑÐµÑÐºÐ¸Ð¹ Ð¼ÑÐ·ÐµÐ¹ Â«Ð¢Ð°Ð»ÑÑÑÂ» Ð¿Ð¾Ð´ Ð¾ÑÐºÑÑÑÑÐ¼ Ð½ÐµÐ±Ð¾Ð¼,
              ÐºÐ¾ÑÐ¾ÑÑÐ¹ Ð·Ð°Ð½Ð¸Ð¼Ð°ÐµÑ 67 Ð³Ð° Ð¸ Ð½Ð°ÑÑÐ¸ÑÑÐ²Ð°ÐµÑ Ð¾ÐºÐ¾Ð»Ð¾ ÑÑÑÑÑÐ¸ ÑÐºÑÐ¿Ð¾Ð½Ð°ÑÐ¾Ð²,
              Ð²ÐºÐ»ÑÑÐ°Ñ ÑÑÑÐ¾ÐµÐ½Ð¸Ñ. ÐÐ· ÐÐ¸ÑÑÐ²ÑÐ½ÐºÐ¸ Ð¼Ð¾Ð¶Ð½Ð¾ ÑÐ¾Ð²ÐµÑÑÐ¸ÑÑ ÑÐºÑÐºÑÑÑÐ¸Ñ Ð½Ð° ÐºÐ°ÑÐµÑÐµ
              Ð´Ð¾ Ð»ÐµÐ³ÐµÐ½Ð´Ð°ÑÐ½Ð¾Ð¹ ÑÐºÐ°Ð»Ñ Ð¨Ð°Ð¼Ð°Ð½-ÐºÐ°Ð¼ÐµÐ½Ñ, ÐºÐ¾ÑÐ¾ÑÑÑ ÑÐºÐ¾Ð±Ñ Ð±ÑÐ¾ÑÐ¸Ð»
              Ð¾ÑÐµÑ-ÐÐ°Ð¹ÐºÐ°Ð» Ð²ÑÐ»ÐµÐ´ ÑÐ²Ð¾ÐµÐ¹ ÑÐ±ÐµÐ³Ð°ÑÑÐµÐ¹ Ð´Ð¾ÑÐµÑÐ¸ ÐÐ½Ð³Ð°ÑÐµ.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              ÐÑ Ð° Ð½Ð° Ð´Ð°Ð½Ð½Ð¾Ð¼ ÑÐ°Ð¹ÑÐµ ÑÐ¾Ð±ÑÐ°Ð½Ñ ÑÐ°Ð¼ÑÐµ Ð¿Ð¾Ð¿ÑÐ»ÑÑÐ½ÑÐµ Ð¸ ÐºÑÐ°ÑÐ¸Ð²ÑÐµ Ð¼ÐµÑÑÐ°
              Ð½Ð°ÑÐµÐ¹ Ð¾Ð±Ð»Ð°ÑÑÐ¸, Ð¿Ð¾ÑÐµÑÐ¸ÑÑ ÐºÐ¾ÑÐ¾ÑÑÐµ Ð²Ñ Ð¼Ð¾Ð¶ÐµÑÐµ Ð² Ð»ÑÐ±Ð¾Ðµ Ð²ÑÐµÐ¼Ñ!
            </span>
            <br></br>
            <span></span>
            <span></span>
          </span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <Button1 className={styles['Choose-place-btn']}></Button1>
            </Link>
            <Link to="/baikalpage" className={styles['navlink5']}>
              <Button className={styles['About-Baikal-btn']}></Button>
            </Link>
          </div>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/50/%D0%9E%D0%B7%D0%B5%D1%80%D0%BE_%D0%91%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB%2C_%D0%91%D1%83%D1%85%D1%82%D0%B0_%D0%BF%D0%B5%D1%81%D1%87%D0%B0%D0%BD%D0%B0%D1%8F..jpg"
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
              rootClassName="rootClassName"
              className={styles['VK-icon']}
            ></Icon10>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
