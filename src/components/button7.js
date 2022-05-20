import React from 'react'

import PropTypes from 'prop-types'

import './button7.css'

const Button7 = (props) => {
  return (
    <div className="button7-container">
      <button className="button7-button button">{props.Button}</button>
    </div>
  )
}

Button7.defaultProps = {
  Button: 'Назад',
}

Button7.propTypes = {
  Button: PropTypes.string,
}

export default Button7
