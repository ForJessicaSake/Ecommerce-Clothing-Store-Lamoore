import { useContext } from 'react'
import { StateContext } from '../App'

function Women() {
  const { data: products, increment, error, isPending } = useContext(StateContext);

  return (
    <header className="catalogue-wrapper">
      <h1>Catalogue</h1>
      <h6 className="subtitle">Home/Women/<span style={{ color: '#161616' }}>Accessories</span></h6>
      <section className="filters">
        <select>
          <option value='Women'>Women</option>
        </select>
        <select>
          <option value='price'>Price</option>
          <option value='price'>$50</option>
          <option value='price'>$100</option>
          <option value='price'>$300</option>
          <option value='price'>$500</option>
          <option value='price'>$1000</option>

        </select>
        <select>
          <option value='color'>Color</option>
          <option value='color'>black</option>
          <option value='color'>blue</option>
          <option value='color'>pink</option>
          <option value='color'>white</option>
          <option value='color'>red</option>
        </select>
        <select>
          <option value='size'>Size</option>
          <option value='color'>6</option>
          <option value='color'>8</option>
          <option value='color'>12</option>
          <option value='color'>14</option>
          <option value='color'>16</option>
        </select>
      </section>
      <section className="catalogue-display">
        {error && <p>{error}</p>}
        {isPending && <h4>...</h4>}
        {products && products.map((product) => (
          <section key={product.id} className='product-display'>
            <img src={product.image} alt='clothes' />
            <p>{product.title}</p>
            <h4>${product.price}</h4>
            <button className='btn' onClick={increment}>Add to Cart</button>
          </section>
        ))}
      </section>
    </header>)
}

export default Women