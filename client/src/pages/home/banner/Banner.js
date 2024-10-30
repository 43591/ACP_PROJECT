import React from "react";
import { Link } from "react-router-dom"; // Ensure Link is imported
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import pagination styles
import { Pagination } from "swiper"; // Import pagination module
import styles from "./Banner.module.scss"; // Import local styles

const Banner = () => {
    return (
        <div className={styles.banner}>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={styles.swiper1}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={styles.slider_text}>
                                        <p>Fresh Baked</p>
                                        <h1>We Bake With Passion</h1>
                                        <div>
                                            <Link to="/products" className={styles.exploreButton}>Explore</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.slider_image}>
                                        {/* Uncomment the image below if needed */}
                                        {/* <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdnEW8XSB6EwoFpZjSF_5d1FJBYKetYN6kw&s"
                                            alt=""
                                        /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiper2}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={styles.slider_text}>
                                        <p></p>
                                        <h1>We Bake With Passion</h1>
                                        <div>
                                            <Link to="/products" className={styles.exploreButton}>Explore</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.slider_image}>
                                        {/* Uncomment the image below if needed */}
                                        {/* <img
                                            src="https://res.cloudinary.com/mehedi08h/image/upload/v1648963108/shopx/banner/khaled-ghareeb-n84s3jgzhKk-unsplash-removebg-preview_s3czdz.png"
                                            alt=""
                                        /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
