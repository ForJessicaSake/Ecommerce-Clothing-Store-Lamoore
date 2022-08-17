import { useContext } from 'react'
import { StateContext } from '../App'


function Women() {

  const { data: products, error, isPending, cart, addToCart, removeCart} = useContext(StateContext);

  return (
    <header className="catalogue-wrapper">
      <h1>Catalogue</h1>
      <h6 className="subtitle">Home/Women/<span style={{ color: '#161616' }}>Accessories</span></h6>
    
      <section className="catalogue-display">
        {error && <p>{error}</p>}
        {isPending && <h4>...</h4>}
        {products && products.map((product) => (
          <section key={product.id} className='product-display'>
            <img src={product.image} alt='clothes' />
            <p>{product.title}</p>
            <h4>${product.price}</h4>
            {cart.filter((crt) => crt.id === product.id).length === 0 ? (
              <button className="btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            ) : (
              <button onClick={() => removeCart(product.id)} className="btn">
                Remove From Cart
              </button>
            )}
          </section>
        ))}
      </section>
    </header>
    )
}

export default Women