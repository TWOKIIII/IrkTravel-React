import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './irkutskpage.module.css'
import DefaultButton from "../components/DefaultButton";
import LogoImage from "../components/LogoImage";

const Irkutskpage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Irkutsk page - IrkTravel</title>
        <meta property="og:title" content="Irkutsk page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <LogoImage
            rootClassName="rootClassName10"
            className={styles['Company-logo']}
          ></LogoImage>
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
          <h1 className={styles['text2']}>Город Иркутск</h1>
          <span className={styles['Text3']}>
            Иркутск расположен в Восточной Сибири, на берегах реки Ангары, при
            впадении в неё реки Иркут, в 66 км от Байкала. Климат резко
            континентальный, со значительными перепадами температур. Из-за
            близости к сейсмически активному Байкальскому рифту регулярны слабые
            землетрясения. Является административным центром Иркутской области и
            Иркутского района, в который не входит и образует отдельное
            муниципальное образование город Иркутск со статусом городского
            округа как единственный населённый пункт в его составе. Шестой по
            величине город Сибири с численностью населения 617 315 человека.
            Отнесён к историческим поселениям России; исторический центр города
            внесён в предварительный список Всемирного наследия ЮНЕСКО. Находясь
            в городе вам следует посетить такие места как: памятник символа
            города «Бабр», исторический район «130-й квартал», Нижнюю набережную
            Ангары, а также музей-ледокол «Ангара».
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <DefaultButton className={styles['container']} name={"Назад"} />
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
