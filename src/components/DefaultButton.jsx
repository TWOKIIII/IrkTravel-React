import React from 'react'

import projectStyles from '../style.module.css'
import styles from './DefaultButton.module.css'

const DefaultButton = (props) => {
    return (
        <div className={styles['container']}>
            <button className={` ${styles['button']} ${projectStyles['button']} `}>
                {props.name}
            </button>
        </div>
    )
}


export default DefaultButton
