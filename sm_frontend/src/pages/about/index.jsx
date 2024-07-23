import React, { useEffect } from "react";
import "./style.css";

import about_img_1 from "../../assets/images/about_img_1.jpg";
import about_img_2 from "../../assets/images/about_img_2.jpg";

import { FaCheckSquare } from "react-icons/fa";


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
            }, 50)
        })
    }, []);


    return <>
        <div className="about-img"></div>
        <div className="about-section">
            <div className="about">
                <div className="about-contant">
                    <h2 className="about-itle">
                        Մեր Մասին
                    </h2>
                    <p className="about-content-text">
                        Մեր գլխավոր առաքելությունն ու նպատակն է մատուցել հաճախորդներին պրոֆեսիոնալ հաշվապահական ծառայություններ,
                        որոնք կօգնեն խուսափել ֆինանսական, հարկային և կառավարչական հաշվառման խնդիրներից`
                        երաշխավորելով բիզնեսի հաջողությունն ու առաջխաղացումը։
                    </p>
                    <div className="numbers">
                        <div className="about-number">
                            <div className="number" data-num="6">
                            </div>
                            <div className="language-text" >Տարիների փորձ</div>
                        </div>
                        <div className="about-number">
                            <div className="number-content">
                                <div className="number" data-num="200">
                                </div>
                            </div>
                            <div className="language-text" >Երջանիկ Հաճախորդներ</div>
                        </div>
                        <div className="about-number">
                            <div className="number-content">
                                <div className="number" data-num="100">
                                </div>
                                <p>%</p>
                            </div>
                            <div className="language-text">Գոհունակություն</div>
                        </div>
                    </div>
                </div>
                <div className="about-us">
                    <img src={about_img_1}
                        alt="" />
                </div>
            </div>
            <div className="about">
                <div className="about-us">
                    <img src={about_img_2}
                        alt="" />
                </div>
                <div className="about-contant">
                    <h2 className="about-itle">
                        Ինչու՞ դիմել SM Consulting ընկերությանը
                    </h2>
                    <p className="about-content-text">
                       <FaCheckSquare className="about_icon"/>Մենք առաջարկում ենք ծառայությունների լայն ընտրություն, միաժամանակ ապահովելով բարձր որակ:<br/>
                       <FaCheckSquare className="about_icon"/>  Մեզ մոտ բոլոր մասնագետները և՛ փորձառու են, և՛ երիտասարդ:<br/>
                       <FaCheckSquare className="about_icon"/>  Այստեղ կարևորվում է հաճախորդի հանդեպ պարտաճանաչ վերաբերմունքն ու անհատական մոտեցումը:<br/>
                       <FaCheckSquare className="about_icon"/> Մենք կարևորում ենք մեր գործի բոլոր մանրուքները:
                    </p>

                </div>
            </div>
        </div>
    </>

}
