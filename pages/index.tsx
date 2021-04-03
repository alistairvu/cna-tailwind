import Head from "next/head"

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App Bulma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto my-4">
          <h1 className="text-4xl font-bold">Welcome to NextJS + Tailwind</h1>
          <p className="text-2xl">
            Get started by editing{" "}
            <code className="text-red-500">index.tsx</code>!
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
