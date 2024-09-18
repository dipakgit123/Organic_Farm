import React from 'react'
import '../App.css'

const Contact = () => {
  return (
    <div className='container col-md-12'>
        <div className="row">
    <div className="col-md-6">
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form id="contactForm">
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="send-msg">Send Message</button>
            </form>
            <div id="formMessage"></div>
        </div>
    </div>
    <div class="col-md-6 mt-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30256.03564113212!2d73.95876815407864!3d18.573837881898054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3819fdef877%3A0xd4193e985f354be0!2sWagholi%2C%20Pune%2C%20Maharashtra%20412207!5e0!3m2!1sen!2sin!4v1725209403057!5m2!1sen!2sin" title="Embedded Content" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>

            
        </div>

</div>
      
  )
}

export default Contact
