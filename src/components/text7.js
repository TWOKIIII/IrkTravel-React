import React from 'react'

import PropTypes from 'prop-types'

import './text7.css'

const Text7 = (props) => {
  return (
    <div className="text7-container">
      <span className="text7-text">{props.text}</span>
    </div>
  )
}

Text7.defaultProps = {
  text: 'О проекте',
}

Text7.propTypes = {
  text: PropTypes.string,
}

export default Text7
