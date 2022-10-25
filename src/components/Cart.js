import { useContext } from 'react'
import { StateContext } from '../App';

function Cart() {
  const { cart, removeCart } = useContext(StateContext);

  return (
    <main className="cart-wrapper">
      <h6 className="subtitle">Home/Women/<span style={{ color: '#161616' }}>Accessories</span></h6>
      {cart && cart.map((cart) => (
        <section key={cart.id}>
          <header className='cart-item' >
            <img src={cart.image} alt='clothes' />
            <section className='cart-content'>
              <h4>{cart.title}</h4>
              <div className='size'>
                <h5>Size: 6-16</h5>
              </div>
            </section>
            <section className='exit'>
              <h3 onClick={() => { removeCart(cart.id) }} style={{ cursor: 'pointer' }}>X</h3>
              <h5>Price: ${cart.price}</h5>
            </section>
          </header>
          <hr />

        </section>
      ))}
      <p className='fee'>Shopping Fee: $10</p>
      <h3 className='fee'>Total: ${cart.reduce((total, cart) => {return cart.price + total},  + 10)}</h3>
      <button className='cart-btn'>Checkout</button>
    </main>)
}

export default Cart
