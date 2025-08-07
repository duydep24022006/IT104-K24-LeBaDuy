type Person = {
    name: string,
    age:number
}
type Employee={
    employeeId: string,
    department:string
}

type StaffMember = Person & Employee;

const staffMember: StaffMember={
    name: "Duy",
    age: 19,
    employeeId: "EMP001",
    department:"Kế toán"
}

const renderUser = (staffMember: StaffMember) => {
    console.log(` ${staffMember.name} (${staffMember.age} tuổi) , Mã nhân viên: ${staffMember.employeeId} - Phòng: ${staffMember.department}`);

}
renderUser(staffMember);