import React, { Component } from 'react'

import Fare from '../fare'

import './index.scss'

export default class Watch extends Component {
  render() {
    const { loading, watchlist, watcher } = this.props

    return (
      <main>
        <div className="start">Watch List</div>

        {!watchlist && loading && <div className="loading" />}
        <section>
          {watchlist &&
            watchlist.map((fare, index) => (
              <Fare key={index} {...fare} watcher={watcher} watching="true" />
            ))}
        </section>
      </main>
    )
  }
}
