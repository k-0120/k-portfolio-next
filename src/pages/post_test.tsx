import { useState } from "react";

export default function PostTest() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendData = async () => {
    try {
      const response = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("エラーが起きた:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>POSTリクエスト体験</h1>
      <input
        type="text"
        placeholder="名前を入力してね"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px", padding: "8px" }}
      />
      <button onClick={sendData}>送信する</button>
      <p>{message}</p>
    </div>
  );
}
