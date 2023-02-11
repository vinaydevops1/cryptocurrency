// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = eachItem

  return (
    <li className="list-heading1">
      <img src={currencyLogo} alt={currencyName} className="logo-size" />
      <p className="type">{currencyName}</p>
      <p className="usd">{usdValue}</p>
      <p className="euro">{euroValue}</p>
    </li>
  )
}
export default CryptocurrencyItem
