import React, {Component} from 'react'
import {CSSTransitionGroup} from 'react-transition-group'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HeadLineItem from './HeadLineItem/index'
import PropTypes from 'prop-types'

import './style.scss'


class HomeHeadLine extends Component {
  //声明属性
  static propTypes = {
    list:PropTypes.array.isRequired,
  }


  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      index: 0,
      isShow: true
    }
    console.log('HomeHeadLine create')
  }

  componentDidMount() {
    console.log('HomeHeadLine componentDidMount')
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log('HomeHeadLine componentWillUnmount')
  }

  render() {
    const list = this.props.list
    let showItem = {}
    clearInterval(this.timer)
    if (list.length > 0) {
      this.timer = setInterval(() => {
        this.setState({
          index: (this.state.index + 1) % list.length,
          isShow: !this.state.isShow
        })
      }, 4000)

      showItem = list[this.state.index]
    }

    return (
      <div className="home-head-line">
        <span className="title"></span>
        <div className="wrapper">
          <CSSTransitionGroup
            transitionName="move-top"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
            {
              this.state.isShow ?
                <HeadLineItem item={showItem}/> : null
            }
          </CSSTransitionGroup>
          <CSSTransitionGroup
            transitionName="move-top"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
            {
              this.state.isShow === false ?
                <HeadLineItem item={showItem}/> : null
            }
          </CSSTransitionGroup>

        </div>
      </div>
    )
  }
}

export default HomeHeadLine
