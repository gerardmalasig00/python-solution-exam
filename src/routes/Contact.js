import Office from '../assets/images/office.jpeg'

import '../assets/css/contact/Main.css'
const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="header">
                    <p>Say Hello</p>
                    <h1>Contact</h1>
                </div>
                <div className="content">
                    <div className="office">
                        <div className="office-image">
                            <img src={Office} alt="" />
                        </div>
                        <h3>Head Quarters</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit delectus modi ad ab excepturi unde itaque perspiciatis ut ducimus.</p>
                        <p>09212702674</p>
                        <p>gmjr49910211@gmail.com</p>
                        <div className="icons">
                            <span><i class="fab fa-linkedin"></i></span>
                            <span><i class="fab fa-instagram"></i></span>
                            <span><i class="fab fa-twitter"></i></span>
                            <span><i class="fab fa-facebook"></i></span>
                        </div>
                    </div>
                    <div className="form">
                        <form action="">
                            <div className="two-col-form">
                                <div className="form-group">
                                    <label htmlFor="name">First Name*</label>
                                    <input className="form-control" type="text" name="name" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Last Name*</label>
                                    <input className="form-control" type="text" name="name" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Email*</label>
                                    <input className="form-control" type="text" name="name" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Phone Number*</label>
                                    <input className="form-control" type="text" name="name" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Company Name*</label>
                                    <input className="form-control" type="text" name="name" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Company Type*</label>
                                    <select className="form-control" name="" id="">
                                        <option value="">Please Select</option>
                                        <option value="">Sole</option>
                                        <option value="">Corporation</option>
                                    </select>
                                </div>
                            </div>
                            <p htmlFor="">I am looking for</p>
                            <div className="form-group">
                                <input className="form-control" type="checkbox" name="consulting" id="consulting" />
                                <input className="form-control" type="checkbox" name="design" id="design" />
                                <input className="form-control" type="checkbox" name="mobile" id="mobile" />
                                <input className="form-control" type="checkbox" name="web" id="web" />
                                <input className="form-control" type="checkbox" name="devOps" id="devOps" />
                                <input className="form-control" type="checkbox" name="qa" id="qa" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message*</label>
                                <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
