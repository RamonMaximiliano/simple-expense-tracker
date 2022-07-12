import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import Total from './components/Total/index'
import New from './components/New/index'
import Expense from './components/Expense/index'


/* TYPES*/
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
  total: number,
  month?: string,
  year?: number
}
/* TYPES*/


function App() {
  const [expense, setExpense] = useState<Item>()
  const [expenseList, setExpenseList] = useState<Item[]>([])
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
    if (expenseListTotal.category === 'Alimentação' || expenseListTotal.category === 'Aluguel' || expenseListTotal.category === 'Outras despesas') {
      totalnegative += Number(expenseListTotal.value)
    } else if (expenseListTotal.category === 'Salário' || expenseListTotal.category === 'Outras rendas') {
      totalPositive += Number(expenseListTotal.value)
    }
  })

  let date = new Date()
  let month = 'notAssigned'
  var year = date.getFullYear()
  switch (new Date().getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
  }

  let amounts: Math = {
    positive: totalPositive,
    negative: totalnegative,
    total: totalPositive - totalnegative,
    month: month,
    year: year
  }
  //TOTALS

  //RESET VALUES AND LIST
  function reset() {
    amounts.negative = 0
    amounts.positive = 0
    amounts.total = 0
    setExpenseList([])
  }
  //RESET VALUES AND LIST


  return (
    <div>
      <header className="header">
        Sistema Financeiro
      </header>
      <Total positive={amounts.positive} negative={amounts.negative} total={amounts.total} month={amounts.month} year={amounts.year} />
      <New onsubmitExpense={setExpense} />
      {
        expenseItems.map(exp => <Expense date={exp.date} category={exp.category} title={exp.title} value={exp.value} />)
      }
      <div className="resetButtonDiv">
        <input type="button" onClick={reset} value="Reset" className="resetButton"></input>
      </div>
      <footer className="footer">
        Created by Ramon Test
      </footer>
    </div>
  );
}

export default App;

/* 
--------------
Total verde ou vermelho conforme valor 
Estilisar tudo com CSS

*/