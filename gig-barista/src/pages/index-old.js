import React from 'react'
import Link from 'gatsby-link'

import DailyForm from "../components/daily-form/daily-form.js"
import CoffeeList from "../components/coffee-list/coffee-list.js"
import CoffeeDetail from "../components/coffee-detail/coffee-detail.js"

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>

    <DailyForm />
    <CoffeeList />
    <CoffeeDetail />
  </div>
)

export default IndexPage;
