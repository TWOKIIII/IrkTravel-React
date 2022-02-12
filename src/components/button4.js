import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button4.module.css'

const Button4 = (props) => {
  return (
    <div className={styles['container']}>
      <button className={` ${styles['Button']} ${projectStyles['button']} `}>
        {props.Button}
      </button>
    </div>
  )
}

Button4.defaultProps = {
  Button: 'ÐÐ°Ð·Ð°Ð´',
}

Button4.propTypes = {
  Button: PropTypes.string,
}

export default Button4
