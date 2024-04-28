import ExpenseDate from '../expense_date/ExpenseDate';
import './ExpenseItem.css'
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
let url="https://expensetracker-api-t0mw.onrender.com"

const ExpenseItem = (props) =>{
    const {expenselist,setExpenselist,stateSetObj} = props
    const {_id,date,amount,title}=props.item

    const updateItem = async()=>{
        const {setTitle,setAmount,setDate}=stateSetObj
        setTitle(title)
        setAmount(amount)
        setDate(date)
        await deleteItem()
    }

    const deleteItem = async ()=>{
        setExpenselist(expenselist.filter((item)=>item._id!=_id))
        await fetch(url+'/delete',{
            method:"DELETE",
            headers:{
              'Content-Type':"application/json"
            },
            body:JSON.stringify({_id})
          })
    }

    return(
        <div className="expense-item">

            <ExpenseDate date={date}/>

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">₹{amount}</div>
            </div>
            <BsFillPencilFill id="editIcon" size={25} onClick={updateItem}/>
            <BsFillTrashFill size={25} onClick={deleteItem}/>
        </div>
    )
};

export default ExpenseItem;