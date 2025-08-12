"use strict";
class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        this.isLogin = true;
    }
    logout() {
        if (this.isLogin === true) {
            console.log("đăng xuất thành công");
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            super.login();
            console.log("đăng nhập thành công");
        }
        else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
const user1 = new userAcc(1, "duy", "1234", true, "dev", "active");
user1.login();
const user2 = new userAcc(1, "duy", "1234", true, "dev", "banned");
user2.login();
