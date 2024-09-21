import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
const Footer = () => {
  return (
  
      <footer>
        <div className="container-fluid col-md-12 container-fluid1">
          <div className="row">
          <div className="col-md-4 fotter1" > 
            <img src="logo-no-background.png" className="footer-logo"/>
            <p className="slogan">“Purely Organic, Simply Fresh"</p>
          </div>
          <div  className="col-md-4 fotter1" >
            <h5 style={{textAlign: "center",marginTop: "5px" ,textDecoration: "underline"}}>Quick Links</h5>
            <ul className="links">
              <li><Link to ="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            </div>
          <div  className="col-md-4 fotter1">
            <h5 style={{textAlign: "center",marginTop: "5px" ,textDecoration: "underline"}}>Follow us on</h5>
            <ul className="social">
              <li><a><i className="fa-brands fa-whatsapp"></i></a></li>
              <li><a><i className="fa-brands fa-instagram"></i></a></li>
              <li><a><i className="fa-brands fa-facebook"></i></a></li>
              <li><a><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </div>
        <hr/>
        <div>
          <p style={{fontSize:"14px", textAlign:"center", marginTop: "10px"}}>&copy; 2024 OrganicFarm.All Right Reserved</p>
        </div>
        </div>
        </div>
      </footer>
  )
}

export default Footer;

