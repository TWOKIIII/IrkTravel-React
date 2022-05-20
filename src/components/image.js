import React from 'react'

import PropTypes from 'prop-types'

import './image.css'

const Image = (props) => {
  return (
    <div className="image-container">
      <img src={props.image_src} loading="eager" className="image-image" />
    </div>
  )
}

Image.defaultProps = {
  image_src:
    'https://cdn-icons.flaticon.com/png/512/5086/premium/5086470.png?token=exp=1639551676~hmac=f86e39fff0e2e37dbd217121d1dadbeb',
}

Image.propTypes = {
  image_src: PropTypes.string,
}

export default Image
