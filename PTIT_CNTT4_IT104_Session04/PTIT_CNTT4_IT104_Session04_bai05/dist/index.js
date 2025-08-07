"use strict";
const staffMember = {
    name: "duy",
    age: 19,
    employeeId: "EMP001",
    department: "Kế toán"
};
const renderUser = (staffMember) => {
    console.log(` ${staffMember.name} (${staffMember.age} tuổi) , Mã nhân viên: ${staffMember.employeeId} - Phòng: ${staffMember.department}`);
};
renderUser(staffMember);
