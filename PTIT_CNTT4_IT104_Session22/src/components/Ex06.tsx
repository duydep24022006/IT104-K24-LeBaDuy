import React from 'react'
import Spinner from "react-bootstrap/Spinner";
export default function Ex06() {
  return (
    <div className="flex flex-col items-center gap-3">
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
    </div>
  );
}
