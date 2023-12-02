import React from "react";
import "./style.css";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import { BsRocketTakeoff } from "react-icons/bs";


import Img_1 from "../../assets/images/main_img/service_1.jpg"
import Img_2 from "../../assets/images/main_img/service_2.jpg"
import Img_3 from "../../assets/images/main_img/service_3.jpg"
import Img_4 from "../../assets/images/main_img/news_1.jpg"
import Img_5 from "../../assets/images/main_img/news_2.jpg"
import Img_6 from "../../assets/images/main_img/news_3.jpg"




export const Main = () => {

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

    const main_3 = [{
        img: Img_4,
        title: 'Introducing Gaap WordPress Accounting Theme',
        data_time: '24th January 2003',
        description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.',
    },
    {
        img: Img_5,
        title: 'The New Accounting Tax Laws Explained In Full',
        data_time: '24th January 2013',
        description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.',
    },
    {
        img: Img_6,
        title: '10 Reasons To Hire Accountancy Accountants',
        data_time: '24th January 2023',
        description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.',
    }
    ];
    return <div className='main_content'>
        <div className="main_title">
            <div className="accounting_server">
                <p>
                Հաշվապահական խորհրդատվություն
                </p>
            </div>
            <div className="accounting_text">
            Այստեղ SM-Consulting-ում մենք առաջարկում ենք հաշվապահական ծառայությունների ամբողջական փաթեթ ՀՀ-ն
                         ընկերություններին և անհատներին:
            </div>
        </div>
        <div className="main">
            {main.map((main) => (
                <div>
                    <div className="main_1">
                        <img src={main.img}
                            alt=""
                            className="main1_img"
                        />
                        <h2 className="main1_title">{main.title}</h2>
                        <p className="main1_description">{main.description}</p>
                        </div>
                        
                </div>
            ))}
        </div>
        <div className="main_p">
                <div className="main_title">
                    <div className="accounting_server main2">
                        <p>
                        Հաշվապահական խորհրդատվություն՝ պրոֆեսիոնալների կողմից
                        </p>
                    </div>
            </div>
            <div className="main">
                <div>
                    <div className="main_2">
                        <div className=" main_2_icons" ><HiOutlineDesktopComputer /></div>
                        <div className=" main_2_title" >Հաշվապահական ծառայություններ</div>
                        <div className=" main_2_text" >
                            SM Consulting ընկերության որակավորված հաշվապահները կօգնեն
                            Ձեր նորաստեղծ կամ կայացած ընկերությանը ներդնել հաշվապահական ավտոմատացված համակարգ,
                            վարել ֆինանսական և հարկային հաշվառում՝ հաշվապահական հաշվառման, ֆինանսական հաշվետվությունների
                            միջազգային ստանդարտներին և հարկային օրենսգրքին համապատասխան։
                        </div>
                    </div>
                </div>

                <div>
                    <div className="main_2">
                        <div className="main_2_icons" ><BiCodeAlt /></div>
                        <div className="main_2_title" >Հարկային խորհրդատվություն</div>
                        <div className="main_2_text" >
                            SM Consulting ընկերության փորձառու և ճկուն հաշվապահները հնարավորություն կտան ձեզ քայլել
                            Հարկային օրենսգրքի ու դրա հետ կապված կարգավորումների փոփոխություններին զուգընթաց,
                            կիրականացնեն Ձեր ընկերության հարկային ռազմավարության պլանավորում, հարկային
                            ուսումնասիրություն և ռիսկերի կառավարում։
                        </div>
                    </div>
                </div>

                <div>
                    <div className="main_2">
                        <div className="main_2_icons" ><BsRocketTakeoff /></div>
                        <div className="main_2_title" >Կադրային գործավարություն</div>
                        <div className="main_2_text" >
                            Ունենալով գրագետ կազմակերպված կադրային գործավարություն`կունենաք իրավաբանական
                            պաշտպանվածություն աշխատանքային վեճերի ժամանակ, կկարողանաք պատշաճ ներկայանալ աշխատանքային օրենսդրության
                            նորմերի շրջանակներում պետական մարմինների կողմից անցկացվող ստուգումներին:
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="main_title">
            <div className="accounting_server">
                <p>
                    Recent News
                </p>
            </div>
        </div>
        <div className="main">

            {main_3.map((main_3) => (
                <div>
                    <div className="main_1">
                        <img src={main_3.img}
                            alt="/"
                            className="main1_img"
                        />
                        <h2 className="main1_title">{main_3.title}</h2>
                        <p className="main4_datatime">{main_3.data_time}</p>
                        <p className="main1_description">{main_3.description}</p>
                    </div>

                </div>
            ))}
        </div>


    </div>
}