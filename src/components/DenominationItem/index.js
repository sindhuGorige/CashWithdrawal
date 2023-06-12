// Write your code here
import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  render() {
    const {denominationsList} = this.props
    const {vale}=denominationsList
    return (
     
          <li className="but">
            {' '}
            <button onClick={this.fifty}>{value}</button>
          </li>
          {/* <li>
            {' '}
            <button onClick={this.hundred}>{denominationsList[1].value}</button>
          </li>
        </div>
        <div className="but">
          <li>
            {' '}
            <button onClick={this.twohundred}>
              {denominationsList[2].value}
            </button>
          </li>
          <li>
            {' '}
            <button onClick={this.thousand}>
              {denominationsList[3].value}
            </button>
          </li> */}
       
    )
  }
}

export default DenominationItem
