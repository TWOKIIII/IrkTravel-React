import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Button1 from '../components/button1'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>IrkTravel</title>
        <meta property="og:title" content="IrkTravel" />
      </Helmet>
      <header className="home-header">
        <Link to="/" className="home-navlink">
          <Image1
            logo="https://cdn-icons-png.flaticon.com/512/932/932989.png"
            rootClassName="image1-root-class-name"
            className="home-company-logo"
          ></Image1>
        </Link>
        <span className="home-company-name">
          <span className="home-text">IrkTrave</span>
          <span>l</span>
        </span>
        <nav className="home-nav">
          <Link to="/baikalpage" className="home-navlink1">
            <Text className="home-component"></Text>
          </Link>
          <Link to="/irkutskpage" className="home-navlink2">
            <Text1 className="home-component1"></Text1>
          </Link>
          <Link to="/about-mepage" className="home-navlink3">
            <Text2 className="home-component2"></Text2>
          </Link>
        </nav>
      </header>
      <div className="home-body">
        <div className="home-hero">
          <h1 className="home-text2">Не знаете что посетить?</h1>
          <h1 className="home-text3">
            <span className="home-text4">Тогда вы попали по адресу!</span>
            <span className="home-text5">&amp;#8203;</span>
          </h1>
          <span className="home-text6">
            Ведь на данном сайте вы можете посмотреть и узнать о самых
            незабываемых и красивых местах Иркутской области. Ведь наша область,
            несмотря на удаленность от центральных регионов, является важной
            составляющей туристического кластера России. В первую очередь, она
            становится притягательной благодаря своим природным богатствам,
            благоприятной экологической обстановке, уникальным водным ресурсам.
            Немалое сделано за последние годы для развития экскурсионного
            туризма и инфраструктуры, чтобы отдых в суровом краю оказался
            комфортным и неповторимым. Областная столица Иркутск – это древний
            сибирский город, где история северных народов тесно переплетена с
            русскими национальными традициями. Основная достопримечательность
            Иркутской области – озеро Байкал. Для современного отдыха на Байкале
            созданы все условия. Практически все южное побережье озера застроено
            базами отдыха, коттеджами, пансионатами. Чистый воздух, рыбалка,
            парусный спорт, уникальная природа являются главной целью для
            путешественников. Отдельное направление туризма – это поездка на
            остров Ольхон. Мягкий климат и пологие берега этой местности сделали
            Ольхон местной здравницей и излюбленным местом отдыха. Поселок
            Листвянка имеет многовековую историю. Здесь есть
            Архитектурно-этнографический музей «Тальцы» под открытым небом,
            который занимает 67 га и насчитывает около тысячи экспонатов,
            включая строения.
          </span>
          <div className="home-btn-group">
            <Link to="/choosepage" className="home-navlink4">
              <Button1 className="home-component3"></Button1>
            </Link>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <span className="home-footer-text">
          © 2022 Gleb Liatokhov, All Rights Reserved.
        </span>
        <div className="home-icon-group">
          <a
            href="https://t.me/Gleb6095"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <Icon9 className="home-telegram-icon"></Icon9>
          </a>
          <a
            href="https://vk.com/combathelicoptermi24"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            <Icon10
              rootClassName="icon10-root-class-name"
              className="home-v-k-icon"
            ></Icon10>
          </a>
          <a
            href="https://github.com/aesthetic444"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link2"
          >
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
