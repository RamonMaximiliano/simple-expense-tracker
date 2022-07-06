import React from 'react';
import './App.css';
import Total from './components/Total/index'
import New from './components/New/index'

function App() {
  return (
    <div>
      <header className="header">
        Sistema Financeiro
      </header>
      <Total/>
      <New/>


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