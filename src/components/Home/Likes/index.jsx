import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LikeItem from './LikeItem'
// import LikeHover from './LikeHover'
// import { CSSTransitionGroup } from 'react-transition-group'
import './style.scss'

class Likes extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
      <div className='home-likes' ref='likes'>
        <p className='likes-title'>猜你喜欢</p>
        <ul className='likes-list'>
          {
            this.props.list.map((item, index) => <LikeItem key={index} {...item}></LikeItem>)
          }
        </ul>
      </div>
    )
  }
}

export default Likes
