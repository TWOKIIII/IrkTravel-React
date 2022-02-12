import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button7.module.css'

const Button7 = (props) => {
  return (
    <div className={styles['container']}>
      <button className={` ${styles['Button']} ${projectStyles['button']} `}>
        {props.Button}
      </button>
    </div>
  )
}

Button7.defaultProps = {
  Button: 'ÐÐ°Ð·Ð°Ð´',
}

Button7.propTypes = {
  Button: PropTypes.string,
}

export default Button7
