import React from 'react';
import Link from 'gatsby-link'

import styles from './coffee-single.scss';
var FaArrow = require('react-icons/lib/fa/chevron-right');

const CoffeeSingle = class extends React.Component {
  render() {
    const {coffee, i} = this.props;
    return (
      <div key={coffee.id} className="single-coffee-container">
       <div className="coffee-box" onClick={() => this.props.addCoffee(coffee)}>
         <img src={coffee.imageUrl} />
         <p className="coffee-title">{coffee.name}</p>
       </div>

       {coffee.can_have_milk || coffee.can_have_ice ?
         (
           <Link to="/single-coffee/" onClick={() => this.props.updateCoffee(coffee)} className="customize-btn small">
            Custom
            <FaArrow />
           </Link>
         ) : (
           <div className="customize-btn small not-active">
             Custom
             <FaArrow />
           </div>
         )
       }

     </div>
    )
  }
}

export default CoffeeSingle;
