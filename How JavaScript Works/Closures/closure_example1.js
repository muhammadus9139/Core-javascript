// Closure - Private variables

function bankAccount(initialBalance) {
    let balance = initialBalance; // private variable

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}, Balance: ${balance}`);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient funds!");
                return;
            }
            balance -= amount;
            console.log(`Withdrawn: ${amount}, Balance: ${balance}`);
        },
        getBalance() {
            return balance;
        }
    };
}

let account = bankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());

// balance directly access nahi ho sakta
// console.log(account.balance); // undefined
