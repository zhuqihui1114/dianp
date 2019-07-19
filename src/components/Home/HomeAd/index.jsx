import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import AdItem from './AdItem'
import './style.scss'
import PropTypes from "prop-types";

class HomeAd extends Component {
  //声明属性
  static propTypes = {
    className: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <div className={this.props.className}>
        {
          this.props.list.map((item, index) => (
            <AdItem className='item' key={index} item={item}></AdItem>
          ))
        }
      </div>
    )
  }
}

export default HomeAd