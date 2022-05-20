import React from 'react'

import PropTypes from 'prop-types'

import './button8.css'

const Button8 = (props) => {
  return (
    <div className="button8-container">
      <button className="button8-button button">{props.Button}</button>
    </div>
  )
}

Button8.defaultProps = {
  Button: 'Назад',
}

Button8.propTypes = {
  Button: PropTypes.string,
}

export default Button8
