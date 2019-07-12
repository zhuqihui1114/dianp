import React, { Component } from 'react'
import HomeHeader from './HomeHeader'
import Category from './Category'
import Loading from '../Loading'

class Home extends Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount () {
        console.log('componentDidMount')
        this.props.getHomeInfo()
    }

    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.cityName}></HomeHeader>
                <Category />
                {
                    this.props.loading ? <Loading></Loading> : 'abc'
                }
            </div>
        )
    }
}

export default Home
