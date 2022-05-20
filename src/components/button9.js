import React from 'react'

import PropTypes from 'prop-types'

import './button9.css'

const Button9 = (props) => {
  return (
    <div className={`button9-container ${props.rootClassName} `}>
      <button className="button9-button button">{props.Button}</button>
    </div>
  )
}

Button9.defaultProps = {
  Button: 'Возврат к выбору места',
  rootClassName: '',
}

Button9.propTypes = {
  Button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Button9
