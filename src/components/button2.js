import React from 'react'

import PropTypes from 'prop-types'

import './button2.css'

const Button2 = (props) => {
  return (
    <div className="button2-container">
      <button className="button2-button button">{props.Button}</button>
    </div>
  )
}

Button2.defaultProps = {
  Button: 'Выбрать место ',
}

Button2.propTypes = {
  Button: PropTypes.string,
}

export default Button2
