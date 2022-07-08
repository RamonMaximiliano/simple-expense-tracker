import React from 'react';
import './App.css';
import Total from './components/Total/index'
import New from './components/New/index'
import Expense from './components/Expense/index'

type Item = {
  date: string,
  category: string,
  title: string,
  value: number
}

function App() {

  const expenseItems: Item[] = [
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
  ]


  return (
    <div>
      <header className="header">
        Sistema Financeiro
      </header>
      <Total />
      <New />
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

Components:

Display total
Input expense
Expense list 
Header 
Footer

--------------

Total = Income - Outcome
Add income or outcome
Delete income or outcome
Date of the expense / value / category / Name


*/