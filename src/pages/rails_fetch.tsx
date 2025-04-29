import { useEffect, useState } from "react";

export default function RailsFetch() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/json_hello")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("エラーが起きた:", error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Railsからのメッセージ</h1>
      <p>{message}</p>
    </div>
  );
}
