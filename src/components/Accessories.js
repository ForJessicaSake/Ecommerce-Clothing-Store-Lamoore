import UseFetch from "./UseFetch";
function Accessories() {

  const { error, isPending, data: products, increment } = UseFetch("https://fakestoreapi.com/products/category/jewelery")

  return (
    <header className="catalogue-wrapper">
      <h1>Catalogue</h1>
      <section className="catalogue-display-one">
        {error && <p>{error}</p>}
        {isPending && <h4>...Loading</h4>}
        {products &&
          products.map((product) => (
            <section key={product.id} className="product-display">
              <img src={product.image} alt="clothes" />
              <p>{product.title}</p>
              <h4>{product.price}</h4>
              <button className="btn" onClick={increment}>
                Add to Cart
              </button>
            </section>
          ))}
      </section>
    </header>
  );
}

export default Accessories;
