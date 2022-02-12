import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './textinput1.module.css'

const Textinput1 = (props) => {
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

Textinput1.defaultProps = {
  textinput_placeholder: 'Email here...',
}

Textinput1.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default Textinput1
