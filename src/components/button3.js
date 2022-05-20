import React from 'react'

import PropTypes from 'prop-types'

import './button3.css'

const Button3 = (props) => {
  return (
    <div className={`button3-container ${props.rootClassName} `}>
      <button className="button3-button button">{props.Button}</button>
    </div>
  )
}

Button3.defaultProps = {
  rootClassName: '',
  Button: 'Назад',
}

Button3.propTypes = {
  rootClassName: PropTypes.string,
  Button: PropTypes.string,
}

export default Button3
