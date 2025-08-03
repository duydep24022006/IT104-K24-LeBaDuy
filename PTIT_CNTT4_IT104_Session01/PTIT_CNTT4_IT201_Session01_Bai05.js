const response = {
  data: {
    id: 1,
    title: "Destructuring in JavaScript",
    author: {
      name: "Dev",
      email: "Dev@gmail.com",
    },
  },
};

const { id, title,author:{name,email}} = response.data;
console.log(`ID: ${id}`);//ID: 1
console.log(`Title: ${title}`);//Title: Destructuring in JavaScript
console.log(`AuthorName: ${name}`);//AuthorName: Dev
console.log(`AuthorEmail: ${email}`);//AuthorEmail: Dev@gmail.com
