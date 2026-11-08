/*Practice one:
Expense Data Management*/
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


/* Practice two:
Expense Calculations*/
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

//Find the largest expense 
function findLargestExpense() {
    if(expenses.length === 0) {
        return undefined;
    }

    let largest = expenses[0];

    for(let i = 1; i < expenses.length; i++) {
        if(expenses[i].amount > largest.amount) {
            largest = expenses[i];
        }
    }
    return largest;
}
const largestExpense = findLargestExpense();
console.log("The largest expense is: " + largestExpense.name);
console.log("Amount: " + largestExpense.amount);

/*Practice 3:
Validation and Error Handling*/
//Validate Expense Names
function validateExpenseName(name) {

    //Check if the name is a string
    if (typeof name !== "string") {
        return false;
    }

    //Remove whitespaces
    name = name.trim();

    //Check if name is empty
    if (name == "") {
        return false;
    }

    //Name is valid
    return true;
}

//Test expense name validation
console.log(validateExpenseName("Groceries"));
console.log(validateExpenseName("Rent"));
console.log(validateExpenseName(""));
console.log(validateExpenseName("   "));
console.log(validateExpenseName(123));
console.log(validateExpenseName(null));

//Validate Expense Categories
function validateExpenseCategory(category) {

    //Check if category is a string
    if (typeof category != "string") {
        return false;
    }

    //Remove whitespaces
    category = category.trim();

    //Check if category is empty
    if(category === "") {
        return false;
    }

    //Category is valid
    return true;
}

//Test expense name validation
console.log(validateExpenseCategory("Food"));
console.log(validateExpenseCategory("Transport"));
console.log(validateExpenseCategory(""));
console.log(validateExpenseCategory("   "));
console.log(validateExpenseCategory(123));
console.log(validateExpenseCategory(null));


//Validate Expense
function validateExpenseAmount(amount) {
    //Check if amount is not a number, and undefined
    if (typeof amount !== "number") {
        return false;
    }

    //Check if amount is not a finite number
    if(!Number.isFinite(amount)) {
        return false;
    }
    
    //Check if the amount is negative or zero
    if (amount <= 0 ) {   
        return false;
    }

    return amount;
} 

// Test expense amount validation
console.log(validateExpenseAmount(-100));
console.log(validateExpenseAmount("Goal"));
console.log(validateExpenseAmount("300"));
console.log(validateExpenseAmount(null));
console.log(validateExpenseAmount(undefined));
console.log(validateExpenseAmount(0));
console.log(validateExpenseAmount(NaN));
console.log(validateExpenseAmount(Infinity));
console.log(validateExpenseAmount(50));
console.log(validateExpenseAmount(125.50));