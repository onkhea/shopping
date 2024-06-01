document.addEventListener('DOMContentLoaded', function() {
    const API_URL = 'https://khmer-shoping.onrender.com/reviews';
    const reviewsTableBody = document.getElementById('reviewsTable').getElementsByTagName('tbody')[0];

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            data.forEach(review => {
                const row = reviewsTableBody.insertRow();

                const idCell = row.insertCell(0);
                const productIdCell = row.insertCell(1);
                const userIdCell = row.insertCell(2);
                const ratingCell = row.insertCell(3);
                const commentCell = row.insertCell(4);
                const createdAtCell = row.insertCell(5);
                const updatedAtCell = row.insertCell(6);

                idCell.textContent = review.id;
                productIdCell.textContent = review.productId;
                userIdCell.textContent = review.userId;
                ratingCell.textContent = review.rating;
                commentCell.textContent = review.comment;
                createdAtCell.textContent = new Date(review.createdAt).toLocaleString();
                updatedAtCell.textContent = new Date(review.updatedAt).toLocaleString();
            });
        })
        .catch(error => console.error('Error fetching review data:', error));
});
