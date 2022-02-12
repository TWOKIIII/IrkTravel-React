import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './container.module.css'

const Container = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className={` ${styles['textinput']} ${projectStyles['input']} `}
        />
      </div>
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        {props.button}
      </button>
    </div>
  )
}

Container.defaultProps = {
  textinput_placeholder: 'Email here...',
  button: 'Subscribe',
}

Container.propTypes = {
  textinput_placeholder: PropTypes.string,
  button: PropTypes.string,
}

export default Container
