import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Baikalcard from '../components/baikalcard'
import Irkutskcard from '../components/irkutskcard'
import Olkhoncard from '../components/olkhoncard'
import Trainroadcard from '../components/trainroadcard'
import Myzei from '../components/myzei'
import Skalacard from '../components/skalacard'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './choosepage.module.css'

const Choosepage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Choose page - IrkTravel</title>
        <meta property="og:title" content="Choose page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <Image1
            rootClassName="rootClassName1"
            className={styles['Company-logo']}
          ></Image1>
        </Link>
        <span className={styles['Company-name']}>
          <span className={styles['text']}>IrkTrave</span>
          <span>l</span>
        </span>
        <nav className={styles['Nav']}>
          <Link to="/baikalpage" className={styles['navlink01']}>
            <Text className={styles['component']}></Text>
          </Link>
          <Link to="/irkutskpage" className={styles['navlink02']}>
            <Text1 className={styles['component1']}></Text1>
          </Link>
          <Link to="/about-mepage" className={styles['navlink03']}>
            <Text2 className={styles['component2']}></Text2>
          </Link>
        </nav>
      </header>
      <div className={styles['Body']}>
        <div className={styles['Gallery']}>
          <Link to="/baikalpage">
            <Baikalcard
              rootClassName="rootClassName"
              className={styles['component3']}
            ></Baikalcard>
          </Link>
          <Link to="/irkutskpage">
            <Irkutskcard className={styles['component4']}></Irkutskcard>
          </Link>
          <Link to="/olkhonpage">
            <Olkhoncard className={styles['component5']}></Olkhoncard>
          </Link>
          <Link to="/k-b-j-dpage">
            <Trainroadcard className={styles['KBJD-card']}></Trainroadcard>
          </Link>
          <Link to="/myzeipage">
            <Myzei
              text="ÐÑÐ·ÐµÐ¹ Ð¿Ð°Ð¼ÑÑÐ½Ð¸ÐºÐ¾Ð², Ð°ÑÑÐ¸ÑÐµÐºÑÑÑÑ Ð¸ ÑÑÐ½Ð¾Ð³ÑÐ°ÑÐ¸Ð¸."
              rootClassName="rootClassName"
              className={styles['Myzei-card']}
            ></Myzei>
          </Link>
          <Link to="/skalapage">
            <Skalacard className={styles['Mis-xoboi-card']}></Skalacard>
          </Link>
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
              rootClassName="rootClassName1"
              className={styles['VK-icon']}
            ></Icon10>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Choosepage
