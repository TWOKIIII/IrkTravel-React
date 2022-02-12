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
  text: 'ÐÐµÐ¼ÑÑÐ¶Ð¸Ð½Ð° Ð¸ Ð³Ð¾ÑÐ´Ð¾ÑÑÑ Ð¡Ð¸Ð±Ð¸ÑÐ¸',
  heading: 'ÐÐ·ÐµÑÐ¾ ÐÐ°Ð¹ÐºÐ°Ð»',
}

GalleryCard.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default GalleryCard
