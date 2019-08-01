import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import {Link} from 'react-router-dom'
import PropTypes from "prop-types";

class HeadLineItem extends Component {
  //声明属性
  static propTypes = {
    item:PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const {item} = this.props
    return (
      <div className="item" to='/'>
        <p>{item.title}</p>
        <img src={item.pic} alt={item.title}/>
        <span className="img-num">{item.picCount}</span>
      </div>
    )
  }
}

export default HeadLineItem
