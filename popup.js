// popup.js
document.getElementById('getRecommendation').addEventListener('click', function() {
    const query = document.getElementById('techInput').value;
    if (query) {
        getRecommendations(query);
    }
});

async function getRecommendations(query) {
    const apiUrl = `https://api.example.com/products?search=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data && data.products && data.products.length > 0) {
            document.getElementById('recommendations').innerHTML = data.products.map(product => `
                <p>
                    <strong>${product.name}</strong><br>
                    ${product.description}<br>
                    <a href="${product.link}" target="_blank">View product</a>
                </p>
            `).join('');
        } else {
            document.getElementById('recommendations').innerHTML = '<p>No recommendations found</p>';
        }
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        document.getElementById('recommendations').innerHTML = '<p>Failed to fetch recommendations. Try again later.</p>';
    }
}
