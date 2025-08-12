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
    public Deposit(amount:number): void{
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
const acc = new SavingAccount("123456", 1000, [], true, 0.05);
acc.Deposit(500); 
acc.withdraw(1200); 
acc.showHistory();