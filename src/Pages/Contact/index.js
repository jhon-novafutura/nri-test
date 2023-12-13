import React from 'react';
import Contacts from "../../componets/contacts";
import "./Contact.css";
import Helmet from "react-helmet";

import instagramIcon from '../../assets/icons/2.png';
import youtubeIcon from '../../assets/icons/1.png';
import linkedinIcon from '../../assets/icons/4.png';
import twitterIcon from '../../assets/icons/3.png';
import twitchIcon from '../../assets/icons/6.png';
import tiktokIcon from '../../assets/icons/5.png';
import facebookIcon from '../../assets/icons/face.png';

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact - Nova Futura</title>
        <meta name="description" content="Adiconar texto"></meta>
        <meta name="keywords" content=""></meta>
      </Helmet>

      {/* sessa 8 -  */}
      <div className="ss8-C">
        <div className="max-w-6xl mx-auto py-2 sm:py-24 flex flex-col sm:flex-row  justify-center items-center px-8 sm:px-0  ">
          <div className="flex justify-center sm:my-16 my-8 basis-6/12  ">
            <div className="  sm:px-12 px-2 ss3">
              <Contacts />
            </div>
          </div>
          <div className="flex  justify-center  basis-6/12 ">
            <div className="flex flex-col   ">
              <div className="flex flex-row text-white items-center mb-9">
                <div>
                  <img className="h-auto w-auto pr-4" src={instagramIcon} alt="instagram" />
                </div>
                <div>
                  <p>@novafuturainvestimentos</p>
                </div>
              </div>
              <div className="flex flex-row text-white items-center mb-9">
                <div>
                  <img className="h-auto w-auto pr-4" src={youtubeIcon} alt="youtube" />
                </div>
                <div>
                  <p>/novafuturainvestimentos</p>
                </div>
              </div>
              <div className="flex flex-row text-white items-center mb-9">
                <div>
                  <img className="h-auto w-auto pr-4" src={linkedinIcon} alt="linkedin" />
                </div>
                <div>
                  <p>Nova Futura Investimentos</p>
                </div>
              </div>
              <div className="flex flex-row text-white items-center mb-9">
                <div>
                  <img className="h-auto w-auto pr-4 " src={facebookIcon} alt="facebook" />
                </div>
                <div>
                  <p>@/novafuturanewf</p>
                </div>
              </div>
              <div className="flex flex-row text-white items-center mb-9">
                <div>
                  <img className="h-auto w-auto pr-4" src={twitterIcon} alt="twitter" />
                </div>
                <div>
                  <p>nfinvestimentos</p>
                </div>
              </div>
              <div className="flex flex-row text-white items-center mb-9">
                <div>
                  <img className="h-auto w-auto pr-4" src={twitchIcon} alt="twitch" />
                </div>
                <div>
                  <p>@/novafutura</p>
                </div>
              </div>
              <div className="flex flex-row text-white items-center mb-9">
                <div>
                  <img className="h-auto w-auto pr-4" src={tiktokIcon} alt="tiktok" />
                </div>
                <div>
                  <p>/nova_futura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex flex-col sm:flex-row  justify-center items-center px-8 sm:px-0  justify-center">
        <div className="flex flex-col items-center justify-center my-16 basis-1/3 ">
          <h3 className=" pb-4">André Schierz</h3>
          <p className=" pc">Global Business Development VP</p>
          <p className="font-bold pc">phil.joslin@novafutura.com.br</p>
        </div>
        <div className="flex flex-col items-center justify-center my-16 basis-1/3 ">
          <h3 className=" pb-4">Phil Joslin</h3>
          <p className=" pc">Senior Asia Business Development</p>
          <p className="font-bold pc">andre.schierz@novafutura.com.br</p>
        </div>
      </div>
    </div>
  );
}
