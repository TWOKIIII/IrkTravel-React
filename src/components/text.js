import React from 'react'

import PropTypes from 'prop-types'

import styles from './text.module.css'

const Text = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

Text.defaultProps = {
  text: 'О Байкале',
}

Text.propTypes = {
  text: PropTypes.string,
}

export default Text
