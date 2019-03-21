import React, { Component } from 'react'

import './index.scss'

export default class Header extends Component {
  state = {
    query: '',
    size: 10
  }

  componentDidMount() {
    const { query, size } = this.state

    this.search(query, size)
  }

  search = (query, size) => {
    const { search } = this.props

    search(query, 1, size)
  }

  onChangeQuery = event => {
    const {
      target: { value }
    } = event

    this.setState({
      query: value
    })

    const { size } = this.state

    this.search(value, size)
  }

  onChangeSize = event => {
    const {
      target: { value }
    } = event

    this.setState({
      size: value
    })

    const { query } = this.state

    this.search(query, value)
  }

  render() {
    const { query, size } = this.state

    return (
      <header>
        <input
          type="search"
          placeholder="Search"
          onChange={this.onChangeQuery}
          value={query}
        />
        <select onChange={this.onChangeSize} value={size}>
          <option disabled>Page size</option>
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
        </select>
      </header>
    )
  }
}
