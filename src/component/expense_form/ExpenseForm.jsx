import './ExpenseForm.css'
import {useEffect, useState} from 'react'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ExpenseForm=(props)=>{

    const [title,setTittle]=useState('')
    const [amount,setAmount]=useState('')
    const [date,setDate]=useState('')
    
    useEffect(() => {
      console.log('Updated')
    }, [])

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
        else{
          const obj={
          id:nanoid(),
          title:title,
          amount:amount,
          date:date
        };
        props.addExpense(obj);
        }
      }

    return(
        <div className='new-expense'>
        <form onSubmit={handleSubmit}>
          <div className='new-expense__controls'>
              <div className='new-expense__control'>
                  <label>Title</label>
                  <input type='text' onChange={handleTitleChange}/>
              </div>
              <div className='new-expense__control'>
                  <label>Amount</label>
                  <input type='number' onChange={handleAmountChange}/>
              </div>
              <div className='new-expense__control'>
                  <label>Date</label>
                  <input type='date' onChange={handleDateChange}/>
              </div>
          </div>
          <div className='new-expense__actions'>
            <button type='reset'>Cancel</button>
            <button type='submit'> Add Expense</button>
          </div>
        </form>
            <ToastContainer/>
      </div>

    );
}

export default ExpenseForm;