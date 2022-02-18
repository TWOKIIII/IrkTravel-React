import React from 'react'

import PropTypes from 'prop-types'

import styles from './text3.module.css'

const Text3 = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

Text3.defaultProps = {
  text: 'О проекте',
}

Text3.propTypes = {
  text: PropTypes.string,
}

export default Text3
