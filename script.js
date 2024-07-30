document.getElementById('addButton').addEventListener('click', function() {
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    if(type && name && amount) {
        const table = document.getElementById('transactionTable');
        const row = table.insertRow();
        row.insertCell(0).innerText = type.charAt(0).toUpperCase() + type.slice(1);
        row.insertCell(1).innerText = name;
        row.insertCell(2).innerText = `$${amount}`;
        const deleteCell = row.insertCell(3);
        deleteCell.innerHTML = '<span class="deleteButton">Delete</span>';
        deleteCell.addEventListener('click', function() {
            table.deleteRow(row.rowIndex - 1);
        });
        document.getElementById('type').value = '';
        document.getElementById('name').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please fill out all fields');
    }
});
