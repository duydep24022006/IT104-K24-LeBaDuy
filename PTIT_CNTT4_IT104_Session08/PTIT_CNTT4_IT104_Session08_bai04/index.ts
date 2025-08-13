function mergeObjects<B, D>(obj1: B, obj2: D): B & D {
  return { ...obj1, ...obj2 };
}
const person = { date: 2006, age: 25 };
const job = { title: "Developer", salary: 2000 };

console.log(mergeObjects(person, job));
