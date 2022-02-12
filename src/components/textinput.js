import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './textinput.module.css'

const Textinput = (props) => {
  return (
    <div className={styles['container']}>
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className={` ${styles['textinput']} ${projectStyles['input']} `}
      />
    </div>
  )
}

Textinput.defaultProps = {
  textinput_placeholder: 'Email here...',
}

Textinput.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default Textinput
