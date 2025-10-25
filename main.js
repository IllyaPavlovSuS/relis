// Функція для отримання значення кукі за ім'ям
function getCookieValue(cookieName) {
    // Розділяємо всі куки на окремі частини
    const cookies = document.cookie.split(';')
    // Шукаємо куки з вказаним ім'ям
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim() // Видаляємо зайві пробіли
        // Перевіряємо, чи починається поточне кукі з шуканого імені
        if (cookie.startsWith(cookieName + '=')) {
            // Якщо так, повертаємо значення кукі
            return cookie.substring(cookieName.length + 1) // +1 для пропуску "="
        }
    }
    // Якщо кукі з вказаним іменем не знайдено, повертаємо порожній рядок
    return ''
}
// Викликаємо асинхронну функцію та очікуємо на отримання продуктів
getProducts().then(function (products) {
let productsList = document.querySelector('.products-list')
if (productsList) {
products.forEach(function (product) {
// Відображаємо товари на сторінці
productsList.innerHTML += getCardHTML(product)
})
}
// Отримуємо всі кнопки "Купити" на сторінці
let buyButtons = document.querySelectorAll('.products-list .cart-btn');
// Навішуємо обробник подій на кожну кнопку "Купити"
if (buyButtons) {
buyButtons.forEach(function (button) {
button.addEventListener('click', addToCart)
});
}
})

function getCardHTML(product){
    return`<div class="card" style="width: 18rem;">
  <img src="/${product.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`:
}
