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
        const data = await fetch('https://expensetracker-api-t0mw.onrender.com/retrieve');
        const expenses = await data.json();
        setExpenselist(expenses);
      } catch (error) {
        console.error('Error retrieving expenses:', error);
      }
    };

    retrieveExpense();
  }, []); 


  const addExpense=async(newObj)=>{
      await fetch('https://expensetracker-api-t0mw.onrender.com/create',{
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


