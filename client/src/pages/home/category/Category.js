import React from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.scss";

const Category = () => {
    const categorys = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdUUc6mqoFmMtokbSFEhppBRUFxzDERL5EHg&s",
            title: "Cakes",
            link: <Link to="/">Cakes</Link>,
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPSHrWrOvV42Ay_BujsDvw2CVu0V11Ziudg&s",
            title: "Cookies",
            link: <Link to="/">Cookies</Link>,
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EGZNgovaJElVH7UBrznm2A-jbrfGBYpB_w&s",
            title: "Brownies",
            link: <Link to="/">Brownies</Link>,
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8xcL7vV4vA-VwoOl60MDOrrS2QaAFJ2U9A&s",
            title: "Cupcakes",
            link: <Link to="/">Cupcakes</Link>,
        },
    ];
    return (
        <div className={styles.category}>
            <div className="container mb-5 mt-5">
                <div className="row g-3">
                    {categorys.map((item, index) => (
                        <div className="col-md-3 text-center" key={index}>
                            <div className={styles.item}>
                                <img src={item.image} alt={item.title} />

                                <div>
                                    <h4>{item.title}</h4>
                                    <p className="text-center">{item.link}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
