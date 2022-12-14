import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              {" "}
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              {" "}
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              {" "}
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            <h1> H8 STORE</h1>
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home Page
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About page
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon></SearchIcon>
            <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
