import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import throttle from '../../utils/throttle'
import './style.scss'

class LoadMore extends Component{
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.scrollHandle = this.scrollHandle.bind(this)
    this.isLoadMoreFn = this.isLoadMoreFn.bind(this)
    this.state = {
      dpr: window.dpr,
      wrapper: null
    }
  }

  componentDidMount () {
    this.setState({
      wrapper: this.refs.wrapper
    })
    this.handle = this.scrollHandle()
    window.addEventListener('scroll', this.handle)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handle)
  }

  scrollHandle () {
    return throttle(() => {
      if (this.props.isLoading) {
        return
      }
      if (!this.props.hasMore) {
        window.removeEventListener('scroll', this.handle)
        return
      }
      this.isLoadMoreFn()
    })
  }

  isLoadMoreFn () {
    const top = this.state.wrapper.getBoundingClientRect().top
    console.log(top)
    const windowHeight = window.screen.height
    if (top && (top / this.state.dpr) <  windowHeight + 6) {
      this.props.loadMoreHandle()
    }
  }

  render () {
    const { hasMore, isLoading } = this.props
    return  (
      <div className="load-more" ref="wrapper">
        {
          hasMore === false ?
            <span>没有更多了</span> :
            isLoading === true ?
              <span>加载中...</span> :
              <span onClick={this.loadMoreFnc}>加载更多</span>
        }
      </div>
    )
  }
}

export default LoadMore
