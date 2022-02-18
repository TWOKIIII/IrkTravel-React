import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

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
import LogoImage from "../components/LogoImage";

const Choosepage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Choose page - IrkTravel</title>
        <meta property="og:title" content="Choose page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <LogoImage
            rootClassName="rootClassName1"
            className={styles['Company-logo']}
          ></LogoImage>
        </Link>
        <span className={styles['Company-name']}>
          <span className={styles['text']}>IrkTravel</span>
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
              text="Музей памятников, архитектуры и этнографии."
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
          © 2021 Gleb Liatokhov, All Rights Reserved.
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
