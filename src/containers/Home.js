import {connect} from 'react-redux'
import {getHomeInfo, hideLikesHover, getNewLikeList} from '../redux/action'
import Home from '../components/Home/index'

const mapStateToProps = (state) => ({
  cityName: state.cityName,
  loading: state.loading,
  headline: state.headline,
  likelist: state.likelist,
  rblist: state.rblist,
  adlist: state.adlist,
  discount: state.discount,
  reducelist: state.reducelist
})

// const mapDispatchToProps = (dispatch) => ({
//     getHomeInfo: () => dispatch(getHomeInfo()),
// })
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Home)

// 等价于上面的方式
export default connect(
  mapStateToProps,
  {getHomeInfo, hideLikesHover, getNewLikeList}
)(Home)