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
    set _status(value) {
        this.status = "banned";
    }
}
class adminAcc extends Account {
    banUser(id, user) {
        const userFind = user.find(item => item.id === id);
        if (!userFind) {
            console.log("không tìm thấy đối tượng có id: " + id);
        }
        else {
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
