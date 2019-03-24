import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getWatchlist } from '../../actions'
import { Watch } from '../../components'

import './index.scss'

class Watchlist extends Component {
  componentDidMount() {
    const { getWatchlist } = this.props

    getWatchlist()
  }

  render() {
    const { watchlist } = this.props

    return (
      <div className="home">
        <Watch {...watchlist} watcher={watchlist} />
      </div>
    )
  }
}

const mapStateToProps = ({ watchlist }) => ({
  watchlist
})

const mapDispatchToProps = dispatch => ({
  getWatchlist: (watchlist, type) => dispatch(getWatchlist(watchlist, type))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist)
