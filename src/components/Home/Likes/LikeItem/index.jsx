import React from 'react'
import LazyLoad from 'react-lazy-load'
import {withRouter } from 'react-router';

import './style.scss'

const LikeItem = (props) => (
  <li className='like-list-item'onClick={() => handlerClick(props)}>
    <div className='img-tag'>免预约</div>
    <LazyLoad>
      <img src={props.defaultPic} alt={props.shopName}/>
    </LazyLoad>
    <div className='item-content'>
      <section className='item-content-top'>
        <span className='name'>{props.shopName}</span>
        <span className='distance'>{props.distance}</span>
      </section>
      <section className='item-content-middle'>
        <span className='desc'>{props.dealGroupTitle}</span>
      </section>
      <section className='item-content-bottom'>
        <span className='price'>
          <strong>￥{props.dealgroupPrice}</strong>
          { props.marketPrice ? <em>￥{props.marketPrice}</em> : null }
        </span>
        <span className='number'>{props.salesdesc}</span>
      </section>
    </div>
  </li>
)

const handlerClick = function(props) {
  props.history.push('/likedetail/23963176')
}

export default withRouter(LikeItem)
