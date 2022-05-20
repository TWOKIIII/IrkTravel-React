import React from 'react'

import PropTypes from 'prop-types'

import './button1.css'

const Button1 = (props) => {
  return (
    <div className={`button1-container ${props.rootClassName} `}>
      <button className="button1-button button">{props.Button}</button>
    </div>
  )
}

Button1.defaultProps = {
  Button: 'Выбрать место отдыха',
  rootClassName: '',
}

Button1.propTypes = {
  Button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Button1
