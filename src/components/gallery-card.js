import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card.css'

const GalleryCard = (props) => {
  return (
    <div className="gallery-card-gallery-card">
      <img src={props.image_src} className="gallery-card-image" />
      <h2 className="gallery-card-text">{props.heading}</h2>
      <span className="gallery-card-text1">{props.text}</span>
    </div>
  )
}

GalleryCard.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Жемчужина и гордость Сибири',
  heading: 'Озеро Байкал',
}

GalleryCard.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default GalleryCard
