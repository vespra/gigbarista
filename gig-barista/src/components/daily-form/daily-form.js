import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateDailyInfo } from '../../actions/index';
import styles from "./daily-form.scss";

const DailyForm = class extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="daily-form-container">
        <h2>Good Morning</h2>
        <p>Time to set up the daily coffee</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Coffee Location
            <input type="text" name="coffeeLocation" value={this.props.default.coffee_station_location} onChange={this.handleInputChange} readOnly />
          </label>
          <label>
            Coffee Station
            <input type="text" name="coffeeStation" value={this.props.default.coffee_station} onChange={this.handleInputChange} readOnly/>
          </label>
          <label>
            Coffee Bean Type
            <input type="text" name="coffeeType" value={this.props.default.coffee_bean_type} onChange={this.handleInputChange} />
          </label>
          <label>
            Coffee Amount in grams
            <input type="number" name="coffeeAmount" value={this.props.default.coffee_amount} onChange={this.handleInputChange} />
          </label>

          <input type="submit" value="Submit" className="submit-btn"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    default: state.default[0]
  };
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({updateDailyInfo: updateDailyInfo}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DailyForm);
