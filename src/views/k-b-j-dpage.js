import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Component10 from '../components/component10'
import Button6 from '../components/button6'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import './k-b-j-dpage.css'

const KBJDpage = (props) => {
  return (
    <div className="k-b-j-dpage-container">
      <Helmet>
        <title>KBJD page - IrkTravel</title>
        <meta property="og:title" content="KBJD page - IrkTravel" />
      </Helmet>
      <header className="k-b-j-dpage-header">
        <Link to="/" className="k-b-j-dpage-navlink">
          <Image1
            logo="https://cdn-icons-png.flaticon.com/512/932/932989.png"
            rootClassName="image1-root-class-name13"
            className="k-b-j-dpage-company-logo"
          ></Image1>
        </Link>
        <span className="k-b-j-dpage-company-name">
          <span className="k-b-j-dpage-text">IrkTrave</span>
          <span>l</span>
        </span>
        <nav className="k-b-j-dpage-nav">
          <Link to="/baikalpage" className="k-b-j-dpage-navlink1">
            <Text className="k-b-j-dpage-component"></Text>
          </Link>
          <Link to="/irkutskpage" className="k-b-j-dpage-navlink2">
            <Text1 className="k-b-j-dpage-component1"></Text1>
          </Link>
          <Link to="/about-mepage" className="k-b-j-dpage-navlink3">
            <Text2 className="k-b-j-dpage-component2"></Text2>
          </Link>
        </nav>
      </header>
      <div className="k-b-j-dpage-body">
        <div className="k-b-j-dpage-container1">
          <a
            href="https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D1%83%D0%B3%D0%BE%D0%B1%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D0%B6%D0%B5%D0%BB%D0%B5%D0%B7%D0%BD%D0%B0%D1%8F_%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B0"
            target="_blank"
            rel="noreferrer noopener"
            className="k-b-j-dpage-link"
          >
            <Component10
              rootClassName="component10-root-class-name"
              className="k-b-j-dpage-component3"
            ></Component10>
          </a>
          <h1 className="k-b-j-dpage-text2">
            <span>КБЖД</span>
            <br></br>
            <span></span>
          </h1>
          <span className="k-b-j-dpage-text6">
            Кругобайкальская железная дорога - уникальный памятник архитектуры и
            одна из самых популярных экскурсий по Байкалу. Она сочетает в себе
            красоту байкальских гор, самого озера, уникальные архитектурные
            сооружения, и конечно же великую историю! Мало кто остается
            равнодушным от той красоты и величия, которое предстает перед ними в
            виде сочетания КБЖД и озера Байкал! В настоящее время
            Кругобайкальской железной дорогой обычно называют ветку Слюдянка II
            — Байкал длиной 89 километров. На дороге сейчас имеется четыре
            станции (Култук, Маритуй, Уланово и Байкал) и один разъезд 137-й км.
            На КБЖД используется 38 тоннелей общей длиной 9063 м (самый длинный
            из них — тоннель через мыс Половинный длиной 777 м), 15 каменных
            галерей общей длиной 295 м (сейчас используется только 5 из них) и 3
            железобетонных галереи с отверстиями, 248 мостов и виадуков, 268
            подпорных стенок. По насыщенности инженерными сооружениями КБЖД не
            имеет равных в России и занимает одно из первых мест в мире. Тоннели
            и каменные галереи КБЖД уникальны тем, что они строились по
            нетиповым проектам и не были перестроены в последующие годы,
            сохранив первоначальный замысел архитекторов и инженеров начала XX
            века.
          </span>
          <div className="k-b-j-dpage-btn-group">
            <Link to="/choosepage" className="k-b-j-dpage-navlink4">
              <Button6 className="k-b-j-dpage-component4"></Button6>
            </Link>
            <a
              href="https://xn-----6kcaabbbrhkjamrznebtf0cisa4avo3c5tmdi.xn--p1ai/"
              target="_blank"
              rel="noreferrer noopener"
              className="k-b-j-dpage-link1 button"
            >
              Купить билеты на поезд
            </a>
          </div>
        </div>
        <img
          src="https://baikalterra.com/img/kbzhd/kbzhd/kbzhd-1530758074.jpg"
          loading="eager"
          className="k-b-j-dpage-baikal-image"
        />
      </div>
      <footer className="k-b-j-dpage-footer">
        <span className="k-b-j-dpage-footer-text">
          © 2022 Gleb Liatokhov, All Rights Reserved.
        </span>
        <div className="k-b-j-dpage-icon-group">
          <a
            href="https://t.me/Gleb6095"
            target="_blank"
            rel="noreferrer noopener"
            className="k-b-j-dpage-link2"
          >
            <Icon9 className="k-b-j-dpage-telegram-icon"></Icon9>
          </a>
          <a
            href="https://vk.com/combathelicoptermi24"
            target="_blank"
            rel="noreferrer noopener"
            className="k-b-j-dpage-link3"
          >
            <Icon10
              rootClassName="icon10-root-class-name13"
              className="k-b-j-dpage-v-k-icon"
            ></Icon10>
          </a>
          <a
            href="https://github.com/aesthetic444"
            target="_blank"
            rel="noreferrer noopener"
            className="k-b-j-dpage-link4"
          >
            <svg viewBox="0 0 1024 1024" className="k-b-j-dpage-icon">
              <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default KBJDpage
