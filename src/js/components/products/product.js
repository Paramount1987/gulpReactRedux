import React       from 'react';

const Product = React.createClass({

   render() {
      return (
         <div className="product-item">
            <img src="images/2.png" alt=""/>
            <div className="product-name">{this.props.product.name}</div>
         </div>
      )
   }
});

export default Product;
