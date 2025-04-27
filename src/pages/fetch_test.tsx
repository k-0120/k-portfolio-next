import { useState } from "react";

export default function FetchTest() {
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      // const response = await fetch("/api/hello");
      const response = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "K" }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("エラーが起きた:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Fetch Test</h1>
      <button onClick={fetchData}>データを取得する</button>
      <p>{message}</p>
    </div>
  );
}
