import React from 'react'

import PropTypes from 'prop-types'

import styles from './olkhoncard.module.css'

const Olkhoncard = (props) => {
  return (
    <div className={styles['GalleryCard']}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Olkhonsky_District_Shamanka_Rock.jpg"
        loading="eager"
        className={styles['image']}
      />
      <h2 className={styles['text']}>{props.heading}</h2>
      <span className={styles['text1']}>{props.text}</span>
    </div>
  )
}

Olkhoncard.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading: 'ÐÑÑÑÐ¾Ð² ÐÐ»ÑÑÐ¾Ð½',
  text: 'ÐÑÑÐ¿Ð½ÐµÐ¹ÑÐ¸Ð¹ Ð¾ÑÑÑÐ¾Ð² Ð¾Ð·ÐµÑÐ° ÐÐ°Ð¹ÐºÐ°Ð»',
}

Olkhoncard.propTypes = {
  image_src: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Olkhoncard
