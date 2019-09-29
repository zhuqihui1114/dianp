import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LazyLoad from 'react-lazy-load'
import './style.scss'

const ReduceItem = ({item}) => (
  <a href="/#/">
    <LazyLoad>
      <img src={item.imageUrl} alt={item.featureTitle}/>
    </LazyLoad>
    <span className='name'>{item.shortTitle}</span>
    <p>
      <span className='price'><em>￥</em>{item.price}</span>
      {
        item.tag !== '' ? <span className="tag">{item.tag}</span> : null
      }
    </p>
  </a>
)

class HomeReduce extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <div className='home-reduce'>
        <p className='title'>
          <span className='title-left'></span>
          <span className='more'>更多优惠<i className='icon-angle-right'></i></span>
        </p>
        <div className='content'>
          {
            this.props.list.map((item, index) => (
              <ReduceItem item={item} key={index}></ReduceItem>
            ))
          }
        </div>
      </div>
    )
  }
}

export default HomeReduce