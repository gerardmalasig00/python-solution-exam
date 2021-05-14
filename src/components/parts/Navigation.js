import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/Navigation.css'

const Navigation = () => {
    const [showClass, setShowClass] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const onToggle = () => {
        setShowClass(!showClass)
    }

    const onScrollChange = () => {
        if (window.scrollY > 0) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    window.addEventListener('scroll', onScrollChange)

    return (
        <nav className={`${scrolled ? 'on-scroll' : ''}`}>
            <div className="container">
                <div className="nav-brand">
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + '/logo-light.png'} alt="" />
                    </Link>
                </div>
                <div className={`hamburger ${showClass ? 'show' : ''}`} onClick={() => onToggle()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`nav-menu ${showClass ? 'show' : ''}`} onClick={() => onToggle()}>
                    <ul>
                        <li className="nav-items">
                            <a >Services</a>
                        </li>
                        <li className="nav-items">
                            <a >Work</a>
                        </li>
                        <li className="nav-items">
                            <Link to="/approach">Approach</Link>
                        </li>
                        <li className="nav-items">
                            <a >Insights</a>
                        </li>
                        <li className="nav-items">
                            <a >Company</a>
                        </li>
                        <li className="contact-button">
                            <Link to="/contact">Get in Touch</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
