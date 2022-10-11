import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/products">Products</Link>
      <Link to="/feed">Bird Feed</Link>
      <Link to="/live">Live Animals</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

// const mapStateToProps = (state) => {

// const mapDispatchToProps = (dispatch) =>

export default Navbar;
