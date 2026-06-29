class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${amount} deposited. Balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
            return;
        }
        this.balance -= amount;
        console.log(`${amount} withdrawn. Balance: ${this.balance}`);
    }

    getBalance() {
        return this.balance;
    }
}

let account = new BankAccount("Ali", 1000);
account.deposit(500);
account.withdraw(200);
account.withdraw(2000);
console.log(account.getBalance());
