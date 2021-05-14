
const OfferTechnology = ({ offer }) => {
    return (
        <div className={`card-grid ${offer === 'technology' && 'show'} `}>
            <div className="card">
                <span>icon</span>
                <h3>Mobile App Development</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores maxime adipisci, numquam sunt quod similique?</p>
                <button>View More &rarr;</button>
            </div>
            <div className="card">
                <span>icon</span>
                <h3>It Consulting</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores maxime adipisci, numquam sunt quod similique?</p>
                <button>View More &rarr;</button>
            </div>
            <div className="card">
                <span>icon</span>
                <h3>Dedicated Development Team</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores maxime adipisci, numquam sunt quod similique?</p>
                <button>View More &rarr;</button>
            </div>
            <div className="card">
                <span>icon</span>
                <h3>QA & Testing</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores maxime adipisci, numquam sunt quod similique?</p>
                <button>View More &rarr;</button>
            </div>
            <div className="card">
                <span>icon</span>
                <h3>UX / UI Design</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores maxime adipisci, numquam sunt quod similique?</p>
                <button>View More &rarr;</button>
            </div>
            <div className="card">
                <span>icon</span>
                <h3>Enterprise Software Development</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores maxime adipisci, numquam sunt quod similique?</p>
                <button>View More &rarr;</button>
            </div>
        </div>
    )
}

export default OfferTechnology
