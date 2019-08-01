import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss'

const DiscountItem = ({item}) => (
  <a href="/#/">
    <img src={item.imageUrl} alt={item.featureTitle}/>
    <span className='name'>{item.shortTitle}</span>
    <p>
      <span className='price'><em>￥</em>{item.price}</span>
      <span className='mark-price'>￥{item.markPrice}</span>
    </p>
  </a>
)

class HomeDiscount extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <div className='home-discount'>
        <p className='title'>
          <span className='title-left'></span>
          <span className='more'>更多优惠<i className='icon-angle-right'></i></span>
        </p>
        <div className='content'>
          {
            this.props.list.map((item, index) => (
              <DiscountItem item={item} key={index}></DiscountItem>
            ))
          }
        </div>
      </div>
    )
  }
}

export default HomeDiscount