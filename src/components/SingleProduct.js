import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProduct } from "../store/singleProduct";

export class SingleProduct extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    this.props.getSingleProduct(this.props);
  }

  render() {
    console.log("this.props: ", this.props);
    const product = this.props.product;
    return (
      <div className="">
        <p>{product.name}</p>
        <img src={product.imageURL} alt={product.name} />
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.weight}</p>
        <p>{product.brand}</p>
        <p>{product.animal}</p>
        <p>{product.category}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.singleProduct,
});

const mapDispatchToProps = (dispatch) => ({
  getSingleProduct: (id) => dispatch(fetchProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
