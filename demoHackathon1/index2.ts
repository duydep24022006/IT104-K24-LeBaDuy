class Customer {
  private static counter = 0;
  public readonly id: number;
  constructor(
    public name: string,
    public email: string,
    public address: string
  ) {
    Customer.counter++;
    this.id = Customer.counter;
  }
  getDetails(): string {
    return `Id:${this.id},Name: ${this.name},Email: ${this.email},Address: ${this.address}`;
  }
}
abstract class Account {
  private static counter = 0;
  public accountNumber: number;
  constructor(public customer: Customer, public balance: number) {
    Account.counter++;
    this.accountNumber = Account.counter;
  }
  deposit(amount: number) {
    if (amount <= 0) {
      console.log("sô tiền nạp vào phải lớn hơn 0");
      return;
    }
    this.balance += amount;
  }
  withdraw(amount: number) {
    if (amount <= 0) {
      console.log("sô tiền rút phải lớn hơn 0");
      return;
    }
    this.balance -= amount;
  }
  abstract getAccountInfo(): string;
  abstract getType(): string;
}
class CheckingAccount extends Account {
  constructor(
    customer: Customer,
    balance: number,
    public overdraftLimit: number
  ) {
    super(customer, balance);
    this.overdraftLimit = overdraftLimit;
  }

  deposit(amount: number): void {
    super.deposit(amount);
  }

  withdraw(amount: number): void {
    super.withdraw(amount);
  }
  getAccountInfo(): string {
    return `
    accountNumber:${this.accountNumber},
    customer:${this.customer.getDetails()},
    balance:${this.balance}
      `;
  }
  getType(): string {
    return "Thanh toán";
  }
}
class SavingsAccount extends Account {
  constructor(
    customer: Customer,
    balance: number,
    public interestRate: number
  ) {
    super(customer, balance);
    this.interestRate = interestRate;
  }
  deposit(amount: number): void {
    super.deposit(amount);
  }

  withdraw(amount: number): void {
    super.withdraw(amount);
  }
  getAccountInfo(): string {
    return `
    accountNumber:${this.accountNumber},
    customer:${this.customer.getDetails()},
    balance:${this.balance}
      `;
  }
  getType(): string {
    return "Tiết kiệm";
  }
}
class Transaction {
  private static counter = 0;
  public readonly transactionId: number;
  constructor(
    public fromAccount: number,
    public toAccount: number,
    public amount: number,
    public date: Date = new Date(),
    public type: "deposit" | "withdraw"
  ) {
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

class Bank {
  constructor(
    public customers: Customer[],
    public accounts: Account[],
    public transactions: Transaction[]
  ) {}
  addCustomer(name: string, email: string, address: string): void {
    this.customers.push(new Customer(name, email, address));
  }
  openAccount(
    customerId: number,
    type: "Checking" | "Savings",
    extraData: any
  ): Account {
    const customer = this.customers.find((item) => item.id === customerId);
    if (!customer) throw new Error("Không tìm thấy khách hàng");
      let account : Account;
      if (type==="Checking") {
          account = new CheckingAccount(customer, 0, extraData.overdraftLimit);
      } else {
          account = new SavingsAccount(customer, 0, extraData.overdraftLimit);
      }
      this.accounts.push(account);
      return account;
  }
}
