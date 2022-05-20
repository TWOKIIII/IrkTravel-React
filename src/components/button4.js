import React from 'react'

import PropTypes from 'prop-types'

import './button4.css'

const Button4 = (props) => {
  return (
    <div className={`button4-container ${props.rootClassName} `}>
      <button className="button4-button button">{props.Button}</button>
    </div>
  )
}

Button4.defaultProps = {
  rootClassName: '',
  Button: 'Назад',
}

Button4.propTypes = {
  rootClassName: PropTypes.string,
  Button: PropTypes.string,
}

export default Button4
