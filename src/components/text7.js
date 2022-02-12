import React from 'react'

import PropTypes from 'prop-types'

import styles from './text7.module.css'

const Text7 = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

Text7.defaultProps = {
  text: 'Ð Ð¿ÑÐ¾ÐµÐºÑÐµ',
}

Text7.propTypes = {
  text: PropTypes.string,
}

export default Text7
