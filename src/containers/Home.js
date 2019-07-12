import {connect} from 'react-redux'
import {getHomeInfo} from '../redux/action'
import Home from '../components/Home/index'

const mapStateToProps = (state) => ({
    cityName: state.reducerCity,
    loading: state.reducerLoading,
    headline: state.reducerHeadline,
    likelist: state.reducerLikes
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
    { getHomeInfo }
)(Home)