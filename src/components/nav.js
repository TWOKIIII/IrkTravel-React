import React from 'react'

import PropTypes from 'prop-types'

import './nav.css'

const Nav = (props) => {
  return (
    <nav className="nav-nav">
      <span className="nav-text">{props.text}</span>
      <span className="nav-text1">{props.text1}</span>
      <span className="nav-text2">{props.text2}</span>
      <span className="nav-text3">{props.text3}</span>
    </nav>
  )
}

Nav.defaultProps = {
  text1: 'Features',
  text2: 'Pricing',
  text3: 'Team',
  text: 'About',
}

Nav.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
}

export default Nav
