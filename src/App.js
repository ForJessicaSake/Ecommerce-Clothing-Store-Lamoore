import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Women from './components/Women';
import Men from './components/Men';
import Accessories from './components/Accessories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UseFetch from './components/UseFetch';
import { createContext } from 'react'
import NotFound from './components/NotFound';


export const StateContext = createContext();

function App() {

  const { error, isPending, data, count, cart, setCart, addToCart, removeCart, increment, decrement, quantity, total} = UseFetch("https://fakestoreapi.com/products/category/women's clothing")

 

  return (
    <StateContext.Provider value={{ error, isPending, data, count,  cart, setCart, addToCart, removeCart, increment, decrement, quantity, total }}>
      <section className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/men' element={<Men />} />
            <Route path='/women' element={<Women/>} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/cart' element={<Cart />} />
            <Route path ='*' element={<NotFound/>}/>
          </Routes>
        </Router>

      </section>
    </StateContext.Provider>
  )
}

export default App;