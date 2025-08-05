const phoneBooks = [];

const addContact = (name, phone, email) => {
  return {
    name: name,
    phone: phone,
    email: email,
  };
};
function displayContact() {
    for (const user of phoneBooks) {
        console.log(user);
    }
}
phoneBooks.push(addContact("duy", "0987654321", "memay@gmail.com"));
displayContact();
