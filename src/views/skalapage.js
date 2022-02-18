import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './skalapage.module.css'
import DefaultButton from "../components/DefaultButton";
import LogoImage from "../components/LogoImage";

const Skalapage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Skala page - IrkTravel</title>
        <meta property="og:title" content="Skala page - IrkTravel" />
      </Helmet>
      <header className={styles['Header']}>
        <Link to="/" className={styles['navlink']}>
          <LogoImage
            rootClassName="rootClassName15"
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
          <h1 className={styles['text2']}>Скала Шаманка</h1>
          <span className={styles['text3']}>
            Скала Шаманка (или мыс Бурхан) находится на острове Ольхон. Это
            живописнейшее место, которое мечтают увидеть тысячи
            путешественников. Веками люди приезжали сюда для поклонения и
            принесения клятв. Величественность и уникальность скалы Шаманки
            незримо подчиняли умы и души людей. По сей день мыс Бурхан называют
            одной из девяти святынь Азии. Приезжающие сюда туристы чувствуют
            невероятную энергетику и силу острова, признаваясь себе в том, что
            давно утратили ту связь с природой, заложенную в каждом из нас.
            Скала, имеющая две вершины, состоит из кристаллического
            известняка-мрамора с вкраплениями граната. Рыжие лишайники густо
            покрывают поверхность камня. В самой скале есть сквозная пещера,
            которую по древним верованиям мог посещать только шаман. Здесь были
            найдены наскальные рисунки и надписи на санскрите, которые уже
            утрачены. На скале со стороны воды есть рисунок, очень сильно
            напоминающий дракона. Самое интересное, что это порода другого
            цвета. По местным легендам сама скала – это место обитания духа и
            властелина острова Ольхон по имени Хан Хутэ-Баабай. Он был во главе
            13 северных хатов (сыны небожителей), пришедших на землю по просьбе
            людей. Хан Хутэ-Баабай имеет 3 места обитания: одно – на небесах,
            второе – в подземном мире, а третье - на земле и это скала Шаманка.
            Во имя 13 хатов на мысе Бурхан были воздвигнуты 13 священных столбов
            коновязей – сэргэ на самой высокой точке мыса. Это место священно
            для народов, проживающих вокруг Байкала.
          </span>
          <span className={styles['Text4']}></span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <DefaultButton className={styles['container']} name={"Назад"} />
            </Link>
          </div>
        </div>
        <img
          src="https://ticketstour.ru/image/cache/catalog/marshruty/irkutsk/ostrov-olhon/depositphotos_57357591_xl-2015-1600x1200_g_90.webp"
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
                rootClassName="rootClassName15"
                className={styles['VK-icon']}
            ></Icon10>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Skalapage
