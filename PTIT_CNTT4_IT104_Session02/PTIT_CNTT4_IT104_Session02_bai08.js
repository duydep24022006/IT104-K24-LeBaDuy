const user = {
  name: "John",
  age: 25,
  location: { city: "Hanoi", country: "Vietnam" },
  contact: { email: "john@example.com", phone: "0123456789" },
  job: { title: "Developer", company: "Tech Corp" },
};
const user2 = {
  name: "Anna",
  age: 30,
  location: { city: "Da Nang", country: "Vietnam" },
};
const displayUserInfo = ({
  name,
  age,
  location: { city, country },
  contact: { email = "unknown", phone = "unknown" }={},
  job: { title = "unknown", company = "unknown" }={},
}) => {
  console.log(
    `${name} is ${age} years old,lives in ${city}, ${country} works as ${email} at ${phone}, and can be contacted via ${title} or ${company}.`
  );
};
displayUserInfo(user);
displayUserInfo(user2);

