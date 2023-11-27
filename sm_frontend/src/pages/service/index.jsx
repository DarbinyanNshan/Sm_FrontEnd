import React from "react";
import "./style.css"

import service_img from "../../assets/images/service_img.jpg"

import Img_1 from "../../assets/images/main_img/service_1.jpg"
import Img_2 from "../../assets/images/main_img/service_2.jpg"
import Img_3 from "../../assets/images/main_img/service_3.jpg"
import Img_4 from "../../assets/images/main_img/service_4.jpg"
import Img_5 from "../../assets/images/main_img/service_5.jpg"
import Img_6 from "../../assets/images/main_img/service_6.jpg"
import { MySlider } from "../../components/silder";


export const Service = () => {

    const main = [{
        img: Img_1,
        title: 'Accounting',
        description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla......',
        link: '/service/1'
    },
    {
        img: Img_2,
        title: 'Payroll',
        description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.',
        link: '/service/2'
    },
    {
        img: Img_3,
        title: 'Financial Services',
        description: 'Donec sagittis, tellus sodales sollicitudin commodo, risus urna interdum massa',
        link: '/service/3'
    },
    {
        img: Img_4,
        title: 'Financial Planning',
        description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.',
        link: '/service/4'
    },
    {
        img: Img_5,
        title: 'Taxes Planning',
        description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.',
        link: '/service/5'
    },
    {
        img: Img_6,
        title: 'Insurance Consulting',
        description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.',
        link: '/service/6'
    },
    ];

    return <>
        <div className="service_img">
            <img src={service_img} alt="" />
            <h1 className="service_title">Service</h1>
        </div>
        <div className="service">
            {main.map((main) => (
                <div>
                    <div className="service-content">
                        <img src={main.img}
                            alt=""
                            className="service-img"
                        />
                        <div className="service-tit">
                            <h2 className="service-title">
                                {main.title}
                            </h2>
                        </div>

                        <p className="service-description">
                            {main.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <MySlider/>
    </>
}