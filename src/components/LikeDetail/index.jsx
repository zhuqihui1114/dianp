import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Stars from '../Stars'
import GroupDetail from './GroupDetail'
import Image from './Image'

import './style.scss'

class LikeDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  async componentDidMount() {
    const groupId = this.props.match.params.groupId
    const res = await axios(`/assets/json/${groupId}.json`)
    this.setState({
      data: res.data
    })
    console.log(res.data)
  }

  render() {
    const data = this.state.data
    return data ? (
      <div>
        <div className="like-detail-header">
          <span className="back" onClick={() => window.history.go(-1)}>
            <i className="icon-chevron-left"></i>
            返回
          </span>
          <span className="title">团购详情</span>
        </div>
        <Image
          shopName={data.shopName}
          subName={data.subName}
          img={data.imgList}/>
        <div className="like-detail-cost">
          <div className="bug-wrap">
            <div>
              <span className="n-price"><i>￥</i>{data.c_price}</span>
              <span className="o-price"><i>￥</i>{data.o_price}</span>
            </div>
            <Link to={`/submit/${data.id}/${data.c_price}`} className="bug">立即购买</Link>
          </div>
          <ul className="advantage">
            <li>
              <i className="easy-Refunds"></i>
              <span>随时可退</span>
            </li>
            <li>
              <i className="dated-Refunds"></i>
              <span>过期自动退</span>
            </li>
          </ul>
        </div>
        <div className="like-detail-shop">
          <h3 className="top">适用商户</h3>
          <div className="middle">
            <div className="left">
              <h3>{`${data.shopName}(${data.branchName})`}</h3>
              <div>
                <Stars className="ad" stars={data.stars}/>
                <span>{data.distance}</span>
              </div>
            </div>
            <div className="right">
              <a href={`tel:${data.phoneNo}`}>
                <i className="mobile"></i>
              </a>
            </div>
          </div>
          <p className="bottom">
            <span><i></i>{data.address}</span>
          </p>
        </div>
        <GroupDetail
          groupBuyDetail={data.groupBuyDetail}
          oPrice={data.o_price}
          cPrice={data.c_price}
          id={data.id}/>
      </div>
    ) : null
  }
}

export default LikeDetail