import React from 'react'

import PropTypes from 'prop-types'

import './button6.css'

const Button6 = (props) => {
  return (
    <div className="button6-container">
      <button className="button6-button button">{props.Button}</button>
    </div>
  )
}

Button6.defaultProps = {
  Button: 'Назад',
}

Button6.propTypes = {
  Button: PropTypes.string,
}

export default Button6
