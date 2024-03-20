import ExpenseDate from '../expense_date/ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) =>{
    const {date,amount,title}=props

    return(
        <div className="expense-item">
            {/* date */}
            <ExpenseDate date={date}/>
            {/* title and amount */}
            <div className="expense-item__description">

                <h2>{title}</h2>
                <div className="expense-item__price">₹{amount}</div>
            </div>
        </div>
    )
};

export default ExpenseItem;