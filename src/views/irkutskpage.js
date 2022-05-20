import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Component8 from '../components/component8'
import Button3 from '../components/button3'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import './irkutskpage.css'

const Irkutskpage = (props) => {
  return (
    <div className="irkutskpage-container">
      <Helmet>
        <title>Irkutsk page - IrkTravel</title>
        <meta property="og:title" content="Irkutsk page - IrkTravel" />
      </Helmet>
      <header className="irkutskpage-header">
        <Link to="/" className="irkutskpage-navlink">
          <Image1
            logo="https://cdn-icons-png.flaticon.com/512/932/932989.png"
            rootClassName="image1-root-class-name10"
            className="irkutskpage-company-logo"
          ></Image1>
        </Link>
        <span className="irkutskpage-company-name">
          <span className="irkutskpage-text">IrkTrave</span>
          <span>l</span>
        </span>
        <nav className="irkutskpage-nav">
          <Link to="/baikalpage" className="irkutskpage-navlink1">
            <Text className="irkutskpage-component"></Text>
          </Link>
          <Link to="/irkutskpage" className="irkutskpage-navlink2">
            <Text1 className="irkutskpage-component1"></Text1>
          </Link>
          <Link to="/about-mepage" className="irkutskpage-navlink3">
            <Text2 className="irkutskpage-component2"></Text2>
          </Link>
        </nav>
      </header>
      <div className="irkutskpage-body">
        <div className="irkutskpage-container1">
          <a
            href="https://ru.wikipedia.org/wiki/%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA"
            target="_blank"
            rel="noreferrer noopener"
            className="irkutskpage-link"
          >
            <Component8
              rootClassName="component8-root-class-name"
              className="irkutskpage-component3"
            ></Component8>
          </a>
          <h1 className="irkutskpage-heading">Город Иркутск</h1>
          <span className="irkutskpage-text2">
            <span>
              Иркутск – уникальный, старинный город, древний перекресток
              торговых путей, столица Восточной Сибири. Он находится на
              расстоянии 5042 километра от Москвы и расположен на берегах реки
              Ангары, в 63 километрах от озера Байкал. Климат резко
              континентальный, со значительными перепадами температур. Из-за
              близости к сейсмически активному Байкальскому рифту регулярны
              слабые землетрясения. Является административным центром Иркутской
              области и Иркутского района, в который не входит и образует
              отдельное муниципальное образование город Иркутск со статусом
              городского округа как единственный населённый пункт в его составе.
              Шестой по величине город Сибири с численностью населения 617 315
              человека. Отнесён к историческим поселениям России; исторический
              центр города внесён в предварительный список Всемирного наследия
              ЮНЕСКО. Находясь в городе вам следует посетить такие места как:
              памятник символа города «Бабр», исторический район «130-й
              квартал», Нижнюю набережную Ангары, а также музей-ледокол
              «Ангара».
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Современный Иркутск – город исторический, удачно сочетающий
              величие и самобытность исторического центра и кварталы современной
              застройки, традиции самого интеллигентного и культурного
              сибирского города с современным промышленным и
              научно-образовательным потенциалом, развитой инфраструктурой.
            </span>
            <br></br>
            <span></span>
            <span></span>
          </span>
          <div className="irkutskpage-btn-group">
            <Link to="/choosepage" className="irkutskpage-navlink4">
              <Button3
                rootClassName="button3-root-class-name"
                className="irkutskpage-component4"
              ></Button3>
            </Link>
            <a
              href="https://www.booking.com/city/ru/irkutsk.ru.html"
              target="_blank"
              rel="noreferrer noopener"
              className="irkutskpage-link1 button"
            >
              Найти отель
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </a>
            <a
              href="https://www.aviasales.ru/cities/irkutsk-ikt"
              target="_blank"
              rel="noreferrer noopener"
              className="irkutskpage-link2 button"
            >
              Купить авиабилеты
            </a>
          </div>
        </div>
        <img
          src="https://cdnn21.img.ria.ru/images/07e5/06/13/1737671552_0:0:3011:1694_1920x0_80_0_0_435d5bf1e84de25c6d138ead8cc53a77.jpg"
          loading="eager"
          className="irkutskpage-baikal-image"
        />
      </div>
      <footer className="irkutskpage-footer">
        <span className="irkutskpage-footer-text">
          © 2022 Gleb Liatokhov, All Rights Reserved.
        </span>
        <div className="irkutskpage-icon-group">
          <a
            href="https://t.me/Gleb6095"
            target="_blank"
            rel="noreferrer noopener"
            className="irkutskpage-link3"
          >
            <Icon9 className="irkutskpage-telegram-icon"></Icon9>
          </a>
          <a
            href="https://vk.com/combathelicoptermi24"
            target="_blank"
            rel="noreferrer noopener"
            className="irkutskpage-link4"
          >
            <Icon10
              rootClassName="icon10-root-class-name10"
              className="irkutskpage-v-k-icon"
            ></Icon10>
          </a>
          <a
            href="https://github.com/aesthetic444"
            target="_blank"
            rel="noreferrer noopener"
            className="irkutskpage-link5"
          >
            <svg viewBox="0 0 1024 1024" className="irkutskpage-icon">
              <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Irkutskpage
