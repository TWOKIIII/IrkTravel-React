import React from 'react'

import PropTypes from 'prop-types'

import styles from './image1.module.css'

const Image1 = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <img src={props.logo} loading="eager" className={styles['image']} />
      </div>
    </div>
  )
}

Image1.defaultProps = {
  logo: 'https://cdn-icons.flaticon.com/png/512/5086/premium/5086470.png?token=exp=1640399633~hmac=94947489bb14290b351941a4b05e750e',
  rootClassName: '',
}

Image1.propTypes = {
  logo: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Image1
