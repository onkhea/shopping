document.addEventListener('DOMContentLoaded', function() {
    const API_URL = 'https://khmer-shoping.onrender.com/payments';
    const paymentsTableBody = document.getElementById('paymentsTable').getElementsByTagName('tbody')[0];

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            data.forEach(payment => {
                const row = paymentsTableBody.insertRow();

                const idCell = row.insertCell(0);
                const orderIdCell = row.insertCell(1);
                const amountCell = row.insertCell(2);
                const statusCell = row.insertCell(3);
                const transactionIdCell = row.insertCell(4);
                const createdAtCell = row.insertCell(5);
                const updatedAtCell = row.insertCell(6);

                idCell.textContent = payment.id;
                orderIdCell.textContent = payment.orderId;
                amountCell.textContent = payment.amount;
                statusCell.textContent = payment.status;
                transactionIdCell.textContent = payment.transactionId;
                createdAtCell.textContent = new Date(payment.createdAt).toLocaleString();
                updatedAtCell.textContent = new Date(payment.updatedAt).toLocaleString();
            });
        })
        .catch(error => console.error('Error fetching payment data:', error));
});
