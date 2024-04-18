import { createContext } from "react";

const DataContext = createContext<{ income: number, expense: number }>({ income: 0, expense: 0 })

export default DataContext
