import React from 'react'

import PropTypes from 'prop-types'

import './text1.css'

const Text1 = (props) => {
  return (
    <div className="text1-container">
      <span className="text1-text">{props.text}</span>
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
