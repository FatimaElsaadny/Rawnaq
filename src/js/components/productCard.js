export function renderProductCard(product) {
  return `
    <div class="product-card">
      <h3>${product.name_en}</h3>
      <p>${product.description_en || ''}</p>
      <p><strong>Rating:</strong> ${product.average_rating ?? 0}</p>
    </div>
  `;
}
