import React from 'react';
import { connect } from 'react-redux';

import styles from './coffee-detail.scss';


var FaMilk = require('../../assets/icons/milk');
var FaIce = require('../../assets/icons/icecubes');
var FaCoffeeBean = require('../../assets/icons/coffee-bean');
var FaWeight = require('../../assets/icons/weight');

const CoffeeDetail = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'milk': 'test',
      'ice': 'test'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('');
    const coffeeLocation = this.props.config.coffee_station_location;
    const coffeeStation = this.props.config.coffee_station;
    const coffeeType = this.props.config.coffeeType.value;
    const coffeeAmount = this.refs.coffeeAmount.value;

    console.log('');
    //this.props.updateDailyForm(coffeeLocation, coffeeStation, coffeeType, coffeeAmount);

    event.preventDefault();
  }

  render() {

    // index of the coffees
    //const i = this.props.coffees.findIndex((coffee) => coffee.id === 1);
    // get us the coffee
    const coffee = this.props.coffee;
    const coffeeAmount = this.props.config.coffee_amount * this.props.coffee.coffee_used;


    if (coffee.length <= 0) {
      return (<h2>Select a coffee...</h2>)
    }
    return (
      <div className="coffee-form-container">
        <div className="left-side-container">
          <h2>{coffee.name}</h2>
          <img src={coffee.imageUrl} />
        </div>
        <div className="right-side-container">
          <form ref="coffeForm" onSubmit={this.handleSubmit}>
            {coffee.can_have_milk &&
              <label>
                <div className="icon"><FaMilk /></div>
                <select ref="milkType" onChange={this.handleInputChange}>
                  <option value="Full Fat">Full Fat</option>
                  <option value="Semi Skimmed">Semi Skimmed</option>
                  <option value="Almond">Almond</option>
                  <option value="Soya">Soya</option>
                </select>
              </label>
            }

            {coffee.can_have_ice &&
              <label>
                <div className="icon"><FaIce /></div>
                <select>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
            }
            <hr />
            <label>
              <div className="icon"><FaCoffeeBean /></div>
              <input type="text" ref="coffeeType" name="coffeeType" value={this.props.config.coffee_bean_type} className="readonly" readOnly />
            </label>
            <label>
              <div className="icon"><FaWeight /></div>
              <input type="number" ref="coffeeAmount" name="coffeeAmount" value={coffeeAmount} className="readonly" readOnly />
            </label>

            <input type="submit" value="Submit" className="submit-btn"/>
          </form>
        </div>
      </div>



      /*<div>
        <h2> {this.props.coffee.name}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Milk Type:
            <select>
              <option value="Full Fat">Full Fat</option>
              <option value="Semi Skimmed">Semi Skimmed</option>
              <option value="Almond">Almond</option>
              <option value="Soya">Soya</option>
            </select>
          </label>
          <label> Ice:
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>*/
    )
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
    coffee: state.active
  };
}

//export default CoffeeDetail;
export default connect (mapStateToProps)(CoffeeDetail);
