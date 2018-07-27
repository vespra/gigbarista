import React from 'react'
import PropTypes from 'prop-types'

/*import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";*/

import Menu from '../components/menu';

import './index.css'
import styles from "./layout.scss";

/*function mapStateToProps(state) {
  return {
    config: state.config,
    coffees: state.coffees
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}*/

const Layout = ({ children, data }) => (
  <div>
    <div className='inner'>
    <div className='main-container'>
      {children()}
    </div>
    <Menu />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

//export default connect(mapStateToProps, matchDispatchToProps)(Layout);
export default Layout;
