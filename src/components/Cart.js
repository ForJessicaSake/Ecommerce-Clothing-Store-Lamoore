import {useContext} from 'react'
import {StateContext}  from '../App';

function Cart() {
  const { count, incerement } = useContext(StateContext);

  return (
    <main className="cart-wrapper">
      <h6 className="subtitle">Home/Women/<span style={{ color: '#161616' }}>Accessories</span></h6>
      <header className='cart-item'>
        <p>img</p>
        <section className='cart-content'>
          <h4>product title</h4>
          <div className='counter'>  
            <button>+</button>
            <p>{count}</p>
            <button>-</button></div>
          <div className='size'>
            <h5>Size: 6-16</h5>
          </div>
        </section>
        <section className='exit'>
          <h3>X</h3>
          <h5>Price: $</h5>
        </section>

      </header>
      <hr/>

      <p className='fee'>Shopping Fee: $10</p>

      <button className='cart-btn'>Checkout</button>

    </main>)
}

export default Cart