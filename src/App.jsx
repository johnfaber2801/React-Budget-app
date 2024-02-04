import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './assets/components/Budget';
import Remaining from "./assets/components/Remaining";
import ExpenseTotal from "./assets/components/ExpenseTotal";


const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3"> My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
      <h3 className='mt-3'> </h3>
    </div>
  )
}

export default App;
