import { useState, useEffect, useReducer } from 'react'
import './App.css'
import FormComponent from './components/form-component/form-component'
import Transaction from './components/transaction-component/transaction-component'
import DataContext from './data/DataContext'
import Report from './components/report-component/report-component'

export interface InputType { id: string, title: string, amount: number }

function App() {
  const design: any = { color: "red", textAlign: "center", fontSize: '1.5rem' }

  const [items, setItems] = useState<InputType[]>([])

  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  const onAddNewItem = (newItem: InputType) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }

  useEffect(() => {
    const amounts: number[] = items.map(m => m.amount)
    const income: number = amounts.filter(amt => amt > 0)?.reduce((total, element) => total + element, 0)
    const expense: number = amounts.filter(amt => amt < 0)?.reduce((total, element) => total + element, 0) * -1
    setReportIncome(income)
    setReportExpense(expense)
  }, [items])


  // Reducer state
  const [showReport, setShowReport] = useState(false)
  const reducer = (_state: any, action: any) => {
    switch (action.type) {
      case 'SHOW':
        setShowReport(true)
        return true;
      case 'HIDE':
        setShowReport(false)
        return false;
    }
  }
  const [_result, dispatch] = useReducer(reducer, showReport)

  return (
    <DataContext.Provider value={{ income: reportIncome, expense: reportExpense }}>
      <div className="container">
        <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
        {showReport && <Report />}
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
        <button onClick={() => dispatch({ type: 'SHOW' })}>แสดง</button>
        <button onClick={() => dispatch({ type: 'HIDE' })}>ซ่อน</button>
      </div>
    </DataContext.Provider>
  )
}

export default App
