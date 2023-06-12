// Write your code here
import {Component} from 'react'

import DenominationItem from './components/DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  fifty = () => {
    this.setState(i => ({amount: i.amount - 50}))
  }

  hundred = () => {
    this.setState(i => ({amount: i.amount - 100}))
  }

  twohundred = () => {
    this.setState(i => ({amount: i.amount - 200}))
  }

  thousand = () => {
    this.setState(i => ({amount: i.amount - 1000}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div>
        <div className="innerBack">
          <div className="profile">
            <div className="s">
              <h1>S</h1>
            </div>
            <h1>Saraha Williams</h1>
          </div>
          <div className="Balance">
            <p className="head">Your Balance</p>
            <div>
              <p>{amount}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div>
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES) </p>
            <div className="withdraw">
              <ul>
                <div>
                  <DenominationItem denominationsList={denominationsList[0]} />
                  <DenominationItem denominationsList={denominationsList[1]} />
                </div>
                <div>
                  <DenominationItem denominationsList={denominationsList[2]} />
                  <DenominationItem denominationsList={denominationsList[3]} />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
