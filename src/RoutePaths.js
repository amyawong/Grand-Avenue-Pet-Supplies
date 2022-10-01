import React, { Component } from "react"
import { Route, Routes, withRouter } from "react-router-dom"
// import { connect } from "react-redux"

// components
// import About from "./components/About"
// import AddProduct from "./components/AddProduct"
// import Admin from "./components/Admin"
// import AdminShop from "./components/AdminShop"
// import AdminUsers from "./components/AdminUsers"
// import AllProducts from "./components/AllProducts"
// import Contact from "./components/Contact"
// import Favorites from "./components/Favorites"
import Home from "./components/Home"
// import Live from "./components/Live"
// import Login from "./components/Login"
// import NotFound from "./components/NotFound"
// import SignUp from "./components/SignUp"
// import SingleProduct from "./components/SingleProduct"
// import UpdateProduct from "./components/UpdateProduct"
// import UpdateUser from "./components/UpdateUser"
// import UserProfile from "./components/UserProfile"
// import  from "./components/"

class RoutePaths extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData();
  // }
  
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route path="/admin/products" element={<AdminShop />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route exact path="/products" element={<AllProducts />} />
          <Route path="/proudcts/add" element={<AddProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/live" element={<Live />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/products/:id" element={<SingleProduct />} />
          <Route exact path="/products/:id/update" element={<UpdateProduct />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    )
  }
}

export default RoutePaths;

// const mapStateToProps = (state) =>

// const mapDispatchToProps = (dispatch) =>