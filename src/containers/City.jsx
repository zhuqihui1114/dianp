import { connect } from 'react-redux'
import City from '../components/City'
import {actionCity} from '../redux/action'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  setCity: (name) => dispatch(actionCity(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)
