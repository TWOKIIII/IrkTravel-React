import React from 'react'

import projectStyles from '../style.module.css'
import styles from './button12.module.css'

const Button12 = () => {
  return (
    <div className={styles['container']}>
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        <span>
          <span>ÐÑÐ¿ÑÐ°Ð²Ð¸ÑÑ</span>
          <span></span>
        </span>
      </button>
    </div>
  )
}

export default Button12
