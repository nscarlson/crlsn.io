import { node } from 'prop-types'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

const Layout = ({ children }) => (
  <div className="layout">
    <Switch>
      <Header />
    </Switch>
    {children}
    <Footer />
  </div>
)

Layout.displayName = 'Layout'

Layout.propTypes = {
  children: node,
}

export default Layout