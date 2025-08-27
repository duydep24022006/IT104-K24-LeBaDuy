import React, { useState, useCallback } from "react";
type user = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const [user, setUser] = useState<user>({ email: "", password: "" });
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }, []);
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log(user);
  },[user]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        /> <br />
        <label htmlFor="password">Password</label>  
        <br />
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handleChange}
        /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
