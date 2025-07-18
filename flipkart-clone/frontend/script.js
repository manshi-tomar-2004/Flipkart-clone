document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:5000/api/products")
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById("product-row");

      products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h4>${product.name}</h4>
          <p>₹${product.price}</p>
        `;

        card.onclick = () => {
          window.location.href = `product.html?id=${product._id}`;
        };

        container.appendChild(card);
      });
    });
});
