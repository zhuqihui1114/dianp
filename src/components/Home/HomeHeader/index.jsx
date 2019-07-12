import React, { Component } from 'react'
import './style.scss'
import axios from 'axios'

class HomeHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="home-header">
                <div className="home-header-left">
                    <div className="city-name" >
                        <span>{this.props.cityName}<i className="icon-angle-down"></i></span>
                    </div>
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
