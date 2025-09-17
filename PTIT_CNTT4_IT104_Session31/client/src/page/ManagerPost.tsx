import React, { useEffect, useState } from "react";
import { PortList } from "./PortList";
import Select from "./Select";
import axios from "axios";
import { Example } from "./Example";
import { debounce } from "lodash";
import { Form } from "react-bootstrap";
export type Port = {
  id: number;
  title: string;
  image: string;
  date: string;
  status: string;
};

export default function ManagerPost() {
  const [ports, setPorts] = useState<Port[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const res = await axios.get("http://localhost:8080/ports");
    return setPorts(res.data);
  }
  async function getTrue() {
    const res = await axios.get("http://localhost:8080/ports?status=true");
    return setPorts(res.data);
  }
  async function getFalse() {
    const res = await axios.get("http://localhost:8080/ports?status=false");
    return setPorts(res.data);
  }

  async function handleStatus(id: number) {
    await axios.patch(`http://localhost:8080/ports/${id}`, {
      status: false,
    });
    getData();
  }
  const handleSearch = debounce(async (value: string) => {
    console.log("Call API với:", value);
    try {
      const res = await axios.get(`http://localhost:8080/ports/?q=${value}`);
      setPorts(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, 500);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "/") getData();
    else if (value === "true") getTrue();
    else if (value === "false") getFalse();
  };
  return (
    <div>
      <h1>danh sách bài viết</h1>
      <div className="flex justify-between m-3">
        <div className="flex gap-3 ">
          <input
            type="text"
            className="border-1 border-black rounded-[5px]"
            onChange={handleChange}
          />
          <Form.Select
            aria-label="Default select example"
            onChange={handleFilter}
          >
            <option value="/">Lọc bài viết</option>
            <option value="/">Tất cả</option>
            <option value="true">Đã xuất bản</option>
            <option value="false">Chặn xuất bản</option>
          </Form.Select>
        </div>
        <div>
          <Example onAdd={(newPort) => setPorts([...ports, newPort])} />
        </div>
      </div>
      <div>
        <PortList ports={ports} handleStatus={handleStatus} />
      </div>
    </div>
  );
}
