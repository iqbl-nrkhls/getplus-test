import { useEffect } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export default function Layout({ children, title }) {
  // useEffect(() => {

  // },[])

  return (
    <>
      <section className="flex flex-col min-h-screen">
        <Header />
        <main className="max-w-7xl w-full mx-auto grow pt-16">{children}</main>
        <Footer />
      </section>
    </>
  );
}
