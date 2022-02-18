import React from 'react'

import PropTypes from 'prop-types'

import styles from './LogoImage.module.css'

const LogoImage = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <img src={props.logo} loading="eager" className={styles['image']} />
      </div>
    </div>
  )
}

LogoImage.defaultProps = {
  logo: 'https://cdn-icons-png.flaticon.com/512/932/932989.png',
  rootClassName: '',
}

LogoImage.propTypes = {
  logo: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default LogoImage
