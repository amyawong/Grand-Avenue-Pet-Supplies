import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>Sorry, that product is unavailable</p>
      <p>
        Check out our available products <Link to="/products">here</Link>
      </p>
    </div>
  );
};

export default NotFound;
