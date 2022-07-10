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

type Math = {
  positive: number,
  negative: number,
  total:number
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
    if(expenseListTotal.category === 'Alimentação' || expenseListTotal.category === 'Aluguel' || expenseListTotal.category === 'Outras despesas'){
      totalnegative += Number(expenseListTotal.value)
    } else if (expenseListTotal.category === 'Salário' || expenseListTotal.category === 'Outras rendas' ){
      totalPositive += Number(expenseListTotal.value)
    }
  })
 
  let amounts:Math = {
    positive: totalPositive,
    negative: totalnegative,
    total:totalPositive-totalnegative
  }
   //TOTALS

return (
    <div>
      <header className="header">
        Sistema Financeiro
      </header>
      <Total positive={amounts.positive} negative={amounts.negative} total={amounts.total}/>
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
Limpar lista sem dar refresh na pagina
Delete income or outcome
verificar sobre colocar IDs nas expenses para poder excluir-las
Total verde ou vermelho conforme valor 
Adicionar Month conforme maquina do User
Estilisar tudo com CSS

*/