
// Function to create list items for each transaction
function createPersonListItem(person) {
    var listItem = document.createElement('li');
    listItem.textContent = `${person.id} : ${person.name} - $${person.amount}`;
    return listItem;
}

function createTransactionListItem(transaction) {
    var listItem = document.createElement('li');
    listItem.textContent = `${transaction.date} - ${transaction.description}: $${transaction.amount}`;
    return listItem;
}

// Function to display transactions
function displayTransactions() {
    var personal_history = document.querySelector('.data-history ul');
    var family_history = document.querySelector('.family-history ul');
    // Clear existing list items
    personal_history.innerHTML = '';
    family_history.innerHTML = '';
    // Create list items for each transaction and append to the list
    transactions.forEach(function (transaction) {
        var listItem = createTransactionListItem(transaction);
        personal_history.appendChild(listItem);
    });
    person.forEach(function (transaction) {
        var listItem = createPersonListItem(transaction);
        family_history.appendChild(listItem);
    });
}

// Call the displayTransactions function to initially display transactions
displayTransactions();