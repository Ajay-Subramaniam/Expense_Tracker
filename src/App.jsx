import './App.css'
import Expenses from './component/expenses/Expenses'
import ExpenseForm from './component/expense_form/ExpenseForm'
import {useState} from 'react'
import { nanoid } from 'nanoid'

const EXPENSES = [
  {
    id:nanoid(),
    title:"New PC",
    amount:55300,
    date:"2023-04-12"
 },
  {
    id:nanoid(),
    title:"Smart Watch",
    amount:5530,
    date:"2023-02-12"
 },
  {
    id:nanoid(),
    title:"TWS",
    amount:2500,
    date:"2023-02-12"
 }
]

function App(){
  const [expenselist,setexpenselist]=useState(EXPENSES);

  

  const addExpense=async(newObj)=>{
      setexpenselist([newObj,...expenselist])
  }

  return(
    <>
      <ExpenseForm addExpense={addExpense}/>
      <Expenses expenselist={expenselist}/>
    </>
  )
}

export default App


