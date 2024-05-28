// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onChangeBalance = id => {
    const {denominationsList} = this.props
    const filteredResult = denominationsList.filter(
      eachItem => eachItem.id === id,
    )
    return this.setState(prevState => ({
      balance: prevState.balance - filteredResult[0].value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="withdrawal-container">
          <div className="profile-container">
            <div className="profile-round">
              <p className="profile-letter">s</p>
            </div>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="your-balance-container">
            <h1 className="your-balance-heading">Your Balance</h1>
            <div className="balance-container">
              <h1 className="two-thousand">{balance}</h1>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <h1 className="withdraw-heading">Withdraw</h1>
          <p className="choose-sum-heading">CHOOSE SUM (IN RUPEES)</p>
          <div className="button-container">
            {denominationsList.map(eachValue => (
              <DenominationItem
                denominationsList={eachValue}
                id={eachValue.id}
                onChangeBalance={this.onChangeBalance}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
