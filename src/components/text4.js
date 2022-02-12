import React from 'react'

import PropTypes from 'prop-types'

import styles from './text4.module.css'

const Text4 = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

Text4.defaultProps = {
  text: 'Ð ÐÐ°Ð¹ÐºÐ°Ð»Ðµ',
}

Text4.propTypes = {
  text: PropTypes.string,
}

export default Text4
