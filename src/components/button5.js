import React from 'react'

import PropTypes from 'prop-types'

import './button5.css'

const Button5 = (props) => {
  return (
    <div className="button5-container">
      <button className="button5-button button">{props.Button}</button>
    </div>
  )
}

Button5.defaultProps = {
  Button: 'Назад',
}

Button5.propTypes = {
  Button: PropTypes.string,
}

export default Button5
