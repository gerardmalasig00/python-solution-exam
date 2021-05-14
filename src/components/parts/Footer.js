import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../assets/css/Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="contacts">
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + '/logo-light.png'} alt="" />
                    </Link>
                    <h4><i class="fas fa-map-marker-alt"></i>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt.</h4>
                    <h4><i class="fas fa-phone"></i>09212702674</h4>
                    <h4><i class="fas fa-envelope"></i>gmjr49910211@gmail.com</h4>
                </div>
                <hr />
                <div className="links">
                    <ul className="items">
                        <li>About</li>
                        <li>Join Our Team</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                    <div className="items social">
                        <span><i class="fab fa-linkedin"></i></span>
                        <span><i class="fab fa-instagram"></i></span>
                        <span><i class="fab fa-twitter"></i></span>
                        <span><i class="fab fa-facebook"></i></span>
                    </div>
                </div>
                <h5>&#169; 2021 Python Solutions. All rights reserved</h5>
            </div>
        </footer>
    )
}

export default Footer
