import React from "react";
import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (<footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    All the rights are secured.No Copyrights Claim
                </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Godrej Prakriti,Shipra-501,Sodepur,Kolkata-700115
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +91 9903775189</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: ashokayushmaan342@gmail.com</div>
                    </div>
                </div>
            <div className="col">
                     <div className="title">
                     Categories
                    </div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watch</span>
                    <span className="text">Bluetooth speaker</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
            </div>
            <div className="col">
                     <div className="title">
                     Categories
                    </div>
                    <span className="text">Pages</span>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & conditions</span>
                    <span className="text">Contact Us</span>
            </div>
            </div>
            <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                            MYSTORE 2023 created By AyushmaanAshok@517
                        </div>
                         <img src={Payment}/>
                 </div>
        </div>
    </footer>
    );
};

export default Footer;
