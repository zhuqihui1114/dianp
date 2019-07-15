import React, {Component} from 'react'
import './style.css'

class Loading extends Component {
  constructor(props) {
    super(props)
    console.log('Loading create')
  }

  componentDidMount() {
    console.log('Loading componentDidMount')
  }

  componentWillUnmount() {
    console.log('Loading componentWillUnmount')
  }

  render() {
    return (
      <div className="loading">
      </div>
    )
  }
}

// const Loading = () => (
//   <div className="loading">
//   </div>
// )

export default Loading
