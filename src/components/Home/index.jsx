import React, {Component} from 'react'
import HomeBanner from './HomeBanner'
import HomeHeader from './HomeHeader'
import Category from './Category'
import Loading from '../Loading'
import HomeHeadLine from './HomeHeadLine'
import HomeDiscount from './HomeDiscount'
import HomeReduce from './HomeReduce'
import HomeAd from './HomeAd'
import Likes from './Likes'
import LoadMore from '../LoadMore'

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

  loadMoreHandle () {
    console.log('loadMoreHandle')
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
                <HomeBanner></HomeBanner>
                <HomeAd list={this.props.rblist} className='home-rb'></HomeAd>
                <HomeAd list={this.props.adlist} className='home-ad'></HomeAd>
                <HomeDiscount list={this.props.discount} />
                <HomeReduce list={this.props.reducelist} />
                <Likes list={this.props.likelist.data}
                       isShowLikesHover={this.props.likelist.isShowLikesHover}
                       hideLikesHover={this.props.hideLikesHover}/>
                <LoadMore hasMore={this.props.likelist.hasMore}
                          isLoading={this.props.likelist.isLoading}
                          loadMoreHandle={this.loadMoreHandle}/>
              </div>
            )
        }
      </div>
    )
  }
}

export default Home
