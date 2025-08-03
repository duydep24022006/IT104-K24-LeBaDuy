
const createUser=(name, age = 18, role = "user") => {
  return {
    name,
    age,
    role,
  };
}

console.log(createUser("Dev")); // { name: 'Dev', age: 18, role: 'user'}
console.log(createUser('Nguyen Van A', 20, 'Admin'));//{name: 'Nguyen Van A', age: 20, role: 'Admin'}