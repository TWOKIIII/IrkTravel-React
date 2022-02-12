import React from 'react'

import PropTypes from 'prop-types'

import styles from './text6.module.css'

const Text6 = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

Text6.defaultProps = {
  text: 'ÐÐ± Ð°Ð²ÑÐ¾ÑÐµ ',
}

Text6.propTypes = {
  text: PropTypes.string,
}

export default Text6
