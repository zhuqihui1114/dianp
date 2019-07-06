import React, { Component } from 'react'
import HomeHeader from './HomeHeader'
import Category from './Category'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        console.log('componentDidMount')
        const homeInfo = this.props.getHomeInfo()
    }

    render() {
        return (
            <div>
                {this.props.cityName}
                <HomeHeader></HomeHeader>
                <Category />
            </div>
        )
    }
}

export default Home
