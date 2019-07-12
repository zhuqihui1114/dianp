import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'
import asyncComponent from '../components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('../containers/Home'))

class RouterMap extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
  }

  render () {
    return (
      <Router>
          <Route exact path="/" component={AsyncHome} />
      </Router>
    )
  }
}

export default RouterMap
