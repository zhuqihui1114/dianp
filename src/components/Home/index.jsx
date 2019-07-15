import React, {Component} from 'react'
import HomeHeader from './HomeHeader'
import Category from './Category'
import Loading from '../Loading'
import HomeHeadLine from './HomeHeadLine'

class Home extends Component {
  constructor(props) {
    super(props)
    console.log('Home create')
  }

  componentDidMount() {
    this.props.getHomeInfo()
    console.log('Home componentDidMount')
  }

  componentWillUnmount() {
    console.log('Home componentWillUnmount')
  }

  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.cityName}></HomeHeader>
        <Category/>
        {
          this.props.loading ? <Loading></Loading>
            : (
              <div>
                <HomeHeadLine list={this.props.headline}></HomeHeadLine>
              </div>
            )
        }
      </div>
    )
  }
}

export default Home
