import React from 'react'

import PropTypes from 'prop-types'

import './skalacard.css'

const Skalacard = (props) => {
  return (
    <div className="skala card-gallery-card">
      <img
        src="https://www.baikal-olkhon.ru/pic/ee5ffe600301cf039f9d98b5c09b1d06/shamanka_leto5.jpg"
        loading="eager"
        className="skala card-image"
      />
      <h2 className="skala card-text">{props.heading}</h2>
      <span className="skala card-text1">{props.text}</span>
    </div>
  )
}

Skalacard.defaultProps = {
  text: 'Известное место силы Байкала',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading: 'Скала Шаманка',
}

Skalacard.propTypes = {
  text: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default Skalacard
