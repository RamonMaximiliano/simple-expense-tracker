import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import Total from './components/Total/index'
import New from './components/New/index'
import Expense from './components/Expense/index'

type Item = {
  date: string | undefined,
  category: string | undefined,
  title: string | undefined,
  value: number | undefined,
  key?: number | undefined
}

function App() {
  const [expense, setExpense] = useState<Item>()
  const [expenseList, setExpenseList] = useState<Item[]>([])

  //Posteriormente fazer essa const virar um State
  const expenseItems: Item[] = expenseList

  useEffect(() => {
    if (expense?.date != undefined) {
      let newExpense = {
        date: expense?.date,
        category: expense?.category,
        title: expense?.title,
        value: expense?.value
      }
      let testList: Item[] = [...expenseList, newExpense]
      setExpenseList(testList)
    }
  }, [expense]);



  //TOTALS
  let totalPositive: number = 0
  let totalnegative: number = 0

  expenseItems.forEach((expenseListTotal) => {
    if(expenseListTotal.category === 'Alimentação' || expenseListTotal.category === 'Aluguel' || expenseListTotal.category === 'Outros'){
      totalnegative += Number(expenseListTotal.value)
      console.log(`This is the negatives${totalnegative}`)
    } else if (expenseListTotal.category === 'Salário' ){
      totalPositive += Number(expenseListTotal.value)
      console.log(`This is the positives ${totalPositive}`)
    }
  })
  //TOTALS


  return (
    <div>
      <header className="header">
        Sistema Financeiro
      </header>
      <Total />
      <New onsubmitExpense={setExpense} />
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

Delete income or outcome
verificar sobre colocar IDs nas expenses para poder excluir-las

Adicionar informações de total etc, Total = Income - Outcome
Total verde ou vermelho conforme valor 
Adicionar Month conforme maquina do User

*/