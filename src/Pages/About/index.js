import React from 'react';
import "./About.css";
import Helmet from "react-helmet";

import evolution1 from '../../assets/images/aboutLine1.png';
import evolution2 from '../../assets/images/aboutLine2.png';
import evolution3 from '../../assets/images/aboutLine3.png';
import evolution4 from '../../assets/images/aboutLine4.png';
import evolution5 from '../../assets/images/aboutLine5.png';

import ce from '../../assets/images/ce.png';
import pr from '../../assets/images/pr.png';
import rj from '../../assets/images/rj.png';
import sp from '../../assets/images/sp.png';

import b3About from '../../assets/images/b3About.png';
import app from '../../assets/images/phoneProducts.png';
import line from '../../assets/images/line.png';

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About - Nova Futura</title>
        <meta name="description" content="Adiconar texto"></meta>
        <meta name="keywords" content=""></meta>
      </Helmet>
      <header>
        {/* sessa 1*/}
        <div className=" ss1 px-8 sm:px-16 pt-5">
          {/* sessao 1 - Conteudo*/}

          <div className=" max-w-6xl mx-auto sm:pt-24 pt-12 ">
            <h1 className="font-normal text-left">
              Outstanding,
              <br />
              trustworthy
              <br />
              and secure
            </h1>
            <h5 className="border-l-2 card pl-5 mt-5 font-normal capaapp ">
              We are a solid broker and investment manager with{" "}
              <br className="sm:block hidden" />
              <span className="font-semibold">
                40 years of tradition.{" "}
              </span>{" "}
              <br className="sm:block hidden" />
              Throughout our history, we have been prominent in{" "}
              <br className="sm:block hidden" />
              equity and derivative markets.
            </h5>

            <div className="flex  items-center pt-10">
              <a
                href="/#forms"
                className="btn-forms text-white py-2 px-6 font-medium"
                aria-current="page"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* sessao 1 - Linha do tempo */}
      <div className="ss2 max-w-6xl mx-auto py-16 ">
        <h2 className=" font-semibold  px-8 sm:px-0 text-left ">
          The evolution of Nova Futura
        </h2>
        <div className="flex flex-col my-8 sm:block hidden ">
          <div className="flex flex-row justify-center left 1983">
            <div className="basis-5/12 flex justify-center flex-col mt-8">
              <h2 className="text-right font-bold uppercase">
                Start of
                <br />
                Operations
              </h2>

              <p className="text-right mt-8">
                Nova Futura Investimentos begins its Hedge of <br />
                activíties under the name Futura Corretora, in
                <br />
                the derivative markets, as a the concept of
                <br />
                foundingpartner of BM&F (Commodity and <br />
                Futures Exchange)
              </p>
            </div>
            <div className="basis-2/12 line text-center flex justify-center flex-col mx-8 p-0">
              <h2 className="text-white font-bold p-0">1983</h2>
            </div>
            <div className="basis-5/12 flex justify-center flex-col mt-8">
              <img className="pr-36" src={evolution1} alt="about1" />
            </div>
          </div>

          <div className="flex flex-row-reverse justify-center right 1996 ">
            <div className="basis-5/12 flex justify-center flex-col mt-8">
              <h2 className="text-left font-bold uppercase">
                Hedge of <br />
                Commodities
              </h2>

              <p className="text-left mt-8">
                Pioneering the introduction of the concept
                <br />
                of Hedge of Commodities, in 1996, it was
                <br />
                recognized by BMF as a Featured Broker in <br />
                the Trading of Agribusiness Futures <br />
                Contracts in the Sugar, Soybean, Alcohol
                <br />
                and Cattle modalities. Hedge of Commodities.
              </p>
            </div>
            <div className="basis-2/12 line text-center flex justify-center flex-col mx-8 p-0">
              <h2 className="text-white font-bold p-0">1996</h2>
            </div>
            <div className="basis-5/12 flex justify-center flex-col mt-8"></div>
          </div>

          <div className="flex flex-row justify-center left 2000">
            <div className="basis-5/12 flex justify-center flex-col my-8">
              <h2 className="text-right font-Normal text-lg uppercase">
                Foundation of <br />
                nova futura <br />
                dtvm
              </h2>
            </div>
            <div className="basis-2/12 line text-center flex justify-center flex-col mx-8 ">
              <h3 className="text-white text-center font-semibold px-8">
                2000
              </h3>
            </div>
            <div className="basis-5/12 flex justify-center flex-col mt-16"></div>
          </div>

          <div className="flex flex-row-reverse justify-center right 2007 ">
            <div className="basis-5/12 flex justify-center flex-col mt-8">
              <h2
                className="text-left
                             font-Normal text-lg uppercase"
              >
                Receives bm&f <br />
                certification
              </h2>
            </div>
            <div className="basis-2/12 line text-center flex justify-center flex-col mx-8 p-0">
              <h3 className="text-white font-semibold px-8">2007</h3>
            </div>
            <div className="basis-5/12 flex justify-center flex-col mt-8">
              <img className="pl-72 py-16" src={evolution2} alt="about2" />
            </div>
          </div>

          <div className="flex flex-row justify-center left 2011">
            <div className="basis-5/12 flex justify-center flex-col mt-8">
              <h2 className="text-right font-bold uppercase">
                achieves
                <br />
                execution
                <br />
                broker
                <br />
                certificate
              </h2>
            </div>
            <div className="basis-2/12 line text-center flex justify-center flex-col mx-8 p-0">
              <h2 className="text-white font-bold px-2">2011</h2>
            </div>
            <div className="basis-5/12 flex justify-center flex-col mt-8">
              <img className="pr-80" src={evolution3} alt="about3" />
            </div>
          </div>

          <div className="flex flex-row-reverse justify-center right 2014 ">
            <div className="basis-5/12 flex justify-center flex-col my-16">
              <h2
                className="text-left
                             font-Normal text-lg uppercase"
              >
                takes over the operation
                <br />
                of petra cctvm
              </h2>
            </div>
            <div className="basis-2/12 line text-center flex justify-center flex-col mx-8 p-0">
              <h3 className="text-white font-normal px-8">2014</h3>
            </div>
            <div className="basis-5/12 flex justify-center flex-col my-16"></div>
          </div>

          <div className="flex flex-row justify-center left 2015">
            <div className="basis-5/12 flex justify-center flex-col mt-8">
              <h2 className="text-right font-bold  text-lg uppercase">
                Merger of futura and nova <br />
                futura dtvm brokers giving rise
                <br />
                to nova futura investimentos
              </h2>
            </div>
            <div className="basis-2/12 line text-center flex justify-center flex-col mx-8 p-0">
              <h2 className="text-white font-bold p-0">2015</h2>
            </div>
            <div className="basis-5/12 flex justify-center flex-col mt-8">
              <img className="pr-36" src={evolution4} alt="about4" />
            </div>
          </div>

          <div className="flex flex-row-reverse justify-center right 2016">
            <div className="basis-5/12 flex justify-center flex-col mt-8">
              <h2
                className="text-left
                             font-Normal text-lg uppercase"
              >
                takes over the operation
                <br />
                of pax brokerage
              </h2>
            </div>
            <div className="basis-2/12 line text-center flex justify-center flex-col mx-8 p-0">
              <h3 className="text-white font-normal px-8">2016</h3>
            </div>
            <div className="basis-5/12 flex justify-center flex-col mt-8"></div>
          </div>

          <div className="flex flex-row justify-center left 2017">
            <div className="basis-5/12 flex justify-center flex-col my-8">
              <img className="pl-92 " src={evolution5} alt="about5" />

              <h2 className="text-right font-Normal text-lg uppercase">
                starts retail <br />
                operation
              </h2>
            </div>
            <div className="basis-2/12 line text-center flex justify-center flex-col mx-8 ">
              <h3 className="text-white font-semibold px-8">2017</h3>
            </div>
            <div className="basis-5/12 flex justify-center flex-col mt-16"></div>
          </div>

          <div className="flex flex-row-reverse justify-center right 2018">
            <div className="basis-5/12 flex justify-center flex-col mt-8">
              <h2 className="text-left font-bold uppercase text-lg">
                start of the product
                <br />
                distribution platform for
                <br />
                portfolio allocation
              </h2>

              <p className="text-left mt-4">
                Poffering the main products for digital retail.
              </p>
            </div>
            <div className="basis-2/12 line text-center flex justify-center flex-col mx-8 p-0">
              <h2 className="text-white font-bold p-0">2018</h2>
            </div>
            <div className="basis-5/12 flex justify-center flex-col mt-8"></div>
          </div>

          <div className="flex flex-row justify-center left 2021">
            <div className="basis-5/12 flex justify-center flex-col my-8">
              <h2 className="text-right font-Normal text-lg uppercase">
                Reaches the milestone of 150 thousand
                <br />
                registered clients and inaugurates a new <br />
                headquarter
              </h2>
            </div>
            <div className="basis-2/12 line text-center flex justify-center flex-col mx-8 ">
              <h3 className="text-white font-semibold px-8">2020</h3>
            </div>
            <div className="basis-5/12 flex justify-center flex-col mt-16"></div>
          </div>
          <div className="flex flex-row-reverse justify-center left 2020">
            <div className="basis-5/12 flex justify-center flex-col my-8">
              <h2 className="text-left font-normal text-lg uppercase">
                Opening of the fiduciary <br />
                administration area
              </h2>
            </div>
            <div className="basis-2/12 line text-center flex justify-center flex-col mx-8 ">
              <h3 className="text-white font-semibold px-8">2021</h3>
            </div>
            <div className="basis-5/12 flex justify-center flex-col my-8">
              <h2 className="text-right font-bold text-lg uppercase">
                launch of nova futura’s
                <br /> investment funds
              </h2>

              <p className="text-right mt-4">
                Offering the main products for digital retail.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center left 2020">
            <div className="basis-5/12 flex justify-center flex-col my-8">
              <h2 className="text-right font-bold text-lg uppercase">
                renewal of b3’s
                <br />
                operational qualification
                <br />
                seal (pqo)
              </h2>
            </div>
            <div className="basis-2/12 line text-center flex justify-center flex-col mx-8 ">
              <h2 className="text-white font-bold ult ">2022</h2>
            </div>
            <div className="basis-5/12 flex justify-center flex-col my-8">
              <h3 className="text-left font-bold  uppercase">
                expansion of the fiduciary <br /> administration area
              </h3>

              <p className="text-left mt-4">
                Consolidation of the new business with fund managers.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-8 sm:hidden block ">
          <img className="mx-auto" src={line} alt="logo" />
        </div>
      </div>
      {/* sessao 2 - Business Model */}

      <div className="ss3 px-8 sm:px-0 py-16">
        <div className=" max-w-6xl mx-auto ">
          <h2 className=" font-light text-gray-50 py-8 ">Business model</h2>
          <div className=" flex flex-col sm:flex-row justify-center">
            <div className=" text-left justify-center items-center   ">
              <h3 className=" pt-2 font-semibold sm:text-md text-lg text-gray-50 text-left mb-2 ">
                Broker and Investment Manager
              </h3>
              <div className="flex flex-col basis-6/12 text-left justify-center items-center  border-solid border-2 card1b py-6  text-left sm:px-24 px-12 ">
                <h3 className="text-white text-left font-light">
                  • Stocks <br />
                  • Futures <br />
                  • Funds <br />
                  • Real Estate <br />
                  • Structured <br />
                  • Products
                  <br />
                  • Fixed Income <br />• Social Security
                </h3>
              </div>
            </div>
            <div className=" flex flex-col basis-6/12  justify-center items-center  ">
              <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
                <br />
              </h3>
              <div className=" flex  justify-center items-center border-solid border-2 card1b py-6 sm:px-8 px-12 text-left">
                <h3 className="text-white text-left font-light">
                  • B2C
                  <br />
                  • B2B
                  <br />
                  • Digital Experience
                  <br />
                  • Institutional Clients
                  <br />
                  • Agribusiness Clients
                  <br />• Fiduciary Administration
                </h3>
              </div>
            </div>
          </div>
          <h3 className="pt-8 font-bold text-gray-50  text-left my-5">
            Asset Manager
          </h3>
          <div className=" flex flex-row justify-start items-center text-center">
            <div className=" flex flex-col basis-1/4 mr-16 bnt-p py-3  text-gray-50">
              FIA
            </div>
            <div className=" flex flex-col basis-1/4 mr-16 bnt-p py-3  text-gray-50">
              FIM
            </div>
            <div className=" flex flex-col basis-1/4 mr-16  bnt-p py-3  text-gray-50">
              Private
            </div>
          </div>

          <h3 className="pt-8 font-bold  text-gray-50  text-left my-5">
            Futura Academy
          </h3>
          <div className=" flex flex-row justify-start items-center text-center">
            <div className=" flex flex-col basis-1/4 bnt-p py-3 mr-16 text-sm  text-gray-50">
              Courses
            </div>
            <div className=" flex flex-col basis-1/4 bnt-p py-3 mr-4 text-sm  text-gray-50">
              Events
            </div>
          </div>
        </div>
      </div>

      {/* sessao 3 - Get In Touch */}
      <div className="ss2 max-w-6xl mx-auto py-16 px-8 sm:px-0">
        <h5 className="  font-semibold mt-5">WHERE TO FIND US</h5>
        <h2 className=" font-light h2 ">Get In Touch</h2>
        <div className="flex flex-col sm:flex-row justify-center max-w-4xl mx-auto sm:p-24 ">
          <div className=" flex flex-col sm:basis-1/2 basis-2/2 border-solid border-2 justify- items-center p-3 card mx-8 my-4 sm:mx-2">
            <img className="h-auto w-auto" src={sp} alt="logo" />
            <div className="text-center">
              <h3 className="py-4 font-semibold h3g">SÃO PAULO - SP</h3>
              <p className="py-2 font-semibold cardss2 ">
                Al Santos, 960 <br />
                10th floor - Postal Code 01418-002 <br />
                Phone: (11) 4020-6710
              </p>
            </div>
          </div>
          <div className=" flex flex-col basis-1/2  justify-end sm:pl-5 pl-0 my-4 ">
            <p className=" textss2 font-normal sm:mt-10  my-3 sm:text-left text-center ">
              <span className="font-bold  ">+over 24 </span>
              <br className="sm:block hidden" />
              authorized <br className="sm:block hidden" />
              locals offices <br className="sm:block hidden" />
              in Brazil
            </p>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row justify-around max-w-4xl sm:max-w-6xl mx-auto">
          <div className=" flex flex-col basis-1/3 border-solid border-2  items-center p-3 card2 sm:mx-6 mx-8 mb-8">
            <img className="h-auto w-auto" src={pr} alt="logo" />
            <div className="text-center">
              <h3 className="py-4 font-semibold">MARINGÁ - PR</h3>
              <p className="py-2 font-semibold cardss2">
                Av. Pedro Tasques, 294 - 5th floor - Room 503
                <br />
                Postal Code 87030-000
                <br />
                Phone: (44) 330415615
              </p>
            </div>
          </div>

          <div className=" flex flex-col basis-1/3 border-solid border-2  items-center p-3 card2 sm:mx-6 mx-8 mb-8">
            <img className="h-auto w-auto" src={rj} alt="logo" />
            <div className="text-center">
              <h3 className="py-4 font-semibold">RIO DE JANEIRO - RJ</h3>
              <p className="py-2 font-semibold cardss2">
                R. Sete de Setembro, 92 <br />
                Room 1609 and 1610
                <br />
                Postal Code 20050-002
                <br />
                Phone: (21) 25406661
              </p>
            </div>
          </div>

          <div className=" flex flex-col basis-1/3 border-solid border-2  items-center p-3 card2 sm:mx-6 mx-8 mb-8">
            <img className="h-auto w-auto" src={ce} alt="logo" />
            <div className="text-center">
              <h3 className="py-4 font-semibold">FORTALEZA - CE</h3>
              <p className="py-2 font-semibold cardss2">
                Av. Des. Moreira, 2120 - 1808
                <br />
                Postal Code 60170-0020
                <br />
                Phone: (85) 4042-0967
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* sessao 4 - Conteudo*/}

      <div className=" max-w-6xl mx-auto pt-16 pb-36 px-8 sm:px-0 flex flex-col sm:flex-row justify-end items-center ">
        <div className="basis-1/2 flex items-center justify-center ">
          <h2 className="font-semibold text-left capaap">
            Nova Futura is <br className="sm:block hidden" />
            active on all listed <br className="sm:block hidden" />
            products traded at <br className="sm:block hidden" />
            B3 Exchange and <br className="sm:block hidden" />
            the largest
            <br className="sm:block hidden" />
            Independent broker
            <br className="sm:block hidden" />
            in Brazil
          </h2>
        </div>
        <div className="basis-1/2 flex  items-center">
          <h3 className="border-l-2 card pl-5 mt-5 font-normal capaapp ">
            Being present in the exchange since it’s{" "}
            <br className="sm:block hidden" />
            conception, Nova Futura has evolved froma key{" "}
            <br className="sm:block hidden" />
            commodities player to a full service brokerage{" "}
            <br className="sm:block hidden" />
            house in the last 40+ years serving it’s customers,{" "}
            <br className="sm:block hidden" />
            with very solid customer servisse for execution{" "}
            <br className="sm:block hidden" />
            and clearing, be that for the institutional or the{" "}
            <br className="sm:block hidden" />
            retail. Our customers are pleased with level of service on voice or
            electronic and with all the support given fromthe experts on each
            satelite area to the core business; not tomention the robustness in
            technology used to deliver value to customers and partners.
          </h3>
        </div>
      </div>

      {/* sessao 5*/}
      <div className="ss4 py-24">
        <div className="flex flex-row justify-center  max-w-6xl mx-auto ">
          <div className=" flex flex-col basis-6/12  items-center p-3 card">
            <div className="text-left">
              <img className=" mx-auto" src={app} alt="logo" />
            </div>
          </div>
          <div className=" flex flex-col basis-6/12  justify-center  ">
            <h3 className="font-semibold text-left app text-lg text-gray-50 ">
              We provide the best online experience,{" "}
              <br className="sm:block hidden" />
              enabling the use of a wide range of{" "}
              <br className="sm:block hidden" />
              platforms to serve all types of investors
            </h3>
            <p className="font-normal text-left text-sm text-gray-50 mt-4 ">
              <span className="font-bold">
                All your investments in one place.
              </span>{" "}
              <br />
              Download the Nova Futura app to invest
              <br />
              with freedom and all the support
              <br />
              you may need.
            </p>
            <div className="mt-12">
              <button className="btn-forms mt-4 py-3 px-8 text-gray-50">
                Download now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* sessao 6 - Conteudo*/}

      <div className="  mx-auto py-24 max-w-6xl px-8 sm:px-0 ">
        <h3 className="text-left  uppercase font-light my-5 pb-14 ">
          Operational Qualification
        </h3>
        <div className="  flex flex-col sm:flex-row  justify-center items-center ">
          <div className="basis-1/3 flex items-center sm:pb-0 pb-5 ">
            <img src={b3About} alt="b3About" />
          </div>
          <div className="basis-1/2 flex items-center">
            <h5 className="border-l-2 card pl-5 mt-5 font-normal capaapp ">
              B3 unifies the 5 different quality certification seals of the
              services provided by brokers and banks. In addition to providing
              more security for investors, who can use the certification to
              choose a broker of bank, the new PQO seal guarantees uniqueness
              among the existing ones (Execution Broker, Agro Broker, Carrying
              Broker, NonResident Investor Broker, and Retail Broker) and
              simplification for the market.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
