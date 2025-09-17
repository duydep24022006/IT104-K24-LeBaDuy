import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import type { Port } from "./ManagerPost";

type Props = {
  onAdd: (newPort: Port) => void;
};

export function Example({ onAdd }: Props) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSave() {
    if (!title.trim()) return alert("Tên bài viết không được trống");

    const newPost = {
      title,
      image,
      date: new Date().toLocaleDateString(), 
      content,
      status: true,
    };

    const res = await axios.post("http://localhost:8080/ports", newPost);

    onAdd(res.data);

    setTitle("");
    setImage("");
    setContent("");
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Thêm bài viết
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm bài viết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tên bài viết</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hình ảnh (URL)</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

