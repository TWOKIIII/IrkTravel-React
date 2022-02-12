import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './container1.module.css'

const Container1 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className={` ${styles['textinput']} ${projectStyles['input']} `}
          />
        </div>
      </div>
      <div className={styles['container3']}>
        <button className={` ${styles['button']} ${projectStyles['button']} `}>
          <span>
            <span>ÐÑÐ¿ÑÐ°Ð²Ð¸ÑÑ</span>
            <span></span>
          </span>
        </button>
      </div>
    </div>
  )
}

Container1.defaultProps = {
  textinput_placeholder: 'Email here...',
}

Container1.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default Container1
