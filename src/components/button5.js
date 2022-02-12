import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button5.module.css'

const Button5 = (props) => {
  return (
    <div className={styles['container']}>
      <button className={` ${styles['Button']} ${projectStyles['button']} `}>
        {props.Button}
      </button>
    </div>
  )
}

Button5.defaultProps = {
  Button: 'ÐÐ°Ð·Ð°Ð´',
}

Button5.propTypes = {
  Button: PropTypes.string,
}

export default Button5
