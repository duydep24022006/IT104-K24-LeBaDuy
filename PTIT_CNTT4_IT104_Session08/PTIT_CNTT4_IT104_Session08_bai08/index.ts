interface partial {
  name: string;
  age: number;
  job: string;
}

const partialUpdate = (user: partial, userUpdate: Partial<partial>) => {
  return { ...user, ...userUpdate };
};
console.log(
  partialUpdate({ name: "Alice", age: 30, job: "Developer" }, { age: 31 })
);
console.log(
  partialUpdate(
    { name: "Alice", age: 30, job: "Developer" },
    { name: "Bob", job: "Designer" }
  )
);
