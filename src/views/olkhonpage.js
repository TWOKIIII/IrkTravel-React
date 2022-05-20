import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Component9 from '../components/component9'
import Button5 from '../components/button5'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import './olkhonpage.css'

const Olkhonpage = (props) => {
  return (
    <div className="olkhonpage-container">
      <Helmet>
        <title>Olkhon page - IrkTravel</title>
        <meta property="og:title" content="Olkhon page - IrkTravel" />
      </Helmet>
      <header className="olkhonpage-header">
        <Link to="/" className="olkhonpage-navlink">
          <Image1
            logo="https://cdn-icons-png.flaticon.com/512/932/932989.png"
            rootClassName="image1-root-class-name12"
            className="olkhonpage-company-logo"
          ></Image1>
        </Link>
        <span className="olkhonpage-company-name">
          <span className="olkhonpage-text">IrkTrave</span>
          <span>l</span>
        </span>
        <nav className="olkhonpage-nav">
          <Link to="/baikalpage" className="olkhonpage-navlink1">
            <Text className="olkhonpage-component"></Text>
          </Link>
          <Link to="/irkutskpage" className="olkhonpage-navlink2">
            <Text1 className="olkhonpage-component1"></Text1>
          </Link>
          <Link to="/about-mepage" className="olkhonpage-navlink3">
            <Text2 className="olkhonpage-component2"></Text2>
          </Link>
        </nav>
      </header>
      <div className="olkhonpage-body">
        <div className="olkhonpage-container1">
          <a
            href="https://ru.wikipedia.org/wiki/%D0%9E%D0%BB%D1%8C%D1%85%D0%BE%D0%BD"
            target="_blank"
            rel="noreferrer noopener"
            className="olkhonpage-link"
          >
            <Component9
              rootClassName="component9-root-class-name"
              className="olkhonpage-component3"
            ></Component9>
          </a>
          <h1 className="olkhonpage-text2">Остров Ольхон</h1>
          <span></span>
          <span className="olkhonpage-text4">
            Ольхон - территория мифов и легенд, сказочный остров, величественно
            раскинувшийся в сердце озера Байкал. Ольхон является самым крупным
            островом Байкала и третьим по величине «озерным» островом в мире,
            его общая площадь составляет около 730 кв. км. Всё существование
            Ольхона пропитано мистикой. Этот остров особенно почитаем среди
            шаманов и буддистов: здесь первый бурятский шаман получил
            способность слышать духов и отвечать им, и именно здесь в пещере
            Шаманского мыса обитает с незапамятных времен самое почитаемое на
            Байкале божество – Угутэ-нойон, грозный хозяин Ольхона. Здесь до сих
            пор гнездятся гигантские степные орлы, которые почитались у бурят
            священными животными. В одной из легенд говорится о том, что
            Белоголовый Орел является родным сыном «хозяина» острова Ольхон,
            обитателя ольхонского мыса Бурхан. Орел – защитник ольхонского
            народа от злых божеств. Говорят, что он живет на священной горе Жима
            (вершина острова) до сих пор и высоко в горах командует белоголовыми
            орлами всей Земли. Самое благоприятное время для посещения Ольхона –
            с середины мая по середину декабря, т. к. именно в этот период
            остров имеет постоянную связь с большой землей с помощью паромной
            переправы. Если цель поездки - уединение и любование красотами
            Ольхона, стоит ехать в июне или сентябре. Купаться в эти месяцы
            нельзя, т. к. вода слишком холодная, но зато на острове тихо и
            спокойно. Пиком туристического сезона на Ольхоне являются самые
            теплые месяцы – июль и август, в это время вода в озере достаточно
            прогревается для купания. Климат на острове Ольхон сухой, более 300
            дней в году стоит солнечная погода. Но следует учесть, что почти
            полгода остров продувают сильнейшие горные ветра.
          </span>
          <div className="olkhonpage-btn-group">
            <Link to="/choosepage" className="olkhonpage-navlink4">
              <Button5 className="olkhonpage-component4"></Button5>
            </Link>
            <a
              href="https://www.booking.com/city/ru/khuzhir-ru.ru.html"
              target="_blank"
              rel="noreferrer noopener"
              className="olkhonpage-link1 button"
            >
              <span>
                <span>Найти отель</span>
                <span></span>
              </span>
            </a>
          </div>
        </div>
        <img
          src="https://look.com.ua/pic/201402/1920x1080/look.com.ua-93311.jpg"
          loading="eager"
          className="olkhonpage-baikal-image"
        />
      </div>
      <footer className="olkhonpage-footer">
        <span className="olkhonpage-footer-text">
          © 2022 Gleb Liatokhov, All Rights Reserved.
        </span>
        <div className="olkhonpage-icon-group">
          <a
            href="https://t.me/Gleb6095"
            target="_blank"
            rel="noreferrer noopener"
            className="olkhonpage-link2"
          >
            <Icon9 className="olkhonpage-telegram-icon"></Icon9>
          </a>
          <a
            href="https://vk.com/combathelicoptermi24"
            target="_blank"
            rel="noreferrer noopener"
            className="olkhonpage-link3"
          >
            <Icon10
              rootClassName="icon10-root-class-name12"
              className="olkhonpage-v-k-icon"
            ></Icon10>
          </a>
          <a
            href="https://github.com/aesthetic444"
            target="_blank"
            rel="noreferrer noopener"
            className="olkhonpage-link4"
          >
            <svg viewBox="0 0 1024 1024" className="olkhonpage-icon">
              <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Olkhonpage
