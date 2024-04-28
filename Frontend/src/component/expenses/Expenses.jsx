import ExpenseItem from '../expense_item/ExpenseItem';
import './Expenses.css'
const Expenses = (props)=>{
    const {expenselist,setExpenselist,stateSetObj}=props
    if(expenselist.length===0){
        return(
            <div className="expenses_not_found expenses">No Expense Found</div>
        )
    }
    else{
        return(
            <div className="expenses">
                {expenselist.map((item)=>
                     <ExpenseItem  key={item._id} item={item} expenselist={expenselist} setExpenselist={setExpenselist} stateSetObj={stateSetObj}/>   
                 )}
            </div>
          )
    }
}

export default Expenses;