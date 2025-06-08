import Head from "next/head";
import Layout from "@/components/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Splash App</title>
      </Head>
      <section className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Splash App!</h1>
        <p className="mt-4 text-gray-600">Your all-in-one solution platform.</p>
      </section>
    </Layout>
  );
}
