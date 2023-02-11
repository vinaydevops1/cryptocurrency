// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CrytoCurrenciesList extends Component {
  state = {
    currencyList: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedList = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({
      currencyList: updatedList,
      isLoader: false,
    })
  }

  renderGetList = () => {
    const {currencyList} = this.state
    return (
      <div className="currencyList-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-logo"
        />
        <div className="list-container">
          <li className="list-heading">
            <p className="type">Coin Type</p>
            <p className="usd">USD</p>
            <p className="euro">EURO</p>
          </li>
          {currencyList.map(eachItem => (
            <CryptocurrencyItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state
    return (
      <div>
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderGetList()
        )}
      </div>
    )
  }
}

export default CrytoCurrenciesList
