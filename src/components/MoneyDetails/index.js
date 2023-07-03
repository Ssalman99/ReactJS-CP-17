// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balances, income, expenses} = props
  return (
    <div className="money-details">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-icon"
        />
        <div className="showing-rupees">
          <p className="head-pera">Your Balance</p>
          <p className="pera-amount" data-testid="balanceAmount">
            Rs {balances}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-icon"
        />
        <div className="showing-rupees">
          <p className="head-pera">Your Income</p>
          <p className="pera-amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-icon"
        />
        <div className="showing-rupees">
          <p className="head-pera">Your Expenses</p>
          <p className="pera-amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
