import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Component7 from '../components/component7'
import Button4 from '../components/button4'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import './baikalpage.css'

const Baikalpage = (props) => {
  return (
    <div className="baikalpage-container">
      <Helmet>
        <title>Baikal page - IrkTravel</title>
        <meta property="og:title" content="Baikal page - IrkTravel" />
      </Helmet>
      <header className="baikalpage-header">
        <Link to="/" className="baikalpage-navlink">
          <Image1
            logo="https://cdn-icons-png.flaticon.com/512/932/932989.png"
            rootClassName="image1-root-class-name11"
            className="baikalpage-company-logo"
          ></Image1>
        </Link>
        <span className="baikalpage-company-name">
          <span className="baikalpage-text">IrkTrave</span>
          <span>l</span>
        </span>
        <nav className="baikalpage-nav">
          <Link to="/baikalpage" className="baikalpage-navlink1">
            <Text className="baikalpage-component"></Text>
          </Link>
          <Link to="/irkutskpage" className="baikalpage-navlink2">
            <Text1 className="baikalpage-component1"></Text1>
          </Link>
          <Link to="/about-mepage" className="baikalpage-navlink3">
            <Text2 className="baikalpage-component2"></Text2>
          </Link>
        </nav>
      </header>
      <div className="baikalpage-body">
        <div className="baikalpage-container1">
          <h1 className="baikalpage-text2">Озеро Байкал</h1>
          <a
            href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB"
            target="_blank"
            rel="noreferrer noopener"
            className="baikalpage-link"
          >
            <Component7
              rootClassName="component7-root-class-name"
              className="baikalpage-component3"
            ></Component7>
          </a>
          <span className="baikalpage-text3">
            <span className="baikalpage-text4">
              Расположено озеро на юге Восточной Сибири. Имеет оно тектоническое
              происхождение, т. е. расположено в разломе земной коры. В районе
              Байкала постоянно происходят небольшие землетрясения. Длина озера
              636 км. Ширина в разных местах изменяется от 24 до 79 км. Озеро
              является самым глубоким в мире. Максимальная его глубина 1642м,
              средняя глубина 744м. В Байкал впадает 336 рек, а вытекает только
              одна – Ангара. Вода в озере очень чистая, благодаря эндемику
              (организму, который обитает только в этом озере) рачку эпишуре. Он
              очищает воду, пропуская её через свой организм. В воде очень мало
              взвешенной органики минеральных частиц. Прозрачность воды
              настолько велика, что камни и предметы видны на глубине до 40 м.
              Вода холодная. Летом её температура +8-9 градусов. С начала января
              и до начала мая озеро покрывается льдом. Не замерзает только
              небольшой участок у истока Ангары. В пределах акватории озера
              насчитывается 30 островов, но только один из них крупный – Ольхон.
              Две трети всех обитателей Байкала уникальны. Самые известные
              представители Байкальской эндемичной фауны – это Байкальский
              омуль, нерпа, рыба голомянка и многочисленные ракообразные,
              которые являются главными чистильщиками озера. Озеро Байкал
              включено в перечень объектов «Всемирного природного наследия».
            </span>
          </span>
          <div className="baikalpage-btn-group">
            <Link to="/choosepage" className="baikalpage-navlink4">
              <Button4 className="baikalpage-component4"></Button4>
            </Link>
            <a
              href="https://www.booking.com/region/ru/baikal.ru.html"
              target="_blank"
              rel="noreferrer noopener"
              className="baikalpage-link1 button"
            >
              Найти отель
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </a>
          </div>
        </div>
        <img
          src="https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2019-02/RIAN_5626737.HR_.ru_.jpg?itok=wSFQZEYH"
          loading="eager"
          className="baikalpage-baikal-image"
        />
      </div>
      <footer className="baikalpage-footer">
        <span className="baikalpage-footer-text">
          © 2022 Gleb Liatokhov, All Rights Reserved.
        </span>
        <div className="baikalpage-icon-group">
          <a
            href="https://t.me/Gleb6095"
            target="_blank"
            rel="noreferrer noopener"
            className="baikalpage-link2"
          >
            <Icon9 className="baikalpage-telegram-icon"></Icon9>
          </a>
          <a
            href="https://vk.com/combathelicoptermi24"
            target="_blank"
            rel="noreferrer noopener"
            className="baikalpage-link3"
          >
            <Icon10
              rootClassName="icon10-root-class-name11"
              className="baikalpage-v-k-icon"
            ></Icon10>
          </a>
          <a
            href="https://github.com/aesthetic444"
            target="_blank"
            rel="noreferrer noopener"
            className="baikalpage-link4"
          >
            <svg viewBox="0 0 1024 1024" className="baikalpage-icon">
              <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Baikalpage
