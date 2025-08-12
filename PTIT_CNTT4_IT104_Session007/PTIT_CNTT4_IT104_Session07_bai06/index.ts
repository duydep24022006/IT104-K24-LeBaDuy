class Account{
    constructor(
        public id: number,
        public userName: string,
        private password: string,
        public isLogin: boolean,
        public role:"Admin"|"user",
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
        role: "Admin"|"user",
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

    public set _status(value: "active" | "banned") {
        this.status = "banned";
    }
}

class adminAcc extends Account{
    public banUser(id: number, user: userAcc[]):void {
        const userFind = user.find(item => item.id === id);
        if (!userFind) {
            console.log("không tìm thấy đối tượng có id: "+id);
        } else {
            userFind._status = "banned";
        }
    }
}
const user1 = new userAcc(1, "duy", "1234", true, "user", "active");
const user2 = new userAcc(2, "an", "5678", true, "user", "active");

const admin1 = new adminAcc(99, "boss", "adminpass", true, "Admin");

user1.login(); 
admin1.banUser(1, [user1, user2]);
user1.login();


