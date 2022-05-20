import React from 'react'

import PropTypes from 'prop-types'

import './text3.css'

const Text3 = (props) => {
  return (
    <div className="text3-container">
      <span className="text3-text">{props.text}</span>
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
