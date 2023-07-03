import {Component} from 'react'

import {v4} from 'uuid'

import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  deleteTransaction = id => {
    const {transactionList} = this.state

    const updateList = transactionList.filter(each => id !== each.id)
    this.setState({transactionList: updateList})
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {title, amount, type} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === type,
    )
    const {displayText} = typeOption

    const newtransaction = {
      id: v4(),
      title: String(title),
      amount: parseInt(amount),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newtransaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  amount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({type: event.target.value})
  }

  getBalance = () => {
    const {transactionList} = this.state
    let income = 0
    let expenses = 0
    let balance = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].optionId) {
        income += each.amount
      } else {
        expenses += each.amount
      }
    })

    balance = income - expenses

    return balance
  }

  getIncome = () => {
    const {transactionList} = this.state

    const check = transactionTypeOptions[0].optionId.toLowerCase()

    console.log(check)

    let income = 0

    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += parseInt(each.amount)
      }
    })

    return income
  }

  getExpenses = () => {
    const {transactionList} = this.state

    let expenses = 0

    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expenses += each.amount
      }
    })
    return expenses
  }

  render() {
    const {title, amount, transactionList, type} = this.state
    const balances = this.getBalance()
    const income = this.getIncome()
    const expenses = this.getExpenses()
    return (
      <div className="bg-container">
        <div className="container">
          <div className="top-container">
            <h1 className="top-heading">HI,Richard</h1>
            <p className="top-pera">
              Welcome back to your{' '}
              <span className="top-span">Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            balances={balances}
            income={income}
            expenses={expenses}
          />

          <div className="buttom-container">
            <form className="transaction-form" onSubmit={this.onAddTransaction}>
              <h1 className="heading-input">Add Transaction</h1>

              <label className="pera-input" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={title}
                className="input"
                placeholder="TITLE"
                onChange={this.getTitle}
              />

              <label className="pera-input" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                value={amount}
                className="input"
                placeholder="AMOUNT"
                onChange={this.amount}
              />
              <label className="pera-input" htmlFor="type">
                TYPE
              </label>

              <select
                id="type"
                className="input"
                value={type}
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <div className="history-transactions">
              <h1 className="transaction-header">History</h1>
              <div className="transactions-table-container">
                <ul className="transactions-table">
                  <li className="table-header">
                    <p className="table-header-cell">Title</p>
                    <p className="table-header-cell">Amount</p>
                    <p className="table-header-cell">Type</p>
                  </li>
                  {transactionList.map(each => (
                    <TransactionItem
                      key={each.id}
                      transactionDetails={each}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
