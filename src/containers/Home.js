import {connect} from 'react-redux'
import {getHomeInfo} from '../redux/action'
import Home from '../components/Home/index'

const mapStateToProps = (state) => ({
    cityName: state.reducerCity
})

const mapDispatchToProps = (dispatch) => ({
    getHomeInfo: () => dispatch(getHomeInfo()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)