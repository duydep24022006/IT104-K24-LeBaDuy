class Account {
    constructor(
        public accountNumber:string,
        protected balance: number,
        protected history: { 
            type: string; 
            amount: number; 
            date: Date; 
            balanceAfter: number; 
        }[] = [],
        protected status:boolean
    ) { }
    public deposit(amount:number): void{
        this.balance += amount;
        this.history.push({
            type: "deposit",
            amount: amount,
            date: new Date(),
            balanceAfter: this.balance
        });
    }
    public withdraw(amount: number): void{
        if (this.balance - amount<0) {
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
    public showHistory(): void{
        this.history.forEach(h => {
            console.log(`type: ${h.type},amount:${h.amount},date:${h.date},balance: ${h.balanceAfter}`);
        });
    }
}
class SavingAccount extends Account{
    constructor(
        accountNumber: string,
        balance: number,
        history: { 
            type: string; 
            amount: number; 
            date: Date; 
            balanceAfter: number; 
        }[] = [],
        status: boolean,
        public interestRate:number
    ) { 
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
    }
    public withdraw(amount: number): void {
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
class CheckingAccount  extends Account{
    constructor(
        accountNumber: string,
        balance: number,
        history: { 
            type: string; 
            amount: number; 
            date: Date; 
            balanceAfter: number; 
        }[] = [],
        status: boolean,
        public overdraftLimit:number
    ) { 
        super(accountNumber, balance, history, status);
        this.overdraftLimit = overdraftLimit;
    }
    public withdraw(amount: number): void {
        if (amount >= this.balance+this.overdraftLimit) {
            console.log("hạn mức của bạn ko đủ");
            return;
        };
        if (this.balance - amount<0) {
            amount = amount - this.balance;
            this.balance = 0;
            this.overdraftLimit -= amount;
        } else {
            this.balance -= amount;
        }
        this.history.push({
            type: "withdraw",
            amount: amount,
            date: new Date(),
            balanceAfter: this.balance
        });
    }
    override showHistory(): void{
        this.history.forEach(h => {
            console.log(`type: ${h.type},amount:${h.amount},date:${h.date},balance: ${h.balanceAfter},overdraftLimit:${this.overdraftLimit}`);
        });
    }
}
const acc1 = new SavingAccount("123456", 1000, [], true, 0.05);
acc1.deposit(500);
acc1.withdraw(1200);
acc1.showHistory();

console.log("------");

const acc2 = new CheckingAccount("987654", 500, [], true, 300);
acc2.deposit(200);
acc2.withdraw(600); 
acc2.withdraw(100); 
acc2.showHistory();