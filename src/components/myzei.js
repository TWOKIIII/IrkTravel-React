import React from 'react'

import PropTypes from 'prop-types'

import './myzei.css'

const Myzei = (props) => {
  return (
    <div className={`myzei-gallery-card ${props.rootClassName} `}>
      <img
        src="https://primamedia.ru/f/big/878/877771.jpg?af975e81b5cbd98916bc9fe45bb7db2f"
        loading="eager"
        className="myzei-image"
      />
      <h2 className="myzei-text">{props.heading}</h2>
      <span className="myzei-text1">{props.text}</span>
    </div>
  )
}

Myzei.defaultProps = {
  rootClassName: '',
  text: 'Уникальное собрание памятников, архитектуры и этнографии XVII—XX веков.',
  image_src:
    'https://upload.wikimedia.org/wikipedia/commons/f/fb/%D0%A2%D0%B0%D0%BB%D1%8C%D1%86%D1%8B_%D0%BB%D0%B5%D1%82%D0%BE%D0%BC.jpg',
  heading: 'Музей Тальцы',
}

Myzei.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default Myzei
