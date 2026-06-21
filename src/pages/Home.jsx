import { Link } from 'react-router-dom'
import { products } from '../data'

function Home() {
  return (
    <section className="page home-page">
      <div className="home-hero">
        <div className="home-intro">
          <p className="eyebrow">Client-side routing</p>
          <h1>Welcome to RouteHub</h1>
          <p className="lead">
            Navigate faster with React Router and experience a polished single page application layout.
          </p>
          <div className="button-row">
            <Link to="/services" className="primary-btn">
              Explore services
            </Link>
            <Link to="/products/p2" className="secondary-btn">
              View a product
            </Link>
          </div>
        </div>

        <div className="highlight-grid">
          <article className="highlight-card">
            <h3>8 curated demos</h3>
            <p>Each card shows a unique product example with details and route preview.</p>
          </article>
          <article className="highlight-card">
            <h3>Responsive layout</h3>
            <p>Buttons, cards, and sections are aligned with consistent spacing on all screens.</p>
          </article>
          <article className="highlight-card">
            <h3>Smooth transitions</h3>
            <p>Hover animations and spacing create a modern interface feel.</p>
          </article>
        </div>
      </div>

      <div className="card-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="product-card"
          >
            <span className="product-category">{product.category}</span>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-meta">
              <span>{product.price}</span>
              <span>Tap to preview</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Home
