import React from 'react'

import PropTypes from 'prop-types'

import './text5.css'

const Text5 = (props) => {
  return (
    <div className="text5-container">
      <span className="text5-text">{props.text}</span>
    </div>
  )
}

Text5.defaultProps = {
  text: 'Об Иркутске',
}

Text5.propTypes = {
  text: PropTypes.string,
}

export default Text5
