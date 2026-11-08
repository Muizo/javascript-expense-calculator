/*Expense Data Management*/
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


/*Expense Calculations*/

//Calculate total spending
function calculateTotalExpenses () {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }
       return total;
}

const totalSpending = calculateTotalExpenses();
console.log("The total spending amount is: " + totalSpending);

//Add a new expense
expenses.push({name: "Coffee", category: "Food", amount: 50});
console.log("The total spending amount after an added expense of $50 is: " + calculateTotalExpenses());


//Spending by Category
function calculateSpendingByCategory() {
    const categoryTotals = {};

    for(let i = 0; i < expenses.length; i++) {
        const category = expenses[i].category;
        const amount = expenses[i].amount;

        if(categoryTotals[category]) {
            categoryTotals[category] += amount;
        }
        else {
            categoryTotals[category] = amount;
        }
        
    }
    return categoryTotals;
}
const spendingByCategory = calculateSpendingByCategory();

console.log("Spending by Category: ");
console.log(spendingByCategory);