import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faPhone, faEnvelope } from  "@fortawesome/free-solid-svg-icons"


function Footer() {
  return (
    <div className="card footer">
      <div className="card-body">
        <h4 className="card-title footerH"><strong>Browning Soaps</strong></h4>
        <br />
        <p className="card-text footerP">
          Thank you for visiting! Check back weekly for new scents!
          <br />
         Follow us on <a href="https://www.facebook.com/browningssoap"> 
        <FontAwesomeIcon className="add-classnames-like-this" icon={faFacebookF} fixedWidth />
        </a> for our latest updates!
        <br />
        <FontAwesomeIcon className="add-classnames-like-this" icon={faShoppingCart} fixedWidth />
        <br />
        <FontAwesomeIcon className="add-classnames-like-this" icon={faPhone} fixedWidth /> 404-229-7644
        <br />
        <FontAwesomeIcon className="add-classnames-like-this" icon={faEnvelope} fixedWidth /> browningssoap@gmail.com
        </p>
      </div>
    </div>
    // <div className="bg-primary">
    //   <div className="row bg-success">
    //     <div className="col-md-12">
    //       <div className="title">
    //         <h5>Browning Soaps</h5>
    //         <p>Thanks for visiting, Please check back weekly for new scents</p>
    //         {/* <a href="https://www.facebook.com/browningssoap" title="Facebook Profile" target="_blank"><i class="fab fa-facebook" style="font-size: 15px; color: white;"></i></a>
    //                     <a href="https://www.instagram.com/browningssoap/" title="Instagram Profile" target="_blank"><i class="fab fa-instagram" style="font-size: 15px; color: white;"></i></a> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Footer;
