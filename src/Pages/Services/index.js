import React from 'react';
import "./Services.css";
import Helmet from "react-helmet";

import app from '../../assets/images/phoneProducts.png';

export default function About() {
  return (
    <div>
      <Helmet>
        <title>Contact - Nova Futura</title>
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
      {/* sessa 1*/}
      <div className="ss2 max-w-6xl mx-auto py-16 px-8 sm:px-0 ">
        <div className="flex flex-col sm:flex-row  justify-center sm:items-center  justify-between">
          <div>
            <h5 className="font-semibold">SERVICES WE OFFER</h5>
            <h2 className=" font-light font-normal ">Services</h2>
          </div>
          <div className="flex  items-end">
            <h5 className=" sm:mt-0 mt-6 text-left font-medium sm:text-right h5s">
              Our teams can help you understand the market and infrastructure to
              assess your <br className="sm:block hidden" />
              decision to invest locally and have you set for trading:
            </h5>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className=" flex flex-col basis-6/12  mt-12 sm:mr-32">
            <div className="py-12 sm:py-24 px-6  flex flex-col justify-center cardServ ">
              <p className="text-gray-50 text-lg">
                • Hardware procurement <br />
                • Due Diligence Questionnaire <br />
                • Product details <br />
                • Exchange fees simulation <br />
                • Initial Margin Simulations <br />
                • Exchange Incentives for new customers <br />• Market Making
                Benefits and Programs
              </p>
            </div>
          </div>
          <div className=" flex flex-col basis-6/12  mt-12  sm:ml-32">
            <div className="py-12 sm:py-24  px-6   flex flex-col justify-center cardServ ">
              <p className="text-gray-50 text-lg">
                • Historical Market Data (BackTest)
                <br />
                • End of Day Market Data PCAP Files (ns)
                <br />
                • Daily Closing Prices
                <br />
                • Collocated server for real time market data{" "}
                <br className="sm:block hidden" />
                collection,ertification and early prod tests{" "}
                <br className="sm:block hidden" /> (quick setup for all
                environments)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* sessa 2*/}
      <div className="ss3 ">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto py-16 px-8 sm:px-0">
          <div className=" flex flex-col basis-6/12  mt-12 ">
            <h5 className="font-semibold uppercase text-white mb-5">
              Execution
            </h5>
            <h2 className="  font-light h2b text-white">
              Detailed Services <br />
              Focused on high
              <br />
              Performing electronic
              <br />
              Trading
            </h2>
            <br />
            <h5 className=" pt-2 text-left font-medium text-white">
              Our dedicated team does a proactive, careful and highquality{" "}
              <br className="sm:block hidden" />
              real-time monitoring and can help tailor made the best{" "}
              <br className="sm:block hidden" />
              trading solution for your needs:
            </h5>
          </div>
          <div className=" flex flex-col basis-6/12  mt-12 ">
            <div className="py-12 sm:py-24 sm:px-12 px-8  flex flex-col justify-center cardServ2 sm:ml-32 ">
              <p className="text-gray-50 text-lg ">
                • Order Entry Fine Tuning
                <br />
                • Latency+MsgsExcess Monitoring
                <br />
                • Normalized Market Data
                <br />
                • Colocation Infra Management <br />
                • Global Connectivity <br />• Infrastructure as Service
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* sessa 3*/}
      <div className="ss4-S ">
        <div className="flex flex-col sm:flex-row justify-between max-w-6xl mx-auto py-16 px-8 sm:px-0">
          <div className=" flex flex-col basis-6/12  mt-12 ">
            <h5 className="font-semibold uppercase mb-5">Post trade</h5>
            <h2 className="  font-light  ">
              Detailed Services
              <br />
              Focused on high <br />
              Performing <br />
              Electronic trading
            </h2>
            <br />
            <h5 className=" pt-2 text-left font-medium h5s2 ">
              Besides all services provided by our efficient middle and{" "}
              <br className="sm:block hidden" />
              backoffice teams, Nova Futura tech teams can also offer{" "}
              <br className="sm:block hidden" />
              the below electronic post trade services:
            </h5>
          </div>
          <div className=" flex flex-col basis-6/12  mt-12 ">
            <div className="py-12 sm:py-24 sm:px-12 px-8  flex flex-col justify-center cardServ sm:ml-32 ">
              <p className="text-gray-50 text-lg">
                • SFTP File Transfers
                <br />
                • WebServices
                <br />
                • Drop Copy FIX 4.4 and 4.2
                <br />
                • Enriched Drop Copy (voice+electronic
                <br />• Reverse Staging to Bloomberg EMSX
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* sessa 4*/}

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
    </div>
  );
}
