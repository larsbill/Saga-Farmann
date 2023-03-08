import Head from "next/head";
import {Inter} from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/navbar/layout";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
	const links = [
		{href: "/", label: "Home"},
		{href: "/crew", label: "Crew"},
		{href: "/blog", label: "Blog"},
	];

	return (
		<>
			<Layout links={links} />
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1>Saga</h1>
			</main>
		</>
	);
}
