document.getElementById('getRecommendation').addEventListener('click', function() {
    const query = document.getElementById('techInput').value;
    if (query) {
        getRecommendations(query);
    }
});

async function getRecommendations(query) {
    const apiUrl = `https://fakestoreapi.com/products`;

    try {
        const response = await fetch(apiUrl);
        const products = await response.json();

        // Filter products based on the query
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredProducts.length > 0) {
            document.getElementById('recommendations').innerHTML = filteredProducts.map(product => `
                <div class="product">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <div class="product-info">
                        <strong>${product.title}</strong><br>
                        ${product.description}<br>
                        <a href="${product.link}" target="_blank">View product</a>
                    </div>
                </div>
            `).join('');
        } else {
            document.getElementById('recommendations').innerHTML = '<p>No recommendations found</p>';
        }
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        document.getElementById('recommendations').innerHTML = '<p>Failed to fetch recommendations. Try again later.</p>';
    }
}
