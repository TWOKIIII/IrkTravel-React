import React from 'react'

import PropTypes from 'prop-types'

import styles from './skalacard.module.css'

const Skalacard = (props) => {
  return (
    <div className={styles['GalleryCard']}>
      <img
        src="https://www.baikal-olkhon.ru/pic/ee5ffe600301cf039f9d98b5c09b1d06/shamanka_leto5.jpg"
        loading="eager"
        className={styles['image']}
      />
      <h2 className={styles['text']}>{props.heading}</h2>
      <span className={styles['text1']}>{props.text}</span>
    </div>
  )
}

Skalacard.defaultProps = {
  text: 'ÐÐ·Ð²ÐµÑÑÐ½Ð¾Ðµ Ð¼ÐµÑÑÐ¾ ÑÐ¸Ð»Ñ ÐÐ°Ð¹ÐºÐ°Ð»Ð°',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading: 'Ð¡ÐºÐ°Ð»Ð° Ð¨Ð°Ð¼Ð°Ð½ÐºÐ°',
}

Skalacard.propTypes = {
  text: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default Skalacard
