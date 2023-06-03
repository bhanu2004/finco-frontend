import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'
const Footer = ()=>{
    return(
        <>
        <div className="footer">
            <div className="foot1">
                <div className="subfoot1">
                    <h3>Head Quarters</h3>
                    <div className="address">
                        <i className="fas fa-map-marker-alt"></i><p>Finco <br />
                            A-3, Local Shopping Centre, Janakpuri, <br />
                            New Delhi - 110058, India</p>
                    </div>
                    
                    <div className="num">
                        <i className="fas fa-mobile-alt"></i><p>+91-11-255 9999 1/2/3</p>
                    </div>
                    <div className="tel">
                        <i className="fas fa-phone"></i><p>+91-11-255 9999 1/2/3</p>
                    </div>
                    <div className="mail">
                        <i className="fas fa-envelope"></i><p>cmai@cmai.org</p>
                    </div>
                </div>
                <div className="subfoot1">
                    <h3>Bangalore Office</h3>
                    <div className="address">
                        <i className="fas fa-map-marker-alt"></i><p>HVS Court, 3rd Floor <br />
                            21 Cunningham Road<br />
                            Bangalore – 560052,<br />
                            Karnataka</p>
                    </div>
                    
                    <div className="num">
                        <i className="fas fa-mobile-alt"></i><p>+91-11-255 9999 1/2/3</p>
                    </div>
                    <div className="tel">
                        <i className="fas fa-phone"></i><p>+91-11-255 9999 1/2/3</p>
                    </div>
                    <div className="mail">
                        <i className="fas fa-envelope"></i><p>
                            cmaiblr@cmai.org</p>
                    </div>
                </div>
                <div className="subfoot1">
                    <h3>Registered Office</h3>
                    <div className="address">
                        <i className="fas fa-map-marker-alt"></i><p>Finco<br />
                            Christian Council Campus<br />
                            NCCI Road, Civil Lines<br />
                            Nagpur – 440001<br />
                            Maharashtra</p>
                    </div>
                    
                    <div className="num">
                        <i className="fas fa-mobile-alt"></i><p>+91-11-255 9999 1/2/3</p>
                    </div>
                    <div className="tel">
                        <i className="fas fa-phone"></i> <p>+91-11-255 9999 1/2/3</p>
                    </div>
                    <div className="mail">
                        <i className="fas fa-envelope"></i><p>cmai@cmai.org</p>
                    </div>
                </div>
                <div className="subfoot2">
                    <h3>social Links</h3>
                    <a href=""><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                    
                </div>
            </div>
            <div className="foot2">
                <p>© 2021 Bank & Finance. Association of India. All rights reserved.</p>
                <p>Site by: finco Web Design.</p>
            </div>
        </div>
            </>
    );
}
export default Footer;