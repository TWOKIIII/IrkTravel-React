import React from 'react'

import PropTypes from 'prop-types'

import './olkhoncard.css'

const Olkhoncard = (props) => {
  return (
    <div className="olkhon card-gallery-card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Olkhonsky_District_Shamanka_Rock.jpg"
        loading="eager"
        className="olkhon card-image"
      />
      <h2 className="olkhon card-text">{props.heading}</h2>
      <span className="olkhon card-text1">{props.text}</span>
    </div>
  )
}

Olkhoncard.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading: 'Остров Ольхон',
  text: 'Крупнейший остров озера Байкал',
}

Olkhoncard.propTypes = {
  image_src: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Olkhoncard
