const form = document.getElementById('productForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  const hot = document.getElementById('productHot').checked;
  const products = JSON.parse(localStorage.getItem('products')) || [];
  products.push({name, price, hot});
  localStorage.setItem('products', JSON.stringify(products));
  alert('محصول اضافه شد!');
  form.reset();
});
