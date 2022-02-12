import React from 'react'

import PropTypes from 'prop-types'

import styles from './irkutskcard.module.css'

const Irkutskcard = (props) => {
  return (
    <div className={styles['GalleryCard']}>
      <img
        src="https://img.geliophoto.com/irkutsk2021/01_irkutsk2021.jpg"
        loading="eager"
        className={styles['image']}
      />
      <h2 className={styles['text']}>{props.heading}</h2>
      <span className={styles['text1']}>{props.text}</span>
    </div>
  )
}

Irkutskcard.defaultProps = {
  heading: 'ÐÐ¾ÑÐ¾Ð´ ÐÑÐºÑÑÑÐº',
  text: 'ÐÐ´Ð¼Ð¸Ð½Ð¸ÑÑÑÐ°ÑÐ¸Ð²Ð½ÑÐ¹ ÑÐµÐ½ÑÑ ÐÑÐºÑÑÑÐºÐ¾Ð¹ Ð¾Ð±Ð»Ð°ÑÑÐ¸',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Irkutskcard.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default Irkutskcard
