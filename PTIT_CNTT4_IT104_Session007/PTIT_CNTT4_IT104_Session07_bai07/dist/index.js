"use strict";
class Account {
    constructor(accountNumber, balance, history = [], status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }
    Deposit(amount) {
        this.balance += amount;
        this.history.push({
            type: "deposit",
            amount: amount,
            date: new Date(),
            balanceAfter: this.balance
        });
    }
    withdraw(amount) {
        if (this.balance - amount < 0) {
            console.log("Số tiền rút vượt quá tiền có trong tk");
            return;
        }
        this.balance -= amount;
        this.history.push({
            type: "deposit",
            amount: amount,
            date: new Date(),
            balanceAfter: this.balance
        });
    }
    showHistory() {
        this.history.forEach(h => {
            console.log(`type: ${h.type},amount:${h.amount},date:${h.date},balance: ${h.balanceAfter}`);
        });
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, balance, history = [], status, interestRate) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (amount >= this.balance) {
            amount = this.balance;
        }
        this.balance -= amount;
        this.history.push({
            type: "withdraw",
            amount: amount,
            date: new Date(),
            balanceAfter: this.balance
        });
    }
}
const acc = new SavingAccount("123456", 1000, [], true, 0.05);
acc.Deposit(500);
acc.withdraw(1200);
acc.showHistory();
