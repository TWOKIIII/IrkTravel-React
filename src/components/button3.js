import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button3.module.css'

const Button3 = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button className={` ${styles['Button']} ${projectStyles['button']} `}>
        {props.Button}
      </button>
    </div>
  )
}

Button3.defaultProps = {
  rootClassName: '',
  Button: 'ÐÐ°Ð·Ð°Ð´',
}

Button3.propTypes = {
  rootClassName: PropTypes.string,
  Button: PropTypes.string,
}

export default Button3
