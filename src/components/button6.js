import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button6.module.css'

const Button6 = (props) => {
  return (
    <div className={styles['container']}>
      <button className={` ${styles['Button']} ${projectStyles['button']} `}>
        {props.Button}
      </button>
    </div>
  )
}

Button6.defaultProps = {
  Button: 'ÐÐ°Ð·Ð°Ð´',
}

Button6.propTypes = {
  Button: PropTypes.string,
}

export default Button6
