import React from 'react'

import PropTypes from 'prop-types'

import styles from './gallery-card.module.css'

const GalleryCard = (props) => {
  return (
    <div className={styles['GalleryCard']}>
      <img src={props.image_src} className={styles['image']} />
      <h2 className={styles['text']}>{props.heading}</h2>
      <span className={styles['text1']}>{props.text}</span>
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
