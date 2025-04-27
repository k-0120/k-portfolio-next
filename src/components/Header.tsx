import Link from "next/link";

export default function Header() {
  return (
    <header style={{ backgroundColor: "#f0f0f0", padding: "20px", textAlign: "center" }}>
      <nav>
        <ul style={{ display: "flex", justifyContent: "center", gap: "20px", listStyle: "none", padding: 0 }}>
          <li>
          <Link href="/" style={{ color: "#333" }}>Home</Link>
          </li>
          <li>
            <Link href="/about" style={{ color: "#333" }}>About</Link>
          </li>
          <li>
            <Link href="/skills" style={{ color: "#333" }}>Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
