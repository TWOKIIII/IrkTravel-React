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
  heading: 'Остров Ольхон',
  text: 'Крупнейший остров озера Байкал',
}

Olkhoncard.propTypes = {
  image_src: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Olkhoncard
