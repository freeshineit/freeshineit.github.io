import Link from "next/link";
import Layout from "../components/Layout";
import ShineShao from "@components/ShineShao";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <ShineShao />
    </p>
  </Layout>
);

export default IndexPage;
