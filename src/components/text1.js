import React from 'react'

import PropTypes from 'prop-types'

import styles from './text1.module.css'

const Text1 = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

Text1.defaultProps = {
  text: 'Об Иркутске',
}

Text1.propTypes = {
  text: PropTypes.string,
}

export default Text1
