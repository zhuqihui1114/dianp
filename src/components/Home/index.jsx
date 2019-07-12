import React, { Component } from 'react'
import HomeHeader from './HomeHeader'
import Category from './Category'
import Loading from '../Loading'
import HomeHeadLine from './HomeHeadLine'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.getHomeInfo()
    }

    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.cityName}></HomeHeader>
                <Category />
                {
                    this.props.loading ? <Loading></Loading>
                        : <HomeHeadLine list={this.props.headline}></HomeHeadLine>
                }
            </div>
        )
    }
}

export default Home
