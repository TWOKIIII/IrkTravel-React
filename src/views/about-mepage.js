import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Text8 from '../components/text8'
import Icon11 from '../components/icon11'
import Icon12 from '../components/icon12'
import Icon14 from '../components/icon14'
import Icon13 from '../components/icon13'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './about-mepage.module.css'

const AboutMepage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>About Me page - IrkTravel</title>
        <meta property="og:title" content="About Me page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <Image1
            rootClassName="rootClassName8"
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
          <div className={styles['Testimonial']}>
            <img
              alt="image"
              src="https://sun9-10.userapi.com/impg/j2BYBgvhUyZ9nwi-ubIyNJ4zsg002V1UmBw_Og/i7ceN7isCvQ.jpg?size=864x1080&amp;quality=96&amp;sign=e4048c9c5f0c2baffa8c29e2a77f9d54&amp;type=album"
              loading="eager"
              className={styles['image']}
            />
            <div className={styles['Testimonial1']}>
              <div className={styles['container2']}>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className={styles['icon']}
                >
                  <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
                </svg>
              </div>
              <span className={styles['text2']}>
                ÐÐ¾Ð»Ð¾Ð´Ð¾Ð¹ &quot;ÑÐ¸Ð¿Ð¾ Ð¿ÑÐ¾Ð³ÑÐ°Ð¼Ð¼Ð¸ÑÑ&quot;, ÐºÐ¾ÑÐ¾ÑÑÐ¹ ÑÐµÑÐ¸Ð» Ð·Ð° 3 Ð¼ÐµÑÑÑÐ°
                Ð¿Ð¾Ð·Ð½Ð°ÑÑ Ð²ÑÐµ ÑÑÑÐ´Ð½Ð¾ÑÑÐ¸ Ð¸ Ð½ÐµÐ²Ð·Ð³Ð¾Ð´Ñ Ð¤ÑÐ¾Ð½ÑÐµÐ½Ñ ÑÐ°Ð·ÑÐ°Ð±Ð¾ÑÑÐ¸ÐºÐ°. ÐÐ½ Ð´Ð¾
                Ð¿Ð¾ÑÐ»ÐµÐ´Ð½ÐµÐ³Ð¾ Ð´ÑÐ¼Ð°Ð» ÑÑÐ¾ ÑÐ¼Ð¾Ð¶ÐµÑ Ð¸ÑÐ¿ÑÐ°Ð²Ð¸ÑÑ Ð²ÑÐµ Ð±Ð°Ð³Ð¸ Ð¸ Ð½ÐµÐ´Ð¾ÑÑÑÑ ÑÐ²Ð¾ÐµÐ³Ð¾
                ÑÐ°Ð¹ÑÐ°. ÐÐ°Ðº Ð¶Ðµ Ð¾Ð½ Ð·Ð°Ð±Ð»ÑÐ¶Ð´Ð°Ð»ÑÑ...
              </span>
              <div className={styles['container3']}>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className={styles['icon2']}
                >
                  <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
                </svg>
              </div>
            </div>
            <span className={styles['Text3']}>
              <span>ÐÐ»ÐµÐ± ÐÑÑÐ¾ÑÐ¾Ð²</span>
            </span>
            <a
              href="https://www.istu.edu/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link']}
            >
              <Text8 className={styles['component3']}></Text8>
            </a>
            <div className={styles['SocialBar']}>
              <a
                href="https://vk.com/liatokhov"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link1']}
              >
                <Icon11 className={styles['component4']}></Icon11>
              </a>
              <a
                href="https://t.me/Gleb6095"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link2']}
              >
                <Icon12 className={styles['component5']}></Icon12>
              </a>
              <a
                href="https://github.com/aesthetic444"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link3']}
              >
                <Icon14 className={styles['component6']}></Icon14>
              </a>
              <a
                href="https://www.instagram.com/liatokhov/"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link4']}
              >
                <Icon13 className={styles['component7']}></Icon13>
              </a>
            </div>
          </div>
        </div>
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
            className={styles['link5']}
          >
            <Icon8 className={styles['Instagram-icon']}></Icon8>
          </a>
          <a
            href="https://t.me/Gleb6095"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link6']}
          >
            <Icon9 className={styles['Telegram-icon']}></Icon9>
          </a>
          <a
            href="https://vk.com/liatokhov"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link7']}
          >
            <Icon10
              rootClassName="rootClassName8"
              className={styles['VK-icon']}
            ></Icon10>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default AboutMepage
