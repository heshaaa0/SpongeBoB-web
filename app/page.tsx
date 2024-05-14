import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";

export default function Home() {

  return (
    <main>
      <Link href="/users">Users</Link>
      <ProductCard/>
      <Header/>
    </main>
  )
}
