function askForPhoneNumber(abc) {
  let phoneNumber;
  console.log("ánh gọi duy xin số nyc");
  console.log("duy bảo đợi anh tìm nyc thứ mấy");
  setTimeout(() => {
    console.log("tìm thấy số rồi e yêu");
    phoneNumber = 12345;
    abc(phoneNumber);
  }, 3000);
  
}
function processPhoneNumber(sdt) {
  console.log(`anh gọi cho nyc theo số :${sdt}`);
};
askForPhoneNumber(processPhoneNumber);