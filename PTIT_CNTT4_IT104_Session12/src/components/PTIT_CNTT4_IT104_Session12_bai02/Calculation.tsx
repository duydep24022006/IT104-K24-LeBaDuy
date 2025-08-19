import React from "react";

export const Calculation: React.FC<{ s1?: number; s2?: number }> = ({ s1 = 10, s2 = 10 }) => {
  const Sum = (a: number, b: number) => a + b;
  const Difference = (a: number, b: number) => a - b;
  const Product = (a: number, b: number) => a * b;
  const Quotient = (a: number, b: number) => a / b;

  return (
    <>
      <h2>Danh sách kết quả</h2>
      <ul>
        <li>{s1} + {s2} = {Sum(s1, s2)}</li>
        <li>{s1} - {s2} = {Difference(s1, s2)}</li>
        <li>{s1} * {s2} = {Product(s1, s2)}</li>
        <li>{s1} / {s2} = {Quotient(s1, s2)}</li>
      </ul>
    </>
  );
};