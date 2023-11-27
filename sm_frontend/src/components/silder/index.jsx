import React from "react";
import "./style.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'


import Img_1 from "../../assets/images/main_img/service_1.jpg"
import Img_2 from "../../assets/images/main_img/service_2.jpg"
import Img_3 from "../../assets/images/main_img/service_3.jpg"
import Img_4 from "../../assets/images/main_img/service_4.jpg"
import Img_5 from "../../assets/images/main_img/service_5.jpg"
import Img_6 from "../../assets/images/main_img/service_6.jpg"


export const MySlider = () => {

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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return <>
    <Slider className='my-slider' {...settings}>
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
    </Slider>
  </>
}