import React from 'react'

import PropTypes from 'prop-types'

import './image1.css'

const Image1 = (props) => {
  return (
    <div className={`image1-container ${props.rootClassName} `}>
      <div className="image1-container1">
        <img src={props.logo} loading="eager" className="image1-image" />
      </div>
    </div>
  )
}

Image1.defaultProps = {
  logo: 'https://cdn-icons.flaticon.com/png/512/5086/premium/5086470.png?token=exp=1640399633~hmac=94947489bb14290b351941a4b05e750e',
  rootClassName: '',
}

Image1.propTypes = {
  logo: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Image1
