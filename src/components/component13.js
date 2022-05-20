import React from 'react'

import PropTypes from 'prop-types'

import './component13.css'

const Component13 = (props) => {
  return (
    <div className="component13-container">
      <button className="component13-button button">{props.button}</button>
    </div>
  )
}

Component13.defaultProps = {
  button: '',
}

Component13.propTypes = {
  button: PropTypes.string,
}

export default Component13
