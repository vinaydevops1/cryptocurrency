// Write your code here
import {Component} from 'react'

import CrytoCurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="bg-container">
        <div>
          <CrytoCurrenciesList />
        </div>
      </div>
    )
  }
}

export default CryptocurrencyTracker
