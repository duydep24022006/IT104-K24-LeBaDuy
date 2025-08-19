"use strict";
class Customer {
    constructor(name, email, address) {
        this.name = name;
        this.email = email;
        this.address = address;
        Customer.counter++;
        this.id = Customer.counter;
    }
    getDetails() {
        return `Id:${this.id},Name: ${this.name},Email: ${this.email},Address: ${this.address}`;
    }
}
Customer.counter = 0;
class Account {
    constructor(customer, balance) {
        this.customer = customer;
        this.balance = balance;
        Account.counter++;
        this.accountNumber = Account.counter;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("sô tiền nạp vào phải lớn hơn 0");
            return;
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("sô tiền rút phải lớn hơn 0");
            return;
        }
        this.balance -= amount;
    }
}
Account.counter = 0;
class CheckingAccount extends Account {
    constructor(customer, balance, overdraftLimit) {
        super(customer, balance);
        this.overdraftLimit = overdraftLimit;
        this.overdraftLimit = overdraftLimit;
    }
    deposit(amount) {
        super.deposit(amount);
    }
    withdraw(amount) {
        super.withdraw(amount);
    }
    getAccountInfo() {
        return `
    accountNumber:${this.accountNumber},
    customer:${this.customer.getDetails()},
    balance:${this.balance}
      `;
    }
    getType() {
        return "Thanh toán";
    }
}
class SavingsAccount extends Account {
    constructor(customer, balance, interestRate) {
        super(customer, balance);
        this.interestRate = interestRate;
        this.interestRate = interestRate;
    }
    deposit(amount) {
        super.deposit(amount);
    }
    withdraw(amount) {
        super.withdraw(amount);
    }
    getAccountInfo() {
        return `
    accountNumber:${this.accountNumber},
    customer:${this.customer.getDetails()},
    balance:${this.balance}
      `;
    }
    getType() {
        return "Tiết kiệm";
    }
}
class Transaction {
    constructor(fromAccount, toAccount, amount, date = new Date(), type) {
        this.fromAccount = fromAccount;
        this.toAccount = toAccount;
        this.amount = amount;
        this.date = date;
        this.type = type;
        Transaction.counter++;
        this.transactionId = Transaction.counter;
    }
    getDetails() {
        return `
        transactionId:${this.transactionId},
        fromAccount:${this.fromAccount},
        toAccount:${this.toAccount},
        amount:${this.amount},
        date:${this.date},
        type:${this.type}
         `;
    }
}
Transaction.counter = 0;
class Bank {
    constructor(customers, accounts, transactions) {
        this.customers = customers;
        this.accounts = accounts;
        this.transactions = transactions;
    }
    addCustomer(name, email, address) {
        this.customers.push(new Customer(name, email, address));
    }
    openAccount(customerId, type, extraData) {
        const customer = this.customers.find((item) => item.id === customerId);
        if (!customer)
            throw new Error("Không tìm thấy khách hàng");
        let account;
        if (type === "Checking") {
            account = new CheckingAccount(customer, 0, extraData.overdraftLimit);
        }
        else {
            account = new SavingsAccount(customer, 0, extraData.overdraftLimit);
        }
        this.accounts.push(account);
        return account;
    }
}
