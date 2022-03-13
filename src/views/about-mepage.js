import React from 'react'

import { Helmet } from 'react-helmet'

import Text8 from '../components/text8'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import Icon11 from '../components/icon11'
import Icon12 from '../components/icon12'
import Icon14 from '../components/icon14'
import Icon13 from '../components/icon13'
import styles from './about-mepage.module.css'
import HeaderNav from "../components/HeaderNav";

const AboutMepage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>About Me page - IrkTravel</title>
        <meta property="og:title" content="About Me page - IrkTravel" />
      </Helmet>
      <HeaderNav />
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
                Молодой &quot;типо программист&quot;, который решил за 3 месяца
                познать все трудности и невзгоды Фронтент разработчика. Он до
                последнего думал что сможет исправить все баги и недочёты своего
                сайта. Как же он заблуждался...
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
              <span>Глеб Лятохов</span>
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
                <Icon11 className={styles['component05']}></Icon11>
              </a>
              <a
                  href="https://t.me/Gleb6095"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link2']}
              >
                <Icon12 className={styles['component06']}></Icon12>
              </a>
              <a
                  href="https://github.com/aesthetic444"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link3']}
              >
                <Icon14 className={styles['component07']}></Icon14>
              </a>
              <a
                  href="https://www.instagram.com/liatokhov/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link4']}
              >
                <Icon13 className={styles['component08']}></Icon13>
              </a>
            </div>
          </div>
        </div>
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
              className={styles['link6']}
          >
            <Icon8 className={styles['Instagram-icon']}></Icon8>
          </a>
          <a
              href="https://t.me/Gleb6095"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link7']}
          >
            <Icon9 className={styles['Telegram-icon']}></Icon9>
          </a>
          <a
              href="https://vk.com/liatokhov"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link8']}
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
