import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ textAlign: "center", padding: "20px" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
