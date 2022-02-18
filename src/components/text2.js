import React from 'react'

import PropTypes from 'prop-types'

import styles from './text2.module.css'

const Text2 = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

Text2.defaultProps = {
  text: 'Об авторе ',
}

Text2.propTypes = {
  text: PropTypes.string,
}

export default Text2
