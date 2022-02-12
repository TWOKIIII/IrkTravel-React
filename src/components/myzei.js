import React from 'react'

import PropTypes from 'prop-types'

import styles from './myzei.module.css'

const Myzei = (props) => {
  return (
    <div
      className={` ${styles['GalleryCard']} ${styles[props.rootClassName]} `}
    >
      <img
        src="https://primamedia.ru/f/big/878/877771.jpg?af975e81b5cbd98916bc9fe45bb7db2f"
        loading="eager"
        className={styles['image']}
      />
      <h2 className={styles['text']}>{props.heading}</h2>
      <span className={styles['text1']}>{props.text}</span>
    </div>
  )
}

Myzei.defaultProps = {
  rootClassName: '',
  text: 'Ð£Ð½Ð¸ÐºÐ°Ð»ÑÐ½Ð¾Ðµ ÑÐ¾Ð±ÑÐ°Ð½Ð¸Ðµ Ð¿Ð°Ð¼ÑÑÐ½Ð¸ÐºÐ¾Ð², Ð°ÑÑÐ¸ÑÐµÐºÑÑÑÑ Ð¸ ÑÑÐ½Ð¾Ð³ÑÐ°ÑÐ¸Ð¸ XVIIâXX Ð²ÐµÐºÐ¾Ð².',
  image_src:
    'https://upload.wikimedia.org/wikipedia/commons/f/fb/%D0%A2%D0%B0%D0%BB%D1%8C%D1%86%D1%8B_%D0%BB%D0%B5%D1%82%D0%BE%D0%BC.jpg',
  heading: 'ÐÑÐ·ÐµÐ¹ Ð¢Ð°Ð»ÑÑÑ',
}

Myzei.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default Myzei
