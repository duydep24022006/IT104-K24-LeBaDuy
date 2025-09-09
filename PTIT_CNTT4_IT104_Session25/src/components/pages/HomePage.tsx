import React from 'react'

export default function HomePage() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-2">Home page</h1>
      {currentUser.email ? (
        <p>Email: {currentUser.email}</p>
      ) : (
        <p>No user logged in!</p>
      )}
    </div>
  );
}
