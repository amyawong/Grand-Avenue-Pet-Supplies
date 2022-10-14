import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { getProducts } from "../store/allProducts";
import { fetchProducts } from "../store/allProducts";

export class AllProducts extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     term: "",
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  // }

  componentDidMount() {
    // console.log("hello");
    this.props.getAllProducts();
  }

  // handleChange(event) {
  //   this.setState({ ...this.state, term: event.target.value })
  // }

  render() {
    console.log("props", this.props);
    // console.log('term: \n', this.state.term)
    // const { products } = this.props;
    const products = this.props.products || [];

    return (
      <div>
        {/* {console.log("this.props", this.props)} */}
        <p>all products</p>
        {products.map((product) => (
          // product.name.toLowerCase().includes(this.state.term.toLowerCase()) ? (
          <div key={product.id}>
            <Link to={`products/${product.id}`}>
              <img src={product.imageURL} alt={`${product.name}`} />
            </Link>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          // ) : (
          // ""
          // )
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  // getAllProducts: () => dispatch(getProducts())
  getAllProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
