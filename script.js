let merchantID = 'e0ac4163-f06b-4cab-b747-89b7bb3161b3'; // اینجا مرچنت ID جایگذاری شد

let products = JSON.parse(localStorage.getItem('products')) || [];

function renderProducts() { const container = document.getElementById('products'); container.innerHTML = ''; products.forEach((p, i) => { const card = document.createElement('div'); card.className = 'product-card'; card.innerHTML = <h3>${p.name}</h3> <p>${p.price} تومان</p> <button onclick="buy(${i})">خرید</button>; container.appendChild(card); }); }

function buy(index) { const product = products[index]; // هدایت به زرین‌پال const url = https://www.zarinpal.com/pg/StartPay/${merchantID}; window.open(url, '_blank'); }

renderProducts();
