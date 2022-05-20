import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Component12 from '../components/component12'
import Button8 from '../components/button8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import './skalapage.css'

const Skalapage = (props) => {
  return (
    <div className="skalapage-container">
      <Helmet>
        <title>Skala page - IrkTravel</title>
        <meta property="og:title" content="Skala page - IrkTravel" />
      </Helmet>
      <header className="skalapage-header">
        <Link to="/" className="skalapage-navlink">
          <Image1
            logo="https://cdn-icons-png.flaticon.com/512/932/932989.png"
            rootClassName="image1-root-class-name15"
            className="skalapage-company-logo"
          ></Image1>
        </Link>
        <span className="skalapage-company-name">
          <span className="skalapage-text">IrkTrave</span>
          <span>l</span>
        </span>
        <nav className="skalapage-nav">
          <Link to="/baikalpage" className="skalapage-navlink1">
            <Text className="skalapage-component"></Text>
          </Link>
          <Link to="/irkutskpage" className="skalapage-navlink2">
            <Text1 className="skalapage-component1"></Text1>
          </Link>
          <Link to="/about-mepage" className="skalapage-navlink3">
            <Text2 className="skalapage-component2"></Text2>
          </Link>
        </nav>
      </header>
      <div className="skalapage-body">
        <div className="skalapage-container1">
          <a
            href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D0%B0%D0%BB%D0%B0_%D0%A8%D0%B0%D0%BC%D0%B0%D0%BD%D0%BA%D0%B0_(%D0%BC%D1%8B%D1%81)"
            target="_blank"
            rel="noreferrer noopener"
            className="skalapage-link"
          >
            <Component12
              rootClassName="component12-root-class-name"
              className="skalapage-component3"
            ></Component12>
          </a>
          <h1 className="skalapage-text2">Скала Шаманка</h1>
          <span className="skalapage-text3">
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
          <span className="skalapage-text4"></span>
          <div className="skalapage-btn-group">
            <Link to="/choosepage" className="skalapage-navlink4">
              <Button8 className="skalapage-component4"></Button8>
            </Link>
          </div>
        </div>
        <img
          src="https://ticketstour.ru/image/cache/catalog/marshruty/irkutsk/ostrov-olhon/depositphotos_57357591_xl-2015-1600x1200_g_90.webp"
          loading="eager"
          className="skalapage-baikal-image"
        />
      </div>
      <footer className="skalapage-footer">
        <span className="skalapage-footer-text">
          <span>© 2022</span>
          <span> Gleb Liatokhov, All Rights Reserved.</span>
        </span>
        <div className="skalapage-icon-group">
          <a
            href="https://t.me/Gleb6095"
            target="_blank"
            rel="noreferrer noopener"
            className="skalapage-link1"
          >
            <Icon9 className="skalapage-telegram-icon"></Icon9>
          </a>
          <a
            href="https://vk.com/combathelicoptermi24"
            target="_blank"
            rel="noreferrer noopener"
            className="skalapage-link2"
          >
            <Icon10
              rootClassName="icon10-root-class-name15"
              className="skalapage-v-k-icon"
            ></Icon10>
          </a>
          <a
            href="https://github.com/aesthetic444"
            target="_blank"
            rel="noreferrer noopener"
            className="skalapage-link3"
          >
            <div className="skalapage-container2">
              <svg viewBox="0 0 1024 1024" className="skalapage-icon">
                <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
              </svg>
            </div>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Skalapage
