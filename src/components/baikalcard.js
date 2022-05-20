import React from 'react'

import PropTypes from 'prop-types'

import './baikalcard.css'

const Baikalcard = (props) => {
  return (
    <div className={`baikal card-gallery-card ${props.rootClassName} `}>
      <img
        src="https://cs10.pikabu.ru/post_img/2018/12/01/3/1543634349150333133.jpg"
        loading="eager"
        className="baikal card-image"
      />
      <h2 className="baikal card-text">{props.title}</h2>
      <span className="baikal card-text1">{props.subtitle}</span>
    </div>
  )
}

Baikalcard.defaultProps = {
  image_alt: 'image',
  title: 'Озеро Байкал',
  rootClassName: '',
  image_src1:
    'https://geocenter.info/uploads/publication/94e4eee8ba9b1b41c8738b6218554686.jpg',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  subtitle: 'Жемчужина и гордость Сибири',
}

Baikalcard.propTypes = {
  image_alt: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Baikalcard
