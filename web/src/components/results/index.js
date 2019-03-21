import React, { Component } from 'react'

import Fare from '../fare'

import './index.scss'

export default class Results extends Component {
  render() {
    const { loading, results } = this.props

    return (
      <main>
        {loading && <div className="loading" />}
        <section>
          {results.map((fare, index) => (
            <Fare key={index} {...fare} />
          ))}
        </section>
      </main>
    )
  }
}