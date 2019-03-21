import React, { Component } from 'react'

import './index.scss'

export default class Fare extends Component {
  render() {
    const { image, depcountryname, destcountryname } = this.props

    return (
      <article>
        <img src={image} alt={depcountryname} />
        <h3>
          {depcountryname} - {destcountryname}
        </h3>
      </article>
    )
  }
}
