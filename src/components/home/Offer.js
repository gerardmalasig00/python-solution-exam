import { useState } from 'react'

import OfferService from './OfferService'
import OfferTechnology from './OfferTechnology'
import OfferIndustry from './OfferIndustry'

import '../../assets/css/home/Offer.css';

const Offer = () => {
    const [showOffer, setShowOffer] = useState('service')

    const onSelectOffer = (selected) => {
        setShowOffer(selected)
    }
    return (
        <div id="offer">
            <div className="container">
                <div className="header">
                    <h2>Who We Offer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolorum hic doloremque perspiciatis tempore id labore natus ab molestiae eaque tempora aut maxime a dignissimos unde nesciunt harum in accusamus.</p>
                </div>
                <div className="selection">
                    <button onClick={() => onSelectOffer('service')} className={showOffer === 'service' && 'active'}>Services</button>
                    <button onClick={() => onSelectOffer('technology')} className={showOffer === 'technology' && 'active'}>Technologies</button>
                    <button onClick={() => onSelectOffer('industry')} className={showOffer === 'industry' && 'active'}>Industries</button>
                </div>
                {showOffer === 'service' && <OfferService offer={showOffer} />}
                {showOffer === 'technology' && <OfferTechnology offer={showOffer} />}
                {showOffer === 'industry' && <OfferIndustry offer={showOffer} />}
            </div>
        </div>
    )
}

export default Offer
