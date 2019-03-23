import React, { Component } from 'react'

import Fare from '../fare'

import './index.scss'

export default class Results extends Component {
  render() {
    const { loading, results, watchlist, watch } = this.props

    return (
      <main>
        {!watchlist && !loading && results.length === 0 && (
          <div className="start">Search for fares</div>
        )}
        {watchlist && <div className="start">Watch List</div>}

        {!watchlist && loading && <div className="loading" />}
        <section>
          {!watchlist &&
            results.map((fare, index) => (
              <Fare key={index} {...fare} watch={watch} />
            ))}

          {watchlist &&
            watchlist.map((fare, index) => (
              <Fare key={index} {...fare} watch={watch} />
            ))}
        </section>
      </main>
    )
  }
}
