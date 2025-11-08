import { getAllProducts } from './api/products.js';
import { renderProductCard } from './components/productCard.js';

async function renderHomePage() {
  const container = document.getElementById('products-container');
  container.innerHTML = '<p>Loading...</p>';

  try {
    const products = await getAllProducts();

    if (!products.length) {
      container.innerHTML = '<p>No products found.</p>';
      return;
    }

    container.innerHTML = products.map(renderProductCard).join('');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<p>Error loading products.</p>';
  }
}

renderHomePage();
