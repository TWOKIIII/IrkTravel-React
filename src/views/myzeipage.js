import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Component11 from '../components/component11'
import Button7 from '../components/button7'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import './myzeipage.css'

const Myzeipage = (props) => {
  return (
    <div className="myzeipage-container">
      <Helmet>
        <title>Myzei page - IrkTravel</title>
        <meta property="og:title" content="Myzei page - IrkTravel" />
      </Helmet>
      <header className="myzeipage-header">
        <Link to="/" className="myzeipage-navlink">
          <Image1
            logo="https://cdn-icons-png.flaticon.com/512/932/932989.png"
            rootClassName="image1-root-class-name14"
            className="myzeipage-company-logo"
          ></Image1>
        </Link>
        <span className="myzeipage-company-name">
          <span className="myzeipage-text">IrkTrave</span>
          <span>l</span>
        </span>
        <nav className="myzeipage-nav">
          <Link to="/baikalpage" className="myzeipage-navlink1">
            <Text className="myzeipage-component"></Text>
          </Link>
          <Link to="/irkutskpage" className="myzeipage-navlink2">
            <Text1 className="myzeipage-component1"></Text1>
          </Link>
          <Link to="/about-mepage" className="myzeipage-navlink3">
            <Text2 className="myzeipage-component2"></Text2>
          </Link>
        </nav>
      </header>
      <div className="myzeipage-body">
        <div className="myzeipage-container1">
          <a
            href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%BB%D1%8C%D1%86%D1%8B_(%D0%BC%D1%83%D0%B7%D0%B5%D0%B9)"
            target="_blank"
            rel="noreferrer noopener"
            className="myzeipage-link"
          >
            <Component11
              rootClassName="component11-root-class-name"
              className="myzeipage-component3"
            ></Component11>
          </a>
          <h1 className="myzeipage-text02">
            <span>Музей Тальцы</span>
            <br></br>
            <span></span>
          </h1>
          <span className="myzeipage-text06">
            Архитектурно-этнографический музей «Тальцы» – уникальное собрание
            памятников истории, архитектуры и этнографии XVII–XX вв. Он
            расположен на правом берегу Ангары на 47-м километре Байкальского
            тракта по дороге от Иркутска к Байкалу. Музейный комплекс под
            открытым небом привлекает посетителей возможностью непосредственного
            знакомства с материальной и духовной культурой народов Прибайкалья.
            В музее ретроспективно воссоздано четыре историко-культурные зоны:
            русская, бурятская, эвенкийская и тофаларская. Буряты, эвенки и тофы
            – коренные народности Прибайкалья. Об их быте, особенностях жизни и
            верованиях рассказывают эвенкийские и тофаларские стойбища, комплекс
            эвенкийских захоронений и бурятский улус-летник. Русская
            Ангаро-Илимская экспозиционная зона, в которой собраны памятники
            деревянного зодчества Прибайкалья XVII – начала XX в.,
            преимущественно вывезенные с территории Братского и Усть-Илимского
            районов Иркутской области, представлена несколькими группами.
            Экспозиционный комплекс «Волостное село», воссоздающий
            административный центр конца XIX – начала XX в., включает в себя
            комплекс «Волостное правление», церковно-приходскую школу, усадьбу
            псаломщика, усадьбу городового казака. Главной его
            достопримечательностью являются уникальные памятники истории и
            архитектуры оборонного и культового зодчества: Спасская проезжая
            башня (1667 г.) и Казанская церковь (1679 г.) Илимского острога.
          </span>
          <div className="myzeipage-btn-group">
            <Link to="/choosepage" className="myzeipage-navlink4">
              <Button7 className="myzeipage-component4"></Button7>
            </Link>
            <a
              href="https://talci-irkutsk.ru/"
              target="_blank"
              rel="noreferrer noopener"
              className="myzeipage-link1 button"
            >
              <span>
                <span>Узнать подробнее о музее</span>
                <span></span>
              </span>
            </a>
          </div>
        </div>
        <img
          src="https://fs.tonkosti.ru/0i/y7/0iy7y0c2lyps08kg0wgcsk8k4.jpg"
          loading="eager"
          className="myzeipage-baikal-image"
        />
      </div>
      <footer className="myzeipage-footer">
        <span className="myzeipage-footer-text">
          © 2022 Gleb Liatokhov, All Rights Reserved.
        </span>
        <div className="myzeipage-icon-group">
          <a
            href="https://t.me/Gleb6095"
            target="_blank"
            rel="noreferrer noopener"
            className="myzeipage-link2"
          >
            <Icon9 className="myzeipage-telegram-icon"></Icon9>
          </a>
          <a
            href="https://vk.com/combathelicoptermi24"
            target="_blank"
            rel="noreferrer noopener"
            className="myzeipage-link3"
          >
            <Icon10
              rootClassName="icon10-root-class-name14"
              className="myzeipage-v-k-icon"
            ></Icon10>
          </a>
          <a
            href="https://github.com/aesthetic444"
            target="_blank"
            rel="noreferrer noopener"
            className="myzeipage-link4"
          >
            <svg viewBox="0 0 1024 1024" className="myzeipage-icon">
              <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Myzeipage
