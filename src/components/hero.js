import React from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className={`hero-hero ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="eager"
        className="hero-image"
      />
      <div className="hero-container">
        <h1 className="hero-text">{props.heading}</h1>
        <h2 className="hero-text1">{props.heading1}</h2>
        <div className="hero-btn-group">
          <button className="hero-button button">{props.button}</button>
          <button className="hero-button1 button">{props.button1}</button>
        </div>
        <span className="hero-text2">
          <span className="hero-text3">
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
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  button1: 'Learn More',
  heading1: 'Тогда вы попали по адресу.',
  button: 'Get Started',
  heading: 'Не знаете куда поехать?',
  image_src: '/playground_assets/irkutsk-1-1200w.jpg',
  image_alt: 'image',
  rootClassName: '',
}

Hero.propTypes = {
  button1: PropTypes.string,
  heading1: PropTypes.string,
  button: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hero
