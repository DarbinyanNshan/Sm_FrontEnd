import React from "react";
import "./style.css";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import { BsRocketTakeoff } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

import Img_1 from "../../assets/images/main_img/service_1.jpg"
import Img_2 from "../../assets/images/main_img/service_2.jpg"
import Img_3 from "../../assets/images/main_img/service_3.jpg"
import main_about from "../../assets/images/main_about.jpg"

import { FcSearch } from "react-icons/fc";
import { FaHandPointDown } from "react-icons/fa";






export const Main = () => {

    const navigate = useNavigate()

    const main = [{
        img: Img_1,
        title: 'Բիզնեսի վերահսկողական միջոցների ներդրում',
        description: 'Բիզնես վերահսկողության իրականացումը առանցքային է ռիսկերի նվազեցման և կանոնակարգային համապատասխանության համար՝ ամրապնդելով դիմացկուն և լավ կառավարվող կազմակերպության հիմքը: Այս միջոցառումները համակարգված կերպով բարձրացնում են գործառնական ամբողջականությունը և խթանում հաշվետվողականության մշակույթը:',
    },
    {
        img: Img_2,
        title: 'Հարկային ստուգումների ուղեկցում',
        description: 'Ուղեկցող հարկային ստուգումները ներառում են ֆինանսական գրառումների ուսումնասիրության ընթացքում համակողմանի աջակցություն: Այս պրոակտիվ մոտեցումը ներառում է թափանցիկ հաղորդակցություն, մանրակրկիտ փաստաթղթեր և ռազմավարական ներկայացուցչություն՝ ապահովելու սահուն և համապատասխան աուդիտի գործընթաց:',
    },
    {
        img: Img_3,
        title: 'Հաշվապահական բազայի վերականգնում',
        description: 'Հաշվապահական հաշվառման բազայի վերականգնումը անսպասելի իրադարձությունից հետո ֆինանսական տվյալների ամբողջականության վերականգնման մանրակրկիտ գործընթացն է: Սա ներառում է տվյալների համակարգված ստուգում, կրկնօրինակի վերականգնում և մանրակրկիտ վավերացում՝ ճշգրիտ ֆինանսական գրառումները վերականգնելու համար:',
    }
    ];

    const ServiceItem = ({ img, title, description }) => (
        <div className="main_1">
            <img src={img} alt="" className="main1_img" />
            <h2 className="main1_title">{title}</h2>
            <p className="main1_description">{description}</p>
        </div>
    );
    const onClick = () => {
        navigate('/services');
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return <div className='main_content'>
        <div className="main_title">
            <div className="accounting_server">
                <p>
                    Հաշվապահական խորհրդատվություն
                </p>
            </div>
            <div className="accounting_text">
                SM-Consulting-ը  առաջարկում է հաշվապահական ծառայությունների ամբողջական փաթեթ ՀՀ
                 և օտարերկրյա կազմակերպություններին և անհատներին:
            </div>
        </div>
        <div className="main">
            {main.map((item, index) => (
                <ServiceItem key={index} {...item} />
            ))}
        </div>
        <div className="main_p">
            <div className="main_title">
                <div className="accounting_server main_server">
                    <p>
                        Հաշվապահական խորհրդատվություն՝ պրոֆեսիոնալների կողմից
                    </p>
                </div>
            </div>
            <div className="main">
                <div className="main2_section">
                    <div className="main2">
                        <div className=" main2_icons" ><HiOutlineDesktopComputer /></div>
                        <div className=" main2_title" >Հաշվապահական ծառայություններ</div>
                        <div className=" main2_text" >
                            SM Consulting ընկերության որակյալ հաշվապահները կօգնեն
                            Ձեր նորաստեղծ կամ կայացած ընկերությանը ներդնել հաշվապահական ավտոմատացված համակարգ,
                            վարել ֆինանսական և հարկային հաշվառում՝ հաշվապահական հաշվառման, ֆինանսական հաշվետվությունների
                            միջազգային ստանդարտներին և հարկային օրենսգրքին համապատասխան։
                        </div>
                    </div>
                </div>

                <div className="main2_section">
                    <div className="main2">
                        <div className="main2_icons" ><BiCodeAlt /></div>
                        <div className="main2_title" >Հարկային խորհրդատվություն</div>
                        <div className="main2_text" >
                            SM Consulting ընկերության փորձառու և ճկուն հաշվապահները հնարավորություն կտան ձեզ քայլել
                            Հարկային օրենսգրքի ու դրա հետ կապված կարգավորումների փոփոխություններին զուգընթաց,
                            կիրականացնեն Ձեր ընկերության հարկային ռազմավարության պլանավորում, հարկային
                            ուսումնասիրություն և ռիսկերի կառավարում։
                        </div>
                    </div>
                </div>

                <div className="main2_section">
                    <div className="main2">
                        <div className="main2_icons" ><BsRocketTakeoff /></div>
                        <div className="main2_title" >Կադրային գործավարություն</div>
                        <div className="main2_text" >
                            Ունենալով գրագետ կազմակերպված կադրային գործավարություն`կունենաք իրավաբանական
                            պաշտպանվածություն աշխատանքային վեճերի ժամանակ, կկարողանաք պատշաճ ներկայանալ աշխատանքային օրենսդրության
                            նորմերի շրջանակներում պետական մարմինների կողմից անցկացվող ստուգումներին:
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main_about">
            <div className="main_about_img">
                <img src={main_about}
                    alt="" />
            </div>
            <div className="main_about_contant">
                <h2 className="main_about_title">
                    SM Consulting-ի որակավորված հաշվապահները կօգնեն Ձեր ընկերությանը ներդնել հաշվապահական ավտոմատացված համակարգ,
                    վարել գրագետ ֆինանսական և հարկային հաշվառում՝ միջազգային ստանդարտների և հարկային օրենսգրքի համաձայն
                </h2>
                <p className="main_about_text">
                    Մեր ծառայություններն են <FaHandPointDown className="main_about_down" /><br />
                    <FcSearch className="main_about_icon" />Հարկային հաշվառման պլանավորում<br />
                    <FcSearch className="main_about_icon" />Հաշվապահական քաղաքականության մշակում՝ Ձեր կազմակերպության առանձնահատկություններին համաձայն<br />
                    <FcSearch className="main_about_icon" />Բիզնես ռիսկերի վերլուծություն<br />
                    <FcSearch className="main_about_icon" />Բիզնեսի վերահսկողական միջոցների ներդրում<br />
                    <FcSearch className="main_about_icon" /> Հաշվապահական հաշվառման և հարակից բիզնես պրոցեսների ավտոմատացում<br />
                    <FcSearch className="main_about_icon" />Կազմակերպության հիմնադիրների, կառավարչական անձնակազմի պահանջներին համապատասխան՝ ֆինանսական հաշվետվությունների պատրաստում։<br />
                </p>
                <div className="main_about_btn">
                    <button onClick={onClick}>Իմանալ Ավելին</button>
                </div>
            </div>
        </div>
    </div>
}