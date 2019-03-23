import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCountry } from '../../actions'

import './index.scss'

class Header extends Component {
  state = {
    code: 'us'
  }

  componentDidMount() {
    const { getCountry } = this.props

    getCountry()
  }

  search = code => {
    const { search } = this.props

    search(code)
  }

  handleSearchBtn = () => {
    const { code } = this.state

    this.search(code)
  }

  onChangeCountry = event => {
    const {
      target: { value }
    } = event

    this.setState({
      code: value
    })
  }

  render() {
    const { codes, loading } = this.props

    const { code } = this.state

    return (
      <header>
        <div
          className="row search-container"
          style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            backgroundColor: '#fff',
            boxShadow: '2px 2px #ccc'
          }}
        >
          <div className="col-md-6">
            <label>To</label>

            <select
              onChange={this.onChangeCountry}
              value={code}
              disabled={loading}
            >
              <option disabled>Select Country</option>
              {codes.map(({ name, code }) => {
                return (
                  <option key={code} value={code}>
                    {name}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="col-md-6">
            <button
              onClick={this.handleSearchBtn}
              style={{
                backgroundColor: '#c60c30',
                height: '50px',
                width: '100%',
                color: '#fff'
              }}
            >
              Search
            </button>
          </div>
          <div />
        </div>
      </header>
    )
  }
}

const mapStateToProps = ({ countries: { codes, loading } }) => ({
  codes,
  loading
})

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry())
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
)
