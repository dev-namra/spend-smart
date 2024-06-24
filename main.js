document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const expenseList = document.getElementById('expense-list');
    const totalAmount = document.getElementById('total-amount');

    let expenses = [];
    
    expenseForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const description = descriptionInput.value.trim();
        const amount = parseFloat(amountInput.value.trim());
        
        if (description !== '' && !isNaN(amount) && amount > 0) {
            const expense = { description, amount };
            expenses.push(expense);
            addExpenseToList(expense);
            updateTotal();
            descriptionInput.value = '';
            amountInput.value = '';
        }
    });
    
    function addExpenseToList(expense) {
        const li = document.createElement('li');
        li.className = 'flex justify-between py-2';
        li.innerHTML = `${expense.description} <span>$${expense.amount.toFixed(2)}</span>`;
        expenseList.appendChild(li);
    }

    function updateTotal() {
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        totalAmount.textContent = total.toFixed(2);
    }
});
