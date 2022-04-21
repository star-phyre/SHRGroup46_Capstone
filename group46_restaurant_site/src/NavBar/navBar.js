import React, { Component } from 'react'
import FoodDeckLogo from './FoodDeckLogo.png'

export default class NavBar extends Component {
  render() {
    return (
      <div>
          <img src={FoodDeckLogo} alt="The Food Deck Logo" />
      </div>
    )
  }
}
