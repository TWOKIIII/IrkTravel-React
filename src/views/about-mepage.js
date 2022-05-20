import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import SocialBar from '../components/social-bar'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import './about-mepage.css'

const AboutMepage = (props) => {
  return (
    <div className="about-mepage-container">
      <Helmet>
        <title>About Me page - IrkTravel</title>
        <meta property="og:title" content="About Me page - IrkTravel" />
      </Helmet>
      <header className="about-mepage-header">
        <Link to="/" className="about-mepage-navlink">
          <Image1
            logo="https://cdn-icons-png.flaticon.com/512/932/932989.png"
            rootClassName="image1-root-class-name8"
            className="about-mepage-company-logo"
          ></Image1>
        </Link>
        <span className="about-mepage-company-name">
          <span className="about-mepage-text">IrkTrave</span>
          <span>l</span>
        </span>
        <nav className="about-mepage-nav">
          <Link to="/baikalpage" className="about-mepage-navlink1">
            <Text className="about-mepage-component"></Text>
          </Link>
          <Link to="/irkutskpage" className="about-mepage-navlink2">
            <Text1 className="about-mepage-component1"></Text1>
          </Link>
          <Link to="/about-mepage" className="about-mepage-navlink3">
            <Text2 className="about-mepage-component2"></Text2>
          </Link>
        </nav>
      </header>
      <div className="about-mepage-body">
        <div className="about-mepage-testimonial">
          <img
            alt="image"
            src="/playground_assets/oj8xbxp6wr4-300h.jpg"
            loading="eager"
            className="about-mepage-image"
          />
          <div className="about-mepage-testimonial1">
            <div className="about-mepage-container1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="about-mepage-icon"
              >
                <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
              </svg>
            </div>
            <span className="about-mepage-text02">
              Молодой и перспективный челик (нет), который продолжил познавать
              все трудности и невзгоды фронтенд разработки под покровительством
              великого и могучего Даниила Скворцова.
            </span>
            <div className="about-mepage-container2">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="about-mepage-icon2"
              >
                <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
              </svg>
            </div>
          </div>
          <span className="about-mepage-text03">Глеб Лятохов</span>
          <span className="about-mepage-text04">
            <span>Ученик сетевого лицея ИРНИТУ</span>
          </span>
          <SocialBar></SocialBar>
        </div>
        <div className="about-mepage-banner">
          <h1 className="about-mepage-text06">Ваше мнение важно!</h1>
          <span className="about-mepage-text07">
            <span>
              <span>
                Разработка сайта в одиночку непростая задача. Одному трудно
                углядеть за всеми визуальными и техническими проблемами. Отсюда
                и появляются баги.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              Если вы столкнулись с какими-либо проблемами, просьба обратиться в
              тех. поддержку.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Если у вас есть предложения по устранению проблем или у вас есть
              идеи дальнейшего развития сайта вы можете в ступить в команду
              разработчиков. Для этого вам необходимо написать админу или просто
              кликнуть по кнопке ниже.
            </span>
          </span>
          <div className="about-mepage-btn-group">
            <a
              href="https://t.me/Gleb6095"
              target="_blank"
              rel="noreferrer noopener"
              className="about-mepage-link button"
            >
              Тех. поддержка
            </a>
            <a
              href="https://t.me/+ukriZ6LJnLk2MTI6"
              target="_blank"
              rel="noreferrer noopener"
              className="about-mepage-link1 button"
            >
              Вступить в команду разработчиков
            </a>
          </div>
        </div>
      </div>
      <footer className="about-mepage-footer">
        <span className="about-mepage-footer-text">
          © 2022 Gleb Liatokhov, All Rights Reserved.
        </span>
        <div className="about-mepage-icon-group">
          <a
            href="https://t.me/Gleb6095"
            target="_blank"
            rel="noreferrer noopener"
            className="about-mepage-link2"
          >
            <Icon9 className="about-mepage-telegram-icon"></Icon9>
          </a>
          <a
            href="https://vk.com/combathelicoptermi24"
            target="_blank"
            rel="noreferrer noopener"
            className="about-mepage-link3"
          >
            <Icon10
              rootClassName="icon10-root-class-name8"
              className="about-mepage-v-k-icon"
            ></Icon10>
          </a>
          <a
            href="https://github.com/aesthetic444"
            target="_blank"
            rel="noreferrer noopener"
            className="about-mepage-link4"
          >
            <svg viewBox="0 0 1024 1024" className="about-mepage-icon4">
              <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default AboutMepage
