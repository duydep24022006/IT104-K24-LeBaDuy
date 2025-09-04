import React from 'react'
import { Form } from 'react-bootstrap';

export default function Ex02() {
  return (
    <div className="p-3">
      <Form.Control type="text" placeholder="Lớn" size="lg" />
      <br />
      <Form.Control type="text" placeholder="Bình thường" />
      <br />
      <Form.Control type="text" placeholder="Nhỏ" size="sm" />
    </div>
  );
}
