import React, { Fragment } from "react";
import {
    FcAutomotive,
    FcCurrencyExchange,
    FcCustomerSupport,
    FcRating,
} from "react-icons/fc";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import MetaData from "../../components/MetaData";
import styles from "./About.module.scss";

const About = () => {
    const abouts = [
        {
            icon: <FcAutomotive size={60} style={{ color: "#D10073" }} />, // Dark pink color
            title: "Free Delivery",
            description: "We provide free shipping on all orders",
        },
        {
            icon: <FcRating size={60} style={{ color: "#D10073" }} />, // Dark pink color
            title: "Quality Product",
            description: "We strive to deliver the best quality products and services",
        },
        {
            icon: <FcCustomerSupport size={60} style={{ color: "#D10073" }} />, // Dark pink color
            title: "24/7 Support",
            description: "We provide our services 24/7",
        },
    ];

    return (
        <Fragment>
            <MetaData title={"About"} />
            <Navbar />
            <div className={styles.about}>
                <div className={styles.about_title}>
                    <div className="container">
                        <h3>About Us</h3>
                    </div>
                </div>
                <div className={styles.about_info}>
                    <div className="container mb-5">
                        <div className="row g-3 p-3">
                            <div className="col-md-6">
                                <div className={styles.image}>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYa2GHzOVM4YzXodvusUek3j31lervKKrLw&s"
                                        alt="About"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles.info}>
                                    <h3>
                                        Know About Our Bakery Delight
                                    </h3>
                                    <p>
                                        Our Bakery Delight, where passion for baking meets tradition.
                                        Our team of dedicated artisans works tirelessly to bring you 
                                        the finest baked goods.
                                    </p>
                                    <h5>
                                        Innovation
                                    </h5>
                                    <p>
                                        We pioneer in crafting innovative recipes that blend classic
                                        techniques with modern flavors, ensuring a delightful experience
                                        for every palate.
                                    </p>
                                    <h5>
                                        Expertise
                                    </h5>
                                    <p>
                                        With over 20 years of combined experience, our team possesses
                                        the knowledge and expertise to create exceptional bakery products.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.features}>
                            <h3 className="text-center">Our Features</h3>

                            <div className="row g-3 justify-content-center">
                                {abouts.map((about, index) => (
                                    <div
                                        className="col-md-3 col-sm-6"
                                        key={index}
                                    >
                                        <div className={styles.feature}>
                                            <span> {about.icon}</span>
                                            <h5>{about.title}</h5>
                                            <p>{about.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default About;
