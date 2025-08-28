import React, { useRef } from "react";

export default function ScrollToSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1> Cuộn tới nội dung</h1>
        <button
          onClick={handleScroll}
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Đi tới phần nội dung
        </button>
      </div>

      <div style={{ padding: "20px", lineHeight: "1.8" }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <p key={i}>
            Đây là nội dung giả lập để tạo khoảng cách cho trang... (dòng{" "}
            {i + 1})
          </p>
        ))}
      </div>

      <div
        ref={targetRef}
        style={{
          padding: "50px",
          marginTop: "40px",
          backgroundColor: "#f1f1f1",
          textAlign: "center",
          border: "1px solid #ddd",
        }}
      >
        <h2> Đây là phần mục tiêu!</h2>
        <p>Bạn đã cuộn xuống thành công 🎉</p>
      </div>
    </div>
  );
}
