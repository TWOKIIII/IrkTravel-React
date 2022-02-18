import React from 'react'

import PropTypes from 'prop-types'

import styles from './text5.module.css'

const Text5 = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

Text5.defaultProps = {
  text: 'Об Иркутске',
}

Text5.propTypes = {
  text: PropTypes.string,
}

export default Text5
