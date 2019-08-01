import React from 'react'

import './style.scss'

const LikeItem = (props) => (
  <li className='like-list-item'>
    <div className='img-tag'>免预约</div>
    <img src={props.defaultPic} alt={props.shopName}/>
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

export default LikeItem
