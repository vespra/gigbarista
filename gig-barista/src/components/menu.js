import React from 'react'
import Link from 'gatsby-link'

var FaCog = require('react-icons/lib/fa/cog');
var FaTh = require('react-icons/lib/fa/th');
var FaTachometer = require('react-icons/lib/fa/dashboard');
var FaCoffee = require('react-icons/lib/fa/coffee');

const Menu = () => (
  <div className='menu'>
    <Link to="/setup/"><FaCog /></Link>
    <Link to="/coffee-list/"><FaTh /></Link>
    <Link to="/"><FaTachometer /></Link>
    <Link to="/"><FaCoffee /></Link>
  </div>
)

export default Menu
