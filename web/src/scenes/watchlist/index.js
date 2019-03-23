import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getWatchlist } from '../../actions'
import { Results } from '../../components'

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
        <Results {...watchlist} type="watchlist" />
      </div>
    )
  }
}

const mapStateToProps = ({ watchlist }) => ({
  watchlist
})

const mapDispatchToProps = dispatch => ({
  getWatchlist: () => dispatch(getWatchlist())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist)
