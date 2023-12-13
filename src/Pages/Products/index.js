import React from 'react';
import Helmet from "react-helmet";

import customer from '../../assets/images/customer.png';
import customerOne from '../../assets/images/customer-one.png';
import customerTwo from '../../assets/images/customer-two.png';
import customerThree from '../../assets/images/customer-three.png';
import customerFour from '../../assets/images/customer-four.png';
import customerFive from '../../assets/images/customer-five.png';
import customerSix from '../../assets/images/customer-six.png';

import app from '../../assets/images/phoneProducts.png';

export default function Products() {
  return (
    <div>
      <Helmet>
        <title>Products - Nova Futura</title>
        <meta name="description" content="Adiconar texto"></meta>
        <meta name="keywords" content=""></meta>
      </Helmet>
      <header>
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
      {/* sessao 2 - Products*/}

      <div className="ss3  py-16">
        <div className=" max-w-6xl sm:max-md sm:mx-auto  ">
          <h5 className="h5p font-semibold pl-8 sm:pl-0">OUR PRODUCTS</h5>
          <h2 className=" font-light text-gray-50 py-8 pl-8 sm:pl-0 ">
            Products
          </h2>
          <div className=" flex flex-col sm:flex-row justify-between ">
            <div className=" flex-col basis-1/4 px-8 sm:pl-0    ">
              <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
                Equities
              </h3>
              <div className="border-solid border-2 card1 py-6 px-8 text-left ">
                <ul className=" flex flex-col  justify-center align-middle font-semibold  text-gray-50 text-xs ">
                  <li className=" font-semibold  text-gray-50  py-2 ">
                    • Cash Equities
                  </li>
                  <li className=" font-semibold  text-gray-50  py-2 ">
                    • Single Stock futures
                  </li>
                  <li className=" font-semibold  text-gray-50  py-2 ">
                    • ETFs
                  </li>
                  <li className=" font-semibold  text-gray-50  py-2 ">
                    • Equity and Index
                  </li>
                  <li className=" font-semibold  text-gray-50  py-2 ">
                    • Stock lending
                  </li>
                  <li className=" font-semibold  text-gray-50  py-2 ">
                    • BDRs
                  </li>
                  <li className=" font-semibold  text-gray-50  py-2 ">
                    • Options
                  </li>
                  <li className=" font-semibold  text-gray-50  py-2 ">
                    • Digital Options
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col  basis-1/4 px-8 sm:pl-0 ">
              <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
                Futures
              </h3>
              <div className="border-solid border-2 card1 py-6 px-8 text-left">
                <ul className=" flex flex-col justify-center align-middle font-semibold  text-gray-50 text-xs ">
                  <li className=" font-semibold  text-gray-50  py-2 ">
                    • Commodities: Beef cattle, Coffee, Soybeans, Corn, Ethanol,
                    and Gold
                  </li>
                  <li className=" font-semibold  text-gray-50  py-2 ">
                    • US Dollar and Mini Dollar
                  </li>
                  <li className=" font-semibold  text-gray-50  py-2 ">
                    • Ibovespa and Mini Ibovespa
                  </li>
                  <li className=" font-semibold  text-gray-50  py-2 ">
                    • FX Futures
                  </li>
                  <li className=" font-semibold  text-gray-50  py-2 ">
                    • Equity Indexes Futures
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col basis-2/4 px-8 sm:pl-0 ">
              <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
                Fixed income
              </h3>

              <div className="flex  basis-1/2  border-solid border-2 card1 py-4 px-0 sm:px-8 text-left">
                <div className=" flex  basis-1/2  sm:pb-3  px-8 text-left">
                  <ul className=" flex flex-col   font-semibold  text-gray-50 text-xs ">
                    <h4 className="pt-2 font-medium  text-gray-50  text-center mb-2 border-b-2 pt-3 pb-1 text-sm">
                      Products
                    </h4>
                    <li className=" font-semibold  text-gray-50  py-2 ">
                      • CDB (Certificate of Bank Deposit);
                    </li>
                    <li className=" font-semibold  text-gray-50  py-2 ">
                      • LC (Credit Letter);
                    </li>
                    <li className=" font-semibold  text-gray-50  py-2 ">
                      • LCI (Real Estate Credit Bills);
                    </li>
                    <li className=" font-semibold  text-gray-50  py-2 ">
                      • LCA (Agribusiness Credit Bills);
                    </li>
                    <li className=" font-semibold  text-gray-50  py-2 ">
                      • CRI (Real Estate Receivables Certificate);
                    </li>
                    <li className=" font-semibold  text-gray-50  py-2 ">
                      • CRA (Agribusiness Receivables Certificate);
                    </li>
                    <li className=" font-semibold  text-gray-50  py-2 ">
                      • Corporate Bonds;
                    </li>
                    <li className=" font-semibold  text-gray-50  py-2 ">
                      • Government Bonds.
                    </li>
                  </ul>
                </div>

                <div className="flex align-top basis-1/2  px-8 text-left">
                  <ul className=" flex flex-col   font-semibold  text-gray-50 text-xs ">
                    <h4 className="pt-2 font-medium  text-gray-50  text-center mb-2 border-b-2 pt-3 pb-1 text-sm">
                      Highlights
                    </h4>
                    <li className=" font-semibold  text-gray-50  py-2 ">
                      • Best rates in the market;
                    </li>
                    <li className=" font-semibold  text-gray-50  py-2 ">
                      • Possibility of secondary market trading;
                    </li>
                    <li className=" font-semibold  text-gray-50  py-2 ">
                      • Team focused on seeking opportunities;
                    </li>
                    <li className=" font-semibold  text-gray-50  py-2 ">
                      • More than 500 products available
                    </li>
                    <li className=" font-semibold  text-gray-50  py-2 ">
                      • CETIP Certification
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h3 className="pt-8 px-8 sm:pl-0 font-normal  text-gray-50  text-left mb-5">
            Execution Services
          </h3>
          <div className=" flex flex-col sm:flex-row  justify-between sm:items-center   text-center">
            <div className=" flex flex-col basis-1/2 sm:basis-1/4 bnt-p py-3 px-4 sm:px-0 mb-5 sm:mr-4 mr-0 text-gray-50">
              Direct Market Access (DMA)
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/4 bnt-p py-3 px-4 mb-5 sm:px-0 sm:mr-4 mr-0  text-gray-50">
              Colocation services
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/4 bnt-p py-3 px-4 mb-5 sm:px-0 sm:mr-4 mr-0  text-gray-50">
              Integration services
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/4 bnt-p py-3 px-4 mb-5   text-gray-50">
              Voice/Chat Execution
            </div>
          </div>
          <h3 className="pt-8 px-8 sm:pl-0 font-normal  text-gray-50  text-left  my-5">
            Customers We Serve
          </h3>
          <div className=" flex flex-col sm:flex-row  justify-between items-center  text-center">
            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img
                className="img"
                width="162"
                height="106"
                src={customer}
                alt="logo"
              />
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img
                className="img"
                width="162"
                height="106"
                src={customerOne}
                alt="logo"
              />
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img
                className="img"
                width="165"
                height="106"
                src={customerTwo}
                alt="logo"
              />
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img
                className="img"
                width="161"
                height="106"
                src={customerThree}
                alt="logo"
              />
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img
                className="img"
                width="161"
                height="106"
                src={customerFour}
                alt="logo"
              />
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img
                className="img"
                width="163"
                height="106"
                src={customerFive}
                alt="logo"
              />
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img
                className="img"
                height="107"
                width="163"
                src={customerSix}
                alt="logo"
              />
            </div>
          </div>
          <h3 className="t-8 px-8 sm:pl-0 font-normal  text-gray-50  text-left  my-5">
            Highlights
          </h3>
          <div className=" flex flex-col sm:flex-row  justify-between sm:items-center sm:mx-0 text-center">
            <div className=" flex flex-col basis-1/5 bnt-p py-3 px-1 mb-5 sm:mr-4 text-xs  text-gray-50">
              Leverage
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3 px-1 mb-5 sm:mr-4 text-xs  text-gray-50">
              Competitive cost structure
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3 px-1 mb-5 sm:mr-4 text-xs  text-gray-50">
              Robust Infrastructure
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3 px-1 mb-5 sm:mr-4 text-xs  text-gray-50">
              Strong back-office and Clearing
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3 px-1 mb-5  text-xs  text-gray-50">
              Post Trade services
            </div>
          </div>
        </div>
      </div>
      {/* sessa 2 - call to action */}
      <div className="flex justify-center items-center text-left max-w-6xl mx-auto py-24 px-8 sm:px-0  ">
        <h2 className="">
          Our founder is one of the founding <br className="sm:block hidden" />
          members of the local Futures <br className="sm:block hidden" />
          Exchange formerly named BM&F.
        </h2>
      </div>
      {/* sessa 3 - Services*/}
      <div className="ss4 py-24">
        <div className="flex flex-col sm:flex-row justify-center  max-w-6xl sm:mx-auto mx-10">
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
