import React, { Component, Fragment } from 'react'

import './index.scss'

export default class Fare extends Component {
  state = {
    query: '1244',
    types: 'add'
  }

  handleWatchlistBtn = (id, type) => {
    const { watch } = this.props
    const { query, types } = this.state
    watch(query, types)
  }

  render() {
    const {
      id,
      image,
      depcountryname,
      depcityshortname,
      depairportcode,
      destcityshortname,
      destairportcode,
      watching,
      fares
    } = this.props

    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-5">
            <img src={image} className="card-img" alt={depcountryname} />
            <div className="card-tag">Our top Picks</div>
            <div className="row overlay">
              <div className="col-md-2">
                <i
                  className="fa fa-retweet fa-2x"
                  style={{ marginTop: '20px' }}
                />
              </div>
              <div className="col-md-10">
                <span id="special_trip_from_0" className="text-small">
                  Return trip from {depcityshortname} ({depairportcode}) to
                </span>
                <br />
                <span className="text-large">
                  {destcityshortname} ({destairportcode})
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div className="row">
                {fares.map(
                  (
                    {
                      travelclass,
                      travelclasstext,
                      traveltype,
                      traveltypetext,
                      price,
                      currencycode,
                      expiryindays,
                      expirydate,
                      tcid,
                      travelfrom,
                      traveluntil,
                      travelfromuntil,
                      searchforflight
                    },
                    index
                  ) => {
                    return (
                      <Fragment>
                        <div className="col-md">
                          <div
                            className="color-band"
                            style={{
                              backgroundColor:
                                travelclass === 'Y' ? '#287214' : '#245EB2'
                            }}
                          />
                          <div className="row">
                            <div
                              className="col"
                              style={{
                                border: '1px solid #ccc',
                                borderRight: 'none'
                              }}
                            >
                              <b>{travelclasstext}</b>
                              <div
                                className="row"
                                style={{ marginLeft: '-15px' }}
                              >
                                <div className="col">
                                  <p>
                                    from
                                    <br />
                                    <span
                                      style={{
                                        fontWeight: 'bold',
                                        fontSize: '30px'
                                      }}
                                    >
                                      {price}
                                    </span>
                                    <br />
                                    {currencycode}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    )
                  }
                )}
              </div>

              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <div className="row">
                <button
                  onClick={
                    !watching
                      ? () =>
                          this.handleWatchlistBtn(
                            {
                              id,
                              image,
                              depcountryname,
                              depcityshortname,
                              depairportcode,
                              destcityshortname,
                              destairportcode,
                              watching,
                              fares
                            },
                            'add'
                          )
                      : this.handleWatchlistBtn(
                          {
                            id,
                            image,
                            depcountryname,
                            depcityshortname,
                            depairportcode,
                            destcityshortname,
                            destairportcode,
                            watching,
                            fares
                          },
                          'remove'
                        )
                  }
                  type="button"
                  className="btn btn-primary pull-right"
                  style={{ backgroundColor: '#c60c30' }}
                >
                  {!watching ? 'watch this fare' : 'watching'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
