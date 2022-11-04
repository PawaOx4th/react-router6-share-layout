import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Wellcome to React Router</h2>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
