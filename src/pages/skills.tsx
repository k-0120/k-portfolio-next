import Layout from "../components/Layout";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <Layout>
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>スキル紹介</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {skills.map((skill, index) => (
        <li key={index}>
          {skill.name} - {skill.level}
        </li>
        ))}
      </ul>
    </Layout>
  );
}
