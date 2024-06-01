document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-product-btn').addEventListener('click', addProductField);
    document.getElementById('order-form').addEventListener('submit', placeOrder);
  });
  
  function addProductField() {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    productItem.innerHTML = `
      <input type="text" class="product-id" placeholder="Product ID" required>
      <input type="number" class="product-quantity" placeholder="Quantity" required>
    `;
    document.getElementById('products').appendChild(productItem);
  }
  
  function placeOrder(event) {
    event.preventDefault();
  
    const userId = document.getElementById('user-id').value;
    const totalPrice = document.getElementById('total-price').value;
    const status = document.getElementById('status').value;
    const shippingAddress = document.getElementById('shipping-address').value;
  
    const products = [];
    document.querySelectorAll('.product-item').forEach(item => {
      const productId = item.querySelector('.product-id').value;
      const quantity = item.querySelector('.product-quantity').value;
      products.push({ productId, quantity });
    });
  
    const order = {
      userId,
      products,
      totalPrice,
      status,
      shippingAddress,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  
    fetch('https://khmer-shoping.onrender.com/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(response => response.json())
    .then(data => {
      alert('Order placed successfully!');
      document.getElementById('order-form').reset();
      document.getElementById('products').innerHTML = '<div class="product-item"><input type="text" class="product-id" placeholder="Product ID" required><input type="number" class="product-quantity" placeholder="Quantity" required></div>';
    })
    .catch(error => console.error('Error:', error));
  }
  