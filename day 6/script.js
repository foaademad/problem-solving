document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log(data);

    const productCardsDiv = document.getElementById("product-cards");

    data.products.forEach(product => {
        const card = `
            <div class="card">
                <img src="${product.thumbnail}" alt="${product.title}">
                <div class="card-content">
                    <h3 class="card-title">${product.title}</h3>
                    <p class="card-price">${product.price} $</p>
                    <p class="card-description">${product.description.slice(0, 100)}...</p>
                </div>
            </div>
        `;

        productCardsDiv.innerHTML += card;
    });
});