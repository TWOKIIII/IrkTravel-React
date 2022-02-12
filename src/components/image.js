import React from 'react'

import PropTypes from 'prop-types'

import styles from './image.module.css'

const Image = (props) => {
  return (
    <div className={styles['container']}>
      <img src={props.image_src} loading="eager" className={styles['image']} />
    </div>
  )
}

Image.defaultProps = {
  image_src:
    'https://cdn-icons.flaticon.com/png/512/5086/premium/5086470.png?token=exp=1639551676~hmac=f86e39fff0e2e37dbd217121d1dadbeb',
}

Image.propTypes = {
  image_src: PropTypes.string,
}

export default Image
