import React from 'react'
import PropTypes from 'prop-types'

import Menu from '../components/menu';

import './index.css'
import styles from "./layout.scss";

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

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
