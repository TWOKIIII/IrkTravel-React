import React from 'react'

import PropTypes from 'prop-types'

import './container1.css'

const Container1 = (props) => {
  return (
    <div className="container1-container">
      <div className="container1-container1">
        <div className="container1-container2">
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="container1-textinput input"
          />
        </div>
      </div>
      <div className="container1-container3">
        <button className="container1-button button">
          <span>
            <span>Отправить</span>
            <span></span>
          </span>
        </button>
      </div>
    </div>
  )
}

Container1.defaultProps = {
  textinput_placeholder: 'Email here...',
}

Container1.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default Container1
