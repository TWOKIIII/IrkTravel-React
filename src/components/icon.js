import React from 'react'

import './icon.css'

const Icon = (props) => {
  return (
    <div className="icon-container">
      <a
        href="https://t.me/Gleb6095"
        target="_blank"
        rel="noreferrer noopener"
        className="icon-link"
      >
        <svg viewBox="0 0 1024 1024" className="icon-icon">
          <path d="M512 0c-282.8 0-512 229.2-512 512s229.2 512 512 512 512-229.2 512-512-229.2-512-512-512zM763.6 351l-84 395.8c-5.8 28.2-22.8 34.8-46.4 21.8l-128-94.6-61.4 59.8c-7.2 7-12.8 12.8-25.6 12.8-16.6 0-13.8-6.2-19.4-22l-43.6-143.2-126.6-39.4c-27.4-8.4-27.6-27.2 6.2-40.6l493.2-190.4c22.4-10.2 44.2 5.4 35.6 40z"></path>
        </svg>
      </a>
    </div>
  )
}

export default Icon
