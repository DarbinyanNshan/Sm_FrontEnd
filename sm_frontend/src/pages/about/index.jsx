import React, { useEffect } from "react";
import "./style.css";

import about_img from "../../assets/images/about_img.jpg";
import abouts_img from "../../assets/images/about_vde.jpg";

export const About = () => {

    useEffect(() => {
        const numbers = document.querySelectorAll('.number');
        const counters = Array(numbers.length);
        const intervals = Array(counters.length);
        counters.fill(0);

        numbers.forEach((number, index) => {
            intervals[index] = setInterval(() => {
                if (counters[index] === parseInt(number.dataset.num)) {
                    clearInterval(counters[index])
                } else {
                    counters[index] += 1;
                    number.innerHTML = counters[index];
                }
            }, 30)
        })
    }, []);


    return <>

        <div className="about-img">
            <img src={about_img} alt="" />
            <h1 className="about-text">About Us</h1>
        </div>
        <div className="about-section">
            <div className="about">
                <div className="about-us">
                    <img src={abouts_img}
                        alt="" />
                </div>
                <div className="about-contant">
                    <h2 className="about-itle">
                        We are Consulting
                    </h2>
                    <p className="about-content-text">
                        orem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus id lectus quis dui euismod consectetur. Pellentesque ac
                        ante sollicitudin, tincidunt nulla in, bibendu
                        morem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus id lectus quis dui euismod consectetur. Pellentesque ac
                        ante sollicitudin, tincidunt nulla in, bibendum
                    </p>
                    <div className="numbers">
                        <div className="about_number">
                            <div className="number" data-num="6">
                            </div>
                            <div className="language-text" >Years of experience</div>
                        </div>
                        <div className="about-number">
                            <div className="number-content">
                                <div className="number" data-num="95">
                                </div>
                                <p>K</p>
                            </div>
                            <div className="language-text" >Happy Customers</div>
                        </div>
                        <div className="about-number">
                            <div className="number-content">
                                <div className="number" data-num="100">
                                </div>
                                <p>%</p>
                            </div>
                            <div className="language-text" >Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

}
