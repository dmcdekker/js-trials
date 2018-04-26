// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309')
phoneNumbers.set('mobile', '415-555-1212')
phoneNumbers.set('business', '415-123-4567')
console.log(phoneNumbers)
console.log('\n')

// ///////////////////////////////////////////////////////

// Create User Info Display:
function showAddresses(addresses){
	console.log('Addresses:')
	for (let address of addresses){
		console.log(address);
	}
	console.log('\n')
}

showAddresses(addresses);

function showPhoneNumbers(phoneNumbers){
	console.log('Phone Numbers: ')
	for (let number of phoneNumbers){
		console.log(number[0] + ": " + number[1]);
	}
}

showPhoneNumbers(phoneNumbers);
console.log('\n')

// Add function to print account information 
function printAccountInfo( name, number, business) {
	console.log(`Account Holder Name: ${name}`);
	console.log(`Account Holder Number: ${number}`);
	console.log(`Business Name: ${business}`);
}


printAccountInfo(accountHolder, accountNumber, businessName)
console.log('\n')

// Add function to print all addresses, including a header
// Print all addresses, including a header
function showAddresses(addresses) {
	console.log("Addresses:");
	for (let i =0; i < addresses.length; i++) {
	console.log(addresses[i])
	}
}

// Add function to print phone types and numbers
// Print phone types and numbers
function showPhoneNums(phones) {
    console.log("Phone numbers:");
	for (let [phone, number] of phoneNumbers) {
		console.log(`${phone}: ${number}`);
	}
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactions = new Map();

// Add function to add transactions
function addTransactions(date, amount){
	transactions.set(date, amount);
}

// Use the function to add transactions
addTransactions('May-2', -500);
addTransactions('May-13', +1200);
addTransactions('May-15', -100);
addTransactions('May-21', -359);
addTransactions('May-29', +2200);

console.log(transactions);
console.log('\n')

// Add function to show balance status
function showBalanceStatus(balance){
	console.log(`Balance: ${balance}`)
	if (balance < 0) {
		console.log("You are overdrawn");
	}else if (balance > 0 && balance < 20){
		console.log("Warning, you are close to zero balance")
	}else{
		console.log("Thanks for your business.")
	}
}
// Add function to show transactions
function showTransactions(map, balance){
	console.log(`Starting balance: ${balance}`);
	console.log("Date\t Type \t Amount \t New Balance");
	for (let [date, change] of transactions) {
		let type;
		if (change < 0) {
			type = "withdrawal";
		} else {
			type = "deposit";
		}
		balance += change;
		balance -= getFees();
		console.log(`${date} \t ${type} \t ${change} \t ${balance}`);
	}
	showBalanceStatus(balance);
}

showTransactions(transactions, 26000)

// Function to get fees
function getFees(bal) {
	if (bal < 0) {
		return 25;
	} else {
		return 0;
	}
}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




