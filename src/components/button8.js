import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button8.module.css'

const Button8 = (props) => {
  return (
    <div className={styles['container']}>
      <button className={` ${styles['Button']} ${projectStyles['button']} `}>
        {props.Button}
      </button>
    </div>
  )
}

Button8.defaultProps = {
  Button: 'ÐÐ°Ð·Ð°Ð´',
}

Button8.propTypes = {
  Button: PropTypes.string,
}

export default Button8
