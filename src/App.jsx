import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from "./views/Home"
import Contacto from "./views/Contacto"
import NotFound from "./views/NotFound"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
