import  React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HeadLineItem from './HeadLineItem/index'

import './style.scss'


class HomeHeadLine extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      index: 0,
      isShow: true
    }
      console.log('HomeHeadLine create')
  }

  componentDidMount () {
  console.log('HomeHeadLine componentDidMount')
    const len = this.props.list.length
    this.timer = setInterval(() => {
        this.setState({
            index: (this.state.index + 1) % len,
            isShow: !this.state.isShow
        })
    }, 4000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
      console.log('HomeHeadLine componentWillUnmount')
  }

  render () {
    const list = this.props.list
      console.log('ddddddddddddddddddddddddddddddddddddddddddddddddd' + list)
    return (
      <div className="home-head-line">
        <span className="title"></span>
        <div className="wrapper">  
          <CSSTransitionGroup
            transitionName="move-top"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000} >
            {
              this.state.isShow ?
              <HeadLineItem item={list[0]} /> : null
            }
          </CSSTransitionGroup>
          <CSSTransitionGroup
            transitionName="move-top"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000} >
            {
              this.state.isShow === false ?
              <HeadLineItem item={list[0]} /> : null
            }
          </CSSTransitionGroup>
          
        </div>
      </div>
    )
  }
}

export default HomeHeadLine
