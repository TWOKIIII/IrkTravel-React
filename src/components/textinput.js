import React from 'react'

import PropTypes from 'prop-types'

import './textinput.css'

const Textinput = (props) => {
  return (
    <div className="textinput-container">
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className="textinput-textinput input"
      />
    </div>
  )
}

Textinput.defaultProps = {
  textinput_placeholder: 'Email here...',
}

Textinput.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default Textinput
