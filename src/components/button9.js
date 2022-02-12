import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button9.module.css'

const Button9 = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button className={` ${styles['Button']} ${projectStyles['button']} `}>
        {props.Button}
      </button>
    </div>
  )
}

Button9.defaultProps = {
  Button: 'ÐÐ¾Ð·Ð²ÑÐ°Ñ Ðº Ð²ÑÐ±Ð¾ÑÑ Ð¼ÐµÑÑÐ°',
  rootClassName: '',
}

Button9.propTypes = {
  Button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Button9
