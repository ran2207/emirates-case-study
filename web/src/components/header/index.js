import React, { Component } from 'react'

import './index.scss'

export default class Header extends Component {
  state = {
    country: 'us'
  }

  componentDidMount() {
    const { country } = this.state

    this.search(country)
  }

  search = country => {
    const { search } = this.props

    search(country)
  }

  handleSearchBtn = () => {
    const { country } = this.state

    this.search(country)
  }

  onChangeCountry = event => {
    const {
      target: { value }
    } = event

    this.setState({
      country: value
    })
  }

  render() {
    const { country } = this.state

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
            <select onChange={this.onChangeCountry} value={country}>
              <option disabled>Select Country</option>
              <option>us</option>
              <option>in</option>
              <option>ae</option>
              <option>40</option>
              <option>50</option>
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
