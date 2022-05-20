import React from 'react'

import PropTypes from 'prop-types'

import './text.css'

const Text = (props) => {
  return (
    <div className="text-container">
      <span className="text-text">{props.text}</span>
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
