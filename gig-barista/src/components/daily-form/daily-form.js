import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateDailyForm } from '../../actions/index';
import styles from "./daily-form.scss";

const DailyForm = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'coffeeType': this.props.config.coffee_bean_type,
      'coffeeAmount': this.props.config.coffee_amount
    };

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

  handleSubmit(e) {
    e.preventDefault();
    const coffeeLocation = this.props.config.coffee_station_location;
    const coffeeStation = this.props.config.coffee_station;
    const coffeeType = this.refs.coffeeType.value;
    const coffeeAmount = this.refs.coffeeAmount.value;

    this.props.updateDailyForm(coffeeLocation, coffeeStation, coffeeType, coffeeAmount);
  }

  render() {
    return (
      <div className="daily-form-container">
        <h2>Good Morning</h2>
        <p>Time to set up the daily coffee</p>
        <form ref="dailyConfigForm" onSubmit={this.handleSubmit}>
          <label>
            Coffee Location
            <input type="text" ref="coffeeLocation" value={this.props.config.coffee_station_location} readOnly />
          </label>
          <label>
            Coffee Station
            <input type="text" ref="coffeeStation" value={this.props.config.coffee_station} readOnly/>
          </label>
          <label>
            Coffee Bean Type
            <input type="text" ref="coffeeType" name="coffeeType" value={this.state.coffeeType} onChange={this.handleInputChange}/>
          </label>
          <label>
            Coffee Amount in grams
            <input type="number" ref="coffeeAmount" name="coffeeAmount" value={this.state.coffeeAmount} onChange={this.handleInputChange}/>
          </label>

          <input type="submit" value="Submit" className="submit-btn"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config
  };
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({updateDailyForm: updateDailyForm}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DailyForm);
