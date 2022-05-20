import React from 'react'

import PropTypes from 'prop-types'

import './text2.css'

const Text2 = (props) => {
  return (
    <div className="text2-container">
      <span className="text2-text">{props.text}</span>
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
