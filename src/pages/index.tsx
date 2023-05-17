import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Search } from "~/components/search";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>En Que Trabajas</title>
        <meta
          name="description"
          content="Explicale a tus padres en que trabajas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full min-h-screen flex-col items-center justify-center bg-gradient-to-t from-[#f8cf6a] to-[#2178dd]">
        <div className="container flex flex-col items-center justify-center gap-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <div className="">¿En Que Trabajas?</div>
          </h1>
        </div>
        <div className="pt-10 w-2/3 xl:w-1/3">
          <Search />
        </div>
      </main>
    </>
  );
};

export default Home;
