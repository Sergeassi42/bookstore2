
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function subscribe() {
  const email = document.getElementById('subscribeEmail').value;
  if (!email || !isValidEmail(email)) {
    alert('Please enter a valid email address.');
  } else {
    alert('Thank you for subscribing');
  }
}

function addToCart(itemName) {
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  cart.push(itemName);
  sessionStorage.setItem('cart', JSON.stringify(cart));
  alert('Item added to the cart');
}

function viewCart() {
  const modal = document.getElementById('cartModal');
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';

  if (cart.length > 0) {
    cart.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      cartItems.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'Cart is empty';
    cartItems.appendChild(li);
  }

  modal.style.display = 'block';
}

function closeCart() {
  document.getElementById('cartModal').style.display = 'none';
}

function clearCart() {
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert('No items to clear');
  } else {
    sessionStorage.removeItem('cart');
    alert('Cart cleared');
    viewCart();
  }
}

function processOrder() {
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert('Cart is empty');
  } else {
    alert('Thank you for your order');
    sessionStorage.removeItem('cart');
    viewCart();
  }
}

function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill out all fields');
    return false;
  }

  const formData = { name, email, message };
  localStorage.setItem('contactForm', JSON.stringify(formData));
  alert('Thank you for your message');
  return false;
}

// Close modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById('cartModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
