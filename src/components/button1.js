import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button1.module.css'

const Button1 = (props) => {
  return (
    <div className={styles['container']}>
      <button className={` ${styles['Button']} ${projectStyles['button']} `}>
        {props.Button}
      </button>
    </div>
  )
}

Button1.defaultProps = {
  Button: 'ÐÑÐ±Ð¾Ñ Ð¼ÐµÑÑÐ°',
}

Button1.propTypes = {
  Button: PropTypes.string,
}

export default Button1
