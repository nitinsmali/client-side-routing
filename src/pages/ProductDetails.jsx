import { useParams, Link } from 'react-router-dom'
import { products } from '../data'

function ProductDetails() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <section className="page">
        <h1>Product not found</h1>
        <p>The requested product does not exist.</p>
        <Link to="/" className="primary-btn">
          Back to home
        </Link>
      </section>
    )
  }

  return (
    <section className="page">
      <h1>{product.name}</h1>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p className="price">{product.price}</p>
      <Link to="/" className="secondary-btn">
        Back to products
      </Link>
    </section>
  )
}

export default ProductDetails
