import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Icon8 from '../components/icon8'
import Icon9 from '../components/icon9'
import Icon10 from '../components/icon10'
import styles from './home.module.css'
import DefaultButton from "../components/DefaultButton";
import HeaderNav from "../components/HeaderNav";

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>IrkTravel</title>
        <meta property="og:title" content="IrkTravel" />
      </Helmet>
      <HeaderNav />
      <div className={styles['Body']}>
        <div className={styles['container1']}>
          <h1 className={styles['text02']}>Сибирские красоты</h1>
          <span className={styles['text03']}>
            <span>
              Иркутская область, несмотря на удаленность от центральных
              регионов, является важной составляющей туристического кластера
              России. В первую очередь, она становится притягательной благодаря
              своим природным богатствам, благоприятной экологической
              обстановке, уникальным водным ресурсам. Немалое сделано за
              последние годы для развития экскурсионного туризма и
              инфраструктуры, чтобы отдых в суровом краю оказался комфортным и
              неповторимым. Среди основных туристических направлений можно
              выделить: пешие маршруты по тайге, сплав по сибирским рекам,
              семейный отдых на берегу Байкала, вертолетные экскурсии,
              бальнеологическое лечение, рыбалка и охота. Немалой популярностью
              пользуется автомобильный туризм – в Иркутской области
              разветвленная сеть автодорог, связанных с риском и сложностями,
              что привлекает экстремалов к самостоятельному путешествию по
              тайге. Областная столица Иркутск – это древний сибирский город,
              где история северных народов тесно переплетена с русскими
              национальными традициями. Основная достопримечательность Иркутской
              области – озеро Байкал. Для современного отдыха на Байкале созданы
              все условия. Практически все южное побережье озера застроено
              базами отдыха, коттеджами, пансионатами. Чистый воздух, рыбалка,
              парусный спорт, уникальная природа являются главной целью для
              путешественников. Отдельное направление туризма – это поездка на
              остров Ольхон. Мягкий климат и пологие берега этой местности
              сделали Ольхон местной здравницей и излюбленным местом отдыха.
              Остров тесно связан с традициями буддизма и шаманизма, имеет
              множество древних культурно-исторических памятников. Поселок
              Листвянка имеет многовековую историю. Здесь есть
              Архитектурно-этнографический музей «Тальцы» под открытым небом,
              который занимает 67 га и насчитывает около тысячи экспонатов,
              включая строения. Из Листвянки можно совершить экскурсию на катере
              до легендарной скалы Шаман-камень, которую якобы бросил
              отец-Байкал вслед своей убегающей дочери Ангаре.
              Ну а на данном сайте собраны самые популярные и красивые места
              нашей области, посетить которые вы можете в любое время!
            </span>
          </span>
          <div className={styles['BtnGroup']}>
            <Link to="/choosepage" className={styles['navlink4']}>
              <DefaultButton className={styles['home']} name={"Выбор места"} />
            </Link>
            <Link to="/baikalpage" className={styles['navlink5']}>
              <DefaultButton className={styles['home']} name={"Подробнее о Байкале"} />
            </Link>
          </div>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/%D0%9E%D0%B7%D0%B5%D1%80%D0%BE_%D0%91%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB%2C_%D0%91%D1%83%D1%85%D1%82%D0%B0_%D0%BF%D0%B5%D1%81%D1%87%D0%B0%D0%BD%D0%B0%D1%8F..jpg" className={styles['Baikal-image']} />
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
                rootClassName="rootClassName"
                className={styles['VK-icon']}
            ></Icon10>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
