import React       from 'react';
import Menu        from './menu';
import Footer        from './footer';

const Main = React.createClass({

   render(){

      return (
         <div>
            <Menu/>
            { React.cloneElement(this.props.children, this.props) }
            <Footer/>
         </div>
      )
   }
})

export default Main;