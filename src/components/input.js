import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './input.module.css'

const Input = (props) => {
  return (
    <div className={styles['container']}>
      <input
        type="text"
        placeholder={props.Input_placeholder}
        className={` ${styles['Input']} ${projectStyles['input']} `}
      />
    </div>
  )
}

Input.defaultProps = {
  Input_placeholder: 'Email here...',
}

Input.propTypes = {
  Input_placeholder: PropTypes.string,
}

export default Input
