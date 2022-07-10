import React from 'react';
import {useState, useEffect} from 'react'
import './App.css';
import Total from './components/Total/index'
import New from './components/New/index'
import Expense from './components/Expense/index'

type Item = {
  date: string | undefined,
  category: string | undefined,
  title: string | undefined,
  value: number| undefined,
  key?: number| undefined
}

function App() {
  const [expense, setExpense] = useState<Item>()
  const [expenseList, setExpenseList] = useState<Item[]>([])


  //Posteriormente fazer essa const virar um State
  const expenseItems: Item[] = expenseList
    
/*   usar um método javascript para filtrar os undefined do array de expenses em expenseItems
 */


  /* [
    {
      date: '15/10/2021',
      category: 'Alimentação',
      title: 'burger',
      value: 32.12
    },
    {
      date: '07/09/2022',
      category: 'Aluguel',
      title: 'pastel',
      value: 50.00
    },
    {
      date: '05/05/2021',
      category: 'Alimentação',
      title: 'Limão',
      value: 19.50
    },
    {
      date: '03/08/2021',
      category: 'Alimentação',
      title: 'Laranja',
      value: 15.35
    }
  ] */


  console.log(expense)  

  useEffect(()=>{
   let newExpense = {
    date: expense?.date,
    category: expense?.category,
    title: expense?.title,
    value: expense?.value
   }

   let testList:Item[] = [...expenseList, newExpense]
   console.log(expenseList)  
   console.log(testList)  
   setExpenseList(testList)
      
  },[expense]);




  return (
    <div>
      <header className="header">
        Sistema Financeiro
      </header>
      <Total />
      <New onsubmitExpense={setExpense}/>
      {
        expenseItems.map(exp => <Expense date={exp.date} category={exp.category} title={exp.title} value={exp.value} />)
      }
      <footer className="footer">
        Created by Ramon
      </footer>
    </div>
  );
}

export default App;


/* 

--------------

Add income or outcome
Delete income or outcome
verificar sobre colocar IDs nas expenses para poder excluir-las

Criar lista com novas despesas
Adicionar informações de total etc, Total = Income - Outcome




*/