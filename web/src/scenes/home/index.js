import React, { Component } from 'react'
import { connect } from 'react-redux'

import { search } from '../../actions'
import { Header, Results } from '../../components'

import './index.scss'

class Home extends Component {
  render() {
    const { results, search } = this.props

    return (
      <div className="home">
        <Header search={search} />
        <Results {...results} />
      </div>
    )
  }
}

const mapStateToProps = ({ results }) => ({
  results
})

const mapDispatchToProps = dispatch => ({
  search: (keyword, page, size) => dispatch(search(keyword, page, size))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
