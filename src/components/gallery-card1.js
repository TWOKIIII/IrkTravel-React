import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card1.css'

const GalleryCard1 = (props) => {
  return (
    <div className="gallery-card1-gallery-card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fb/%D0%A2%D0%B0%D0%BB%D1%8C%D1%86%D1%8B_%D0%BB%D0%B5%D1%82%D0%BE%D0%BC.jpg"
        className="gallery-card1-image"
      />
      <h2 className="gallery-card1-text">{props.heading}</h2>
      <span className="gallery-card1-text1">{props.text}</span>
    </div>
  )
}

GalleryCard1.defaultProps = {
  text: 'Уникальное собрание памятников, архитектуры и этнографии.',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading: 'Музей Тальцы',
}

GalleryCard1.propTypes = {
  text: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default GalleryCard1
