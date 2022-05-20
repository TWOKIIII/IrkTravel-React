import React from 'react'

import PropTypes from 'prop-types'

import './textinput1.css'

const Textinput1 = (props) => {
  return (
    <div className="textinput1-container">
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className="textinput1-textinput input"
      />
    </div>
  )
}

Textinput1.defaultProps = {
  textinput_placeholder: 'Email here...',
}

Textinput1.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default Textinput1
