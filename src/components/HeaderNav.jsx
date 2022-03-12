import styles from "../views/about-mepage.module.css";
import specificStyles from './headerNav.module.css';
import {Link} from "react-router-dom";
import LogoImage from "./LogoImage";
// import Text from "./text";
// import Text1 from "./text1";
// import Text2 from "./text2";
import React from "react";


const HeaderNav = (props) => {
    const links = [{text: 'О Байкале', href: '/baikalpage'},
                   {text: 'Об Иркутске', href: '/irkutskpage'},
                   {text: 'Об авторе', href: '/about-mepage'}];
    return (
        <header className={styles['Header']}>
            <Link to="/" className={styles['navlink']}>
                <LogoImage
                    rootClassName="rootClassName8"
                    className={styles['Company-logo']}
                />
            </Link>
            <span className={styles['Company-name']}>
                <span className={styles['text']}>IrkTravel</span>
            </span>
            <nav className={styles['Nav']}>
                {links.map((link) =>
                    <Link to={link.href} className={styles['navlink2']}>
                        <div className={styles['component2']}>
                            <div className={specificStyles['container']}>
                                <span className={specificStyles['text']}>{link.text}</span>
                            </div>
                        </div>
                    </Link>
                )}
            </nav>
        </header>
    )
}

export default HeaderNav;


