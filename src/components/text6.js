import React from 'react'

import PropTypes from 'prop-types'

import './text6.css'

const Text6 = (props) => {
  return (
    <div className="text6-container">
      <span className="text6-text">{props.text}</span>
    </div>
  )
}

Text6.defaultProps = {
  text: 'Об авторе ',
}

Text6.propTypes = {
  text: PropTypes.string,
}

export default Text6
