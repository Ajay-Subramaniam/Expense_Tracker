import './App.css'
import Expenses from './component/expenses/Expenses'
import ExpenseForm from './component/expense_form/ExpenseForm'
import {useState,useEffect} from 'react'
import { nanoid } from 'nanoid'

function App(){
  const [expenselist,setExpenselist]=useState([]);

  useEffect(() => {
    const retrieveExpense = async () => {
      try {
        const data = await fetch('https://expenseTracker-api.onrender.com/retrieve');
        const expenses = await data.json();
        setExpenselist(expenses);
      } catch (error) {
        console.error('Error retrieving expenses:', error);
      }
    };

    retrieveExpense();
  }, []); 


  const addExpense=async(newObj)=>{
      await fetch('https://expenseTracker-api.onrender.com/create',{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(newObj)
      })

      setExpenselist([newObj,...expenselist])
  }

  return(
    <>
      <ExpenseForm addExpense={addExpense}/>
      <Expenses expenselist={expenselist}/>
    </>
  )
}

export default App


