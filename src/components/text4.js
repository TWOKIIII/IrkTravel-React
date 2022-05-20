import React from 'react'

import PropTypes from 'prop-types'

import './text4.css'

const Text4 = (props) => {
  return (
    <div className="text4-container">
      <span className="text4-text">{props.text}</span>
    </div>
  )
}

Text4.defaultProps = {
  text: 'О Байкале',
}

Text4.propTypes = {
  text: PropTypes.string,
}

export default Text4
