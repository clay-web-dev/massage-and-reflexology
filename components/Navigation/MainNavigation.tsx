import Link from "next/link";
import BurgerMenu from "../BurgerMenu";
import NavItem from "./NavItem";
import Header from "./Header";
import ModalForm from "../ModalForm";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import Light from "../../assets/light.svg";

const MainNavigation: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setModalOpen(false);
  };

  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full max-lg:shadow-lg max-lg:fixed ${
        navbarVisible ? "fixed shadow-lg bg-white" : "absolute bg-transparent "
      }`}
    >
      <Header />
      <nav className="flex justify-between m-auto max-w-screen-lg max-lg:px-4 max-lg:bg-white">
        <BurgerMenu />
        <div className="py-2">
          <Link href="/">
            <Image
              src={Logo}
              alt="Painting and decorating logo"
              className="w-24"
            />
          </Link>
        </div>

        <ul className="menu-list max-lg:hidden menu flex">
          <NavItem pageLink="/" copy="Home" handleClick={function () {}} />
          <NavItem
            pageLink="/about"
            copy="About"
            handleClick={function () {}}
          />
          <NavItem
            pageLink="/residential"
            copy="Residential"
            handleClick={function () {}}
          />
          <NavItem
            pageLink="/commercial"
            copy="Commercial"
            handleClick={function () {}}
          />
          <NavItem
            pageLink="/exterior"
            copy="Exterior"
            handleClick={function () {}}
          />
          <NavItem
            pageLink="/testimonials"
            copy="Testimonials"
            handleClick={function () {}}
          />
          <NavItem
            pageLink="/contact"
            copy="Contact"
            handleClick={function () {}}
          />
        </ul>

        <button onClick={openModal} className="">
          <span className="border-2 border-blue-800 rounded uppercase text-xs font-bold text-blue-900 p-2 hover:bg-blue-900 hover:text-white duration-200">
            Get a Quote{" "}
          </span>
        </button>
        {isModalOpen && <ModalForm handleClose={closeModal} />}
      </nav>
    </header>
  );
};

export default MainNavigation;
