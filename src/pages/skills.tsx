import Layout from "../components/Layout";

export default function Skills() {
  return (
    <Layout>
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>スキル紹介</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Next.js - 初級</li>
        <li>React - 初級</li>
        <li>HTML/CSS - 初級</li>
        <li>Git/GitHub - 基本操作OK</li>
      </ul>
    </Layout>
  );
}
