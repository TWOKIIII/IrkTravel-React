import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Image1 from '../components/image1'
import Text from '../components/text'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Baikalcard from '../components/baikalcard'
import Irkutskcard from '../components/irkutskcard'
import Olkhoncard from '../components/olkhoncard'
import Trainroadcard from '../components/trainroadcard'
import Myzei from '../components/myzei'
import Skalacard from '../components/skalacard'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import './choosepage.css'

const Choosepage = (props) => {
  return (
    <div className="choosepage-container">
      <Helmet>
        <title>Choose page - IrkTravel</title>
        <meta property="og:title" content="Choose page - IrkTravel" />
      </Helmet>
      <header className="choosepage-header">
        <Link to="/" className="choosepage-navlink">
          <Image1
            logo="https://cdn-icons-png.flaticon.com/512/932/932989.png"
            rootClassName="image1-root-class-name1"
            className="choosepage-company-logo"
          ></Image1>
        </Link>
        <span className="choosepage-company-name">
          <span className="choosepage-text">IrkTrave</span>
          <span>l</span>
        </span>
        <nav className="choosepage-nav">
          <Link to="/baikalpage" className="choosepage-navlink01">
            <Text className="choosepage-component"></Text>
          </Link>
          <Link to="/irkutskpage" className="choosepage-navlink02">
            <Text1 className="choosepage-component1"></Text1>
          </Link>
          <Link to="/about-mepage" className="choosepage-navlink03">
            <Text2 className="choosepage-component2"></Text2>
          </Link>
        </nav>
      </header>
      <div className="choosepage-body">
        <div className="choosepage-gallery">
          <Link to="/baikalpage">
            <Baikalcard
              rootClassName="baikalcard-root-class-name"
              className="choosepage-component3"
            ></Baikalcard>
          </Link>
          <Link to="/irkutskpage">
            <Irkutskcard className="choosepage-component4"></Irkutskcard>
          </Link>
          <Link to="/olkhonpage">
            <Olkhoncard className="choosepage-component5"></Olkhoncard>
          </Link>
          <Link to="/k-b-j-dpage">
            <Trainroadcard className="choosepage-k-b-j-d-card"></Trainroadcard>
          </Link>
          <Link to="/myzeipage">
            <Myzei
              text="Музей памятников, архитектуры и этнографии."
              rootClassName="myzei-root-class-name"
              className="choosepage-myzei-card"
            ></Myzei>
          </Link>
          <Link to="/skalapage">
            <Skalacard className="choosepage-mis-xoboi-card"></Skalacard>
          </Link>
        </div>
      </div>
      <footer className="choosepage-footer">
        <span className="choosepage-footer-text">
          © 2022 Gleb Liatokhov, All Rights Reserved.
        </span>
        <div className="choosepage-icon-group">
          <a
            href="https://t.me/Gleb6095"
            target="_blank"
            rel="noreferrer noopener"
            className="choosepage-link"
          >
            <Icon9 className="choosepage-telegram-icon"></Icon9>
          </a>
          <a
            href="https://vk.com/combathelicoptermi24"
            target="_blank"
            rel="noreferrer noopener"
            className="choosepage-link1"
          >
            <Icon10
              rootClassName="icon10-root-class-name1"
              className="choosepage-v-k-icon"
            ></Icon10>
          </a>
          <a
            href="https://github.com/aesthetic444"
            target="_blank"
            rel="noreferrer noopener"
            className="choosepage-link2"
          >
            <svg viewBox="0 0 1024 1024" className="choosepage-icon">
              <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Choosepage
