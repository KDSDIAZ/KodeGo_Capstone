import React from "react";
import Logo from "../BUDGET_BUDDY_logo-removebg-preview.png";
import Login from "./Login";
import NavListL from "./NavList_L";
import SignUpButton from "./SignUp_Button";
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="inline-flex gap-10 items-center justify-around content-center align-middle w-full mx-0 px-10 h-16 bg-theme-main">
      <section className="w-48 inline-flex align-middle items-center">
        <img src={Logo} alt="logo" className="h-16 flex justify-start" />
        <label className="text-white font-bold">
          BUDGET <span className="text-theme-accent">BUDDY</span>
        </label>
      </section>
      <NavListL />
      <section className="inline-flex gap-2">
        <SignUpButton />
        <Login />
      </section>
    </nav>
  );
};

export default Navbar;
