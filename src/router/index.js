import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import asyncComponent from '../components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('../containers/Home'))
const AsyncLikeDetail = asyncComponent(() => import('../components/LikeDetail'))
const AsyncHeadLine = asyncComponent(() => import('../containers/HeadLine'))

class RouterMap extends Component {
  // constructor (props) {
  //   super(props)
  // }

  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AsyncHome}/>
          <Route path="/headLine" component={AsyncHeadLine} />
          <Route path="/likedetail/:groupId" component={AsyncLikeDetail}/>
        </Switch>
      </Router>
    )
  }
}

export default RouterMap
