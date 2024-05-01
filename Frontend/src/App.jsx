import './App.css'
import Expenses from './component/expenses/Expenses'
import ExpenseForm from './component/expense_form/ExpenseForm'
import {useState,useEffect} from 'react'
const {VITE_URL} = import.meta.env

function App(){

  const [expenselist,setExpenselist]=useState([]);
  const [title,setTitle]=useState('')
  const [amount,setAmount]=useState('')
  const [date,setDate]=useState('')

  let stateObj = {title,amount,date}
  let stateSetObj = {setTitle,setAmount,setDate}
  useEffect(() => {
    const retrieveExpense = async () => {
      try {
        const data = await fetch(VITE_URL+'/retrieve');
        const expenses = await data.json();
        setExpenselist(expenses);
      } catch (error) {
        console.error('Error retrieving expenses:', error);
      }
    };

    retrieveExpense();
  }, []); 


  const addExpense=async(newObj)=>{
      await fetch(VITE_URL+'/create',{
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
      <ExpenseForm addExpense={addExpense} stateObj={stateObj} stateSetObj={stateSetObj}/>
      <Expenses expenselist={expenselist} setExpenselist={setExpenselist} stateSetObj={stateSetObj}/>
    </>
  )
}

export default App


