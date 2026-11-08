//Expense Data Management
const expenses = [
    {name: "Groceries", category: "Food", amount: 300},
    {name: "Gas", category: "Transport", amount: 125},
    {name: "Movies", category: "Entertainment", amount: 60},
    {name: "Rent", category: "Bills", amount: 900}
];

//Print entire expense Array
console.log(expenses);

//Print first expense
console.log(expenses[0]);

//Print name of second expense
console.log(expenses[1].name);

//Print amount of fourth expense
console.log(expenses[3].amount);

//Print total number of expenses
console.log(expenses.length);


//Expense Calculations

//Calculate total spending
function calculateTotalExpenses () {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }
       return total;
}

const totalSpending = calculateTotalExpenses();
console.log(totalSpending);

//Add a new expense
expenses.push({name: "Coffee", category: "Food", amount: 50});
console.log(calculateTotalExpenses());
