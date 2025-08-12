class Account{
    constructor(
        public id: number,
        public userName: string,
        private password: string,
        public isLogin: boolean,
        public role:string,
    ) { }
    public login():void {
        this.isLogin = true;
    }
    public logout(): void{
        if (this.isLogin === true) {
            console.log("đăng xuất thành công");
        }
    } 
}
class userAcc extends Account{
    constructor(
        id: number,
        userName: string,
        password: string,
        isLogin: boolean,
        role: string,
        private status:"active"|"banned"
    ) { 
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    override login(): void {
        if (this.status === "active") {
            super.login();
            console.log("đăng nhập thành công");
        } else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}

const user1 = new userAcc(1, "duy", "1234", true, "dev", "active");
user1.login();
const user2 = new userAcc(1, "duy", "1234", true, "dev", "banned");
user2.login();
