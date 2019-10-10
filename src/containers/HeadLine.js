import {connect} from 'react-redux'
import HeadLine from '../components/HeadLine'
import {getHeadLineList} from '../redux/action'

const mapStateToProps = (state) => ({
  headLineList: state.headlineList
})

const mapDispatchToProps = (dispatch) => ({
  getHeadLineList: () => dispatch(getHeadLineList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeadLine)
