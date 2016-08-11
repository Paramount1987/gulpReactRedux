import React       from 'react';

const Footer = React.createClass({

   render() {
      return (
         <div className="">
            <ul className="list-inline footer-list">
               <li><a href="#">Подписка на новости</a></li>
               <li><a href="#">Обратная связь</a></li>
               <li><a href="#">Политика конфиденциальности</a></li>
            </ul>
         </div>
      )
   }
});

export default Footer;
