import React from "react";
import Container from "./Container";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { Link } from "react-scroll";

const HeaderSection = () => {
  return (
    <header className="bg-white z-50 relative">
      <nav className="bg-white fixed w-full shadow-sm py-4 dark:bg-neutral-800">
        <Container>
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex gap-2 items-center">
              <img src="./public/brand-logo.png" className="h-8" alt="" />
              <span className="self-center text-xl pt-1 font-medium whitespace-nowrap dark:text-white">
                GlucoBites
              </span>
            </a>

            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="text-white bg-neutral-100  hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-base px-5 hover:shadow-md py-2  dark:bg-primary-600 dark:hover: focus:outline-none dark:focus:ring-primary-800"
              >
                <AnimatedShinyText>Get Started</AnimatedShinyText>
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-neutral-500 rounded-lg lg:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="home"
                    smooth={true}

                    className="block cursor-pointer py-2 pr-4 pl-3 text-neutral-900 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    smooth={true}

                    className="block cursor-pointer py-2 pr-4 pl-3 text-ink border-b border-neutral-100 hover:bg-neutral-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-neutral-400 lg:dark:hover:text-white dark:hover:bg-neutral-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-neutral-700"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="features"
                    smooth={true}
                    className="block cursor-pointer py-2 pr-4 pl-3 text-ink border-b border-neutral-100 hover:bg-neutral-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-neutral-400 lg:dark:hover:text-white dark:hover:bg-neutral-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-neutral-700"
                  >
                    Features
                  </Link>
                </li> 
                <li>
                  <a
                    href="#"
                    className="block cursor-pointer py-2 pr-4 pl-3 text-ink border-b border-neutral-100 hover:bg-neutral-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-neutral-400 lg:dark:hover:text-white dark:hover:bg-neutral-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-neutral-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default HeaderSection;
