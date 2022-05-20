import React from 'react'

import PropTypes from 'prop-types'

import './container.css'

const Container = (props) => {
  return (
    <div className="container-container">
      <div className="container-container1">
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="container-textinput input"
        />
      </div>
      <button className="container-button button">{props.button}</button>
    </div>
  )
}

Container.defaultProps = {
  textinput_placeholder: 'Email here...',
  button: 'Subscribe',
}

Container.propTypes = {
  textinput_placeholder: PropTypes.string,
  button: PropTypes.string,
}

export default Container
