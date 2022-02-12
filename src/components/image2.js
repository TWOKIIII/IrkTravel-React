import React from 'react'

import PropTypes from 'prop-types'

import styles from './image2.module.css'

const Image2 = (props) => {
  return (
    <div className={styles['container']}>
      <img
        src="https://cdn-icons.flaticon.com/png/512/5086/premium/5086470.png?token=exp=1640356628~hmac=3b9647938ebf3599af6646e481d1c9c2"
        loading="eager"
        className={styles['image']}
      />
    </div>
  )
}

Image2.defaultProps = {
  image_src:
    'https://cdn-icons.flaticon.com/png/512/5086/premium/5086470.png?token=exp=1640356628~hmac=3b9647938ebf3599af6646e481d1c9c2',
}

Image2.propTypes = {
  image_src: PropTypes.string,
}

export default Image2
