import React       from 'react';

const Filter = React.createClass({

   filterProducts(filter){
      this.props.filterProduct(filter);
   },

   render() {
      return (
         <div className="">
            <ul className="list-inline">
               <li>
                  <a href="#" onClick={this.filterProducts.bind(null, '1')}>печенье</a>
               </li>
               <li>
                  <a href="#" onClick={this.filterProducts.bind(null, '2')}>готовые завтраки</a>
               </li>
               <li>
                  <a href="#" onClick={this.filterProducts.bind(null, '3')}>крекеры</a>
               </li>
            </ul>
         </div>
      )
   }
});

export default Filter;
