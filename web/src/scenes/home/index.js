import React, { Component } from 'react'
import { connect } from 'react-redux'

import { search, getWatchlist } from '../../actions'
import { Header, Results } from '../../components'

import './index.scss'

class Home extends Component {
  render() {
    const { results, search, watchlist } = this.props

    return (
      <div className="home">
        <Header search={search} />
        <Results {...results} watch={watchlist} />
      </div>
    )
  }
}

const mapStateToProps = ({ results }) => ({
  results
})

const mapDispatchToProps = dispatch => ({
  search: code => dispatch(search(code)),
  watchlist: () => dispatch(getWatchlist())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
