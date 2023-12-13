import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo_nf.png';

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className=" header max-w-6xl mx-auto">
      <div className="   ">
        <div className="   ">
          <div className=" flex-row h-16 flex items-center justify-between sm:items-stretch sm:justify-between">
            <div className=" items-center ">
              <img className="h-20 w-auto" src={logo} alt="logo" />
            </div>
            <div className="flex-1  items-center justify-center hidden sm:ml-6 sm:block">
              <div className="flex h-16 items-center justify-center nav ">
                <p className="font-bold px-4 py-2 text-xs" onClick={() => navigate('/')}>
                  HOME
                </p>
                <p className="font-bold px-4 py-2 text-xs" onClick={() => navigate('/about')}>
                  ABOUT
                </p>
                <p className="font-bold px-4 py-2 text-xs" onClick={() => navigate('/products')}>
                  PRODUCTS
                </p>
                <p className="font-bold px-4 py-2 text-xs" onClick={() => navigate('/services')}>
                  SERVICES
                </p>
                <p className="font-bold px-4 py-2 text-xs" onClick={() => navigate('/contact')}>
                  CONTACT
                </p>
              </div>
            </div>
            <div className="flex  items-center justify-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a
                href="/#forms"
                className=" text-sm btn-forms text-white py-2 px-8 font-medium"
                aria-current="page"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="flex-1  items-center justify-center sm:hidden block ">
            <div className="flex h-16 items-center justify-center nav ">
              <p className=" font-bold px-2 py-2 text-xs" onClick={() => navigate('/')}>
                HOME
              </p>
              <p className="font-bold px-2 py-2 text-xs" onClick={() => navigate('/about')}>
                ABOUT
              </p>
              <p className="font-bold px-2 py-2 text-xs" onClick={() => navigate('/products')}>
                PRODUCTS
              </p>
              <p className="font-bold px-2 py-2 text-xs" onClick={() => navigate('/services')}>
                SERVICES
              </p>
              <p className="font-bold px-2 py-2 text-xs" onClick={() => navigate('/contact')}>
                CONTACT
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}