import React, { Component } from 'react'
import CityHeader from './CityHeader'
import SearchCity from './SearchCity'
import CityPosition from './CityPosition'
import HotCity from './HotCity'
import MoreCity from './MoreCity'

import axios from 'axios'

class City extends Component {
  constructor (props) {
    super(props)
    this.changeCity = this.changeCity.bind(this)
    this.state = {
      data: null
    }
  }

  componentDidMount () {
    console.log('city')
    this.requestCity()
  }

  changeCity (cityName) {
    if (cityName == null) {
      return
    }
    this.props.setCity(cityName)
    this.props.history.push('/')
  }

  async requestCity () {
    const res = await axios(`/assets/json/city.json`)
    this.setState({
      data: res.data.data
    })
  }

  render () {
    return (
      <div>
        <CityHeader/>
        <SearchCity />
        <CityPosition setCity={this.changeCity}/>
        {
          this.state.data == null ? null :
            <div>
              <HotCity list={this.state.data.hotCity_nav} setCity={this.changeCity}/>
              <MoreCity nav={this.state.data.city_nav}
                        classify={this.state.data.classify_nav}
                        setCity={this.changeCity} />
            </div>
        }
      </div>
    )
  }
}

export default City
