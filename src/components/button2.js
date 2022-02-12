import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button2.module.css'

const Button2 = (props) => {
  return (
    <div className={styles['container']}>
      <button className={` ${styles['Button']} ${projectStyles['button']} `}>
        {props.Button}
      </button>
    </div>
  )
}

Button2.defaultProps = {
  Button: 'ÐÑÐ±ÑÐ°ÑÑ Ð¼ÐµÑÑÐ¾ ',
}

Button2.propTypes = {
  Button: PropTypes.string,
}

export default Button2
