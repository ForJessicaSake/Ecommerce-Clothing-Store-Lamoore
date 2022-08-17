import UseFetch from "./UseFetch";
import { useContext } from 'react'
import { StateContext } from '../App'


function Men() {
  const { cart, addToCart, removeCart } = useContext(StateContext);

  const { error, isPending, data: products,  } = UseFetch("https://fakestoreapi.com/products/category/men's clothing")


  return (
    <header className="catalogue-wrapper">
      <h1>Catalog</h1>
      <h6 className="subtitle">Home/Women/<span style={{ color: '#161616' }}>Accessories</span></h6>
      
      <section className="catalogue-display-one">
        {error && <p>{error}</p>}
        {isPending && <h4>...</h4>}
        {products &&
          products.map((product) => (
            <section key={product.id} className="product-display">
              <img src={product.image} alt="clothes" />
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
  );
}

export default Men;
