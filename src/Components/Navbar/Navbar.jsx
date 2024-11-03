import { NavLink, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import BurgerButton from "../BurgerButton/BurgerButton";

export default function Navbar(props) {
    var navigate = useNavigate();

    function toggleOnChange() {
        props.setNavbarChecked(x => !x);
    }

    function titleClick() {
        navigate("/");
    }

    return (
        <div className="Navbar-Container">
            <div className="Navbar FullWidth" id="Navbar">
                <div className="Navbar-Title-Container">
                    <h1 className="Navbar-Title" onClick={titleClick}><span className="colored">ackermann</span> web design</h1>
                    <BurgerButton onclick={toggleOnChange}/>
                </div>
                <div className={`Navbar-Links ${props.navbarChecked ? "Navbar-Links-Toggled" : ""}`}>
                    <NavLink to="/" className="Navbar-Link">home</NavLink>
                    <NavLink to="/projects" className="Navbar-Link">projects</NavLink>
                    <NavLink to="/about" className="Navbar-Link">about us</NavLink>
                </div>
            </div>
            <div className="Navbar-Placeholder"></div>
        </div>
    )
}