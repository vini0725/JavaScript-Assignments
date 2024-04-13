document.addEventListener('DOMContentLoaded', function () {
    const balanceElement = document.getElementById('balance');
    const expenseListElement = document.getElementById('expense-list');
    const expenseFormElement = document.getElementById('expense-form');

    let balance = 0;
    let expenses = [];
    
    function updateBalance() {
        balanceElement.textContent = balance.toFixed(2);
    }

    function updateExpenseList() {
        expenseListElement.innerHTML = expenses.map((expense, index) => {
            return `<div>${expense.description}: $${expense.amount.toFixed(2)} <button onclick="removeExpense(${index})">Remove</button></div>`;
        }).join('');
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
        balance += amount;
        updateBalance();
        updateExpenseList();
    }

    function removeExpense(index) {
        const removedAmount = expenses[index].amount;
        expenses.splice(index, 1);
        balance -= removedAmount;
        updateBalance();
        updateExpenseList();
    }

    expenseFormElement.addEventListener('submit', function (event) {
        event.preventDefault();
        const description = document.getElementById('text').value;
        const amount = parseFloat(document.getElementById('amount').value);
        if (!isNaN(amount) && amount > 0) {
            addExpense(description, amount);
            document.getElementById('text').value = '';
            document.getElementById('amount').value = '';
        } else {
            alert('Please enter a valid amount.');
        }
    });

    updateBalance();
    updateExpenseList();
});
