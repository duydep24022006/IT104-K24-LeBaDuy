import React, { useState, type ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useParams, useSearchParams } from "react-router-dom";

export default function Student() {
  const [studentName, setStudentName] = useState("");
  const [student, setStudent] = useSearchParams();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentName(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStudent({
      student: studentName,
    });
  };
  return (
    <div className="">
      <Form.Control
        type="text"
        placeholder="Small text"
        value={studentName}
        onChange={handleChange}
      />
      <Button variant="primary" onClick={handleSubmit}>
        Primary
          </Button>
          <h2>Kết quả mong đợi:{ student.get('student')}</h2>
    </div>
  );
}
