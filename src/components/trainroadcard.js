import React from 'react'

import PropTypes from 'prop-types'

import './trainroadcard.css'

const Trainroadcard = (props) => {
  return (
    <div className="train road card-gallery-card">
      <img
        src="https://baikaltravelclub.ru/upload/resize_cache/iblock/7d9/900_600_1/7d9e9a9969bbf403c32c4c26467908d1.jpg"
        loading="eager"
        className="train road card-image"
      />
      <h2 className="train road card-text">{props.heading}</h2>
      <span className="train road card-text1">{props.text}</span>
    </div>
  )
}

Trainroadcard.defaultProps = {
  text: 'Кругобайкальская железная дорога',
  heading: 'КБЖД',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Trainroadcard.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
}

export default Trainroadcard
