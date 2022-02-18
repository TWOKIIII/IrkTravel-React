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
  heading: 'Город Иркутск',
  text: 'Административный центр Иркутской области',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Irkutskcard.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default Irkutskcard
