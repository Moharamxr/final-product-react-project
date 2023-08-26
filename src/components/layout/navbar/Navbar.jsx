import React, { useContext } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { gState } from "../../../context/Context";

const Navbar = () => {
  const navigate = useNavigate();
  const { data } = useContext(gState);
  const { isLoggedIn, userData } = data;
  const { image } = userData;
  return (
    <nav className="navbar navbar-dark bg-dark p-2">
      {isLoggedIn && (
        <> 
        <figure
              onClick={() => navigate("/settings")}
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center m-0"
            >
              <img
                src={image}
                width={60}
                className="rounded-circle img-thumbnail"
                alt=""
              />
            </figure>
            
        <ul className="navbar-nav flex-row gap-3 align-items-center justify-content-end">
          
          <li className="nav-item">
            
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link" to={"/products"}>
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/about"}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/contact"}>
              Contact
            </NavLink>
          </li>
          <li className="nav-item ms-auto">
            <NavLink className="nav-link" to={"/login"}>
              Login
            </NavLink>
          </li>
          <li className="nav-item ms-auto">
            <NavLink className="nav-link" to={"/register"}>
              Register
            </NavLink>
          </li>
        </ul>
        </>
       
      )}
      {!isLoggedIn && (
        <div className="bg-dark p-3">
          <h3 className="text-white">Welcome Back!</h3>
        <ul className="navbar-nav flex-row gap-3 d-flex ">
          <li className="nav-item">
            <NavLink className="nav-link text-white" to={"/register"}>
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to={"/login"}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      )}
    </nav>
  );
};

export default Navbar;
