import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Characters from "./containers/Characters"
import Home from './containers/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
