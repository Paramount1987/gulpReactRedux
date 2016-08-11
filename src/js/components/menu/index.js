import React       from 'react';
import { Link }    from 'react-router';

const Menu = React.createClass({

   render() {
      return (
         <nav className="menu">
            <ul className="menu-list">
               <li><Link to="/">Главная</Link></li>
               <li><Link to="/stock">Акции</Link></li>
               <li><Link to="/products">Продукты</Link></li>
               <li><Link to="/about">О любятово</Link></li>
            </ul>
         </nav>
      )
   }
});

export default Menu;
