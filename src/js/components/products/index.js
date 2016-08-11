import React       from 'react';

import Product     from './product';
import Filter      from './filter'

const Products = React.createClass({

   componentDidMount(){
     console.log('products mounted');
      this.props.getProducts();
   },

   render() {

      //const { products } = this.props;
      return (
         <div className="">
            <h1>Продукты</h1>
            <Filter filterProduct={this.props.filterProduct}/>
            <ul>
               {this.props.product.catalog.map( (item, i) =>
                  <li key={i}><Product product={item}  /></li>
               )}
            </ul>
         </div>
      )
   }
});

export default Products;
