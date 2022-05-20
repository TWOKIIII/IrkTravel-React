import React from 'react'

import PropTypes from 'prop-types'

import './button10.css'

const Button10 = (props) => {
  return (
    <div className="button10-container">
      <button className="button10-button button">{props.button}</button>
    </div>
  )
}

Button10.defaultProps = {
  button: 'Подробнее о Байкале',
}

Button10.propTypes = {
  button: PropTypes.string,
}

export default Button10
