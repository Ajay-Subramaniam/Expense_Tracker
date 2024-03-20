import './ExpenseForm.css'
import {useEffect, useState} from 'react'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ExpenseForm=(props)=>{

    const [title,setTittle]=useState('')
    const [amount,setAmount]=useState('')
    const [date,setDate]=useState('')

    const  handleTitleChange=(event)=>{
      setTittle(event.target.value);
    }
    const  handleAmountChange=(event)=>{
      setAmount(event.target.value);
    }
    const  handleDateChange=(event)=>{
      setDate(event.target.value);
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(title==='' || amount==='' || date===''){
            toast.warn("Fill all the fields")
        }
        else if(amount<1){
          toast.warn("Amount can't be negative or 0")
        }
        else{
           const obj={
            title:title,
            amount:amount,
            date:date
          };
         props.addExpense(obj);
         setTittle("")
         setAmount("")
         setDate("")
        }
      }

    return(
        <div className='new-expense'>
        <form onSubmit={handleSubmit}>
          <div className='new-expense__controls'>
              <div className='new-expense__control'>
                  <label>Title</label>
                  <input type='text' value={title} onChange={handleTitleChange}/>
              </div>
              <div className='new-expense__control'>
                  <label>Amount</label>
                  <input type='text' value={amount} onChange={handleAmountChange}/>
              </div>
              <div className='new-expense__control'>
                  <label>Date</label>
                  <input type='date' value={date} onChange={handleDateChange}/>
              </div>
          </div>
          <div className='new-expense__actions'>
            <button className='targetButton' type='reset'>Cancel</button>
            <button className='targetButton' type='submit'> Add Expense</button>
          </div>
        </form>
            <ToastContainer/>
      </div>

    );
}

export default ExpenseForm;