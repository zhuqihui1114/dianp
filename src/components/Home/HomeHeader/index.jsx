import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

class HomeHeader extends Component {
  constructor(props) {
    super(props)
    console.log('create HomeHeader')
  }

  render() {
    return (
      <div className="home-header">
        <div className="home-header-left">
          <Link to="/city" className="city-name">
            <span>{this.props.cityName}<i className="icon-angle-down"></i></span>
          </Link>
        </div>

        <div className="home-header-center">
          <i className="icon-search"></i>
          <input type="text" placeholder="输入商户名、地点"/>
        </div>

        <div className="home-header-right">
          <a href="/#/">用户中心</a>
        </div>
      </div>
    )
  }
}

export default HomeHeader
