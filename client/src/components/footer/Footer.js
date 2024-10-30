import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_info}>
                <div className="container">
                    <div className="row g-3">
                        {/* about us  */}
                        <div className="col-md-3">
                            <div className={styles.about_us}>
                                <h5>About Us</h5>
                                <div>
                                    <p>
                                    Welcome to Bakery Delight, where passion for baking meets
                                    tradition. Our team of dedicated artisans works tirelessly
                                    to bring you the finest baked goods.
                                   
                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* information  */}
                        <div className="col-md-3">
                            <div className={styles.information}>
                                <h5>Information</h5>
                                <div>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>FAQs</li>
                                    <li>Privacy Policy</li>
                                
                                    <li>Cookie Policy</li>
                                </div>
                            </div>
                        </div>
                        {/* customer service  */}
                        <div className="col-md-3">
                            <div className={styles.information}>
                                <h5>CUSTOMER SERVICE</h5>
                                <div>
                                    <li>My Account</li>
                                    <li>Support Center</li>
                                    <li>Terms & Conditions</li>
                                   
                                    <li>Shipping & Delivery</li>
                                </div>
                            </div>
                        </div>
                        {/* the optimal newsletter  */}
                        <div className="col-md-3">
                            <div className={styles.newsletter}>
                                <h5>Integrity</h5>
                                <div>
                                    <p>
                                    At Bakery Delight, we uphold values of transparency and honesty, 
                                    ensuring our customers are always informed and satisfied with our offerings.
                                    </p>
                                    <input type="email" />
                                    <button>
                                        <AiOutlineMail />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <span>Copyright © 2022 Optimal. Unauthorized use prohibited.</span>
            </div>
        </div>
    );
};

export default Footer;
