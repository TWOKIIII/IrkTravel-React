import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button10.module.css'

const Button10 = (props) => {
  return (
    <div className={styles['container']}>
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        {props.button}
      </button>
    </div>
  )
}

Button10.defaultProps = {
  button: 'ÐÐ¾Ð´ÑÐ¾Ð±Ð½ÐµÐµ Ð¾ ÐÐ°Ð¹ÐºÐ°Ð»Ðµ',
}

Button10.propTypes = {
  button: PropTypes.string,
}

export default Button10
