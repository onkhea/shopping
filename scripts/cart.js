document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-item-btn').addEventListener('click', addItemField);
    document.getElementById('cart-form').addEventListener('submit', addToCart);
  });
  
  function addItemField() {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
      <input type="text" class="product-id" placeholder="Product ID" required>
      <input type="number" class="product-quantity" placeholder="Quantity" required>
    `;
    document.getElementById('items').appendChild(item);
  }
  
  function addToCart(event) {
    event.preventDefault();
  
    const userId = document.getElementById('user-id').value;
  
    const items = [];
    document.querySelectorAll('.item').forEach(item => {
      const productId = item.querySelector('.product-id').value;
      const quantity = item.querySelector('.product-quantity').value;
      items.push({ productId, quantity });
    });
  
    const cart = {
      userId,
      items,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  
    fetch(`https://khmer-shoping.onrender.com/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    })
    .then(response => response.json())
    .then(data => {
      alert('Items added to cart successfully!');
      document.getElementById('cart-form').reset();
      document.getElementById('items').innerHTML = '<div class="item"><input type="text" class="product-id" placeholder="Product ID" required><input type="number" class="product-quantity" placeholder="Quantity" required></div>';
    })
    .catch(error => console.error('Error:', error));
  }
  document.getElementById('submit').addEventListener('click', function() {
    window.location.href = '../page/payment.html';
});