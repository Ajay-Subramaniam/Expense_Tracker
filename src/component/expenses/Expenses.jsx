import ExpenseItem from '../expense_item/ExpenseItem';
import './Expenses.css'
const Expenses = (props)=>{
    const {expenselist}=props
    if(expenselist.length===0){
        return(
            <div className="expenses_not_found expenses">No Expense Found</div>
        )
    }
    else{
        return(
            <div className="expenses">
                {expenselist.map((item)=>
                     <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount}/>   
                 )}
            </div>
          )
    }
}

export default Expenses;