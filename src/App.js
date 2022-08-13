import { useState, createContext } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cart from './components/Cart';
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const stateContext = createContext();

function App() {

  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');


  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <stateContext.Provider value={{count, increment, decrement, search, setSearch}}>
      <section className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product'element ={<Product />}/>
          </Routes>
        </Router>

      </section>
    </stateContext.Provider>

  )
}

export default App;