import Head from "next/head";
import CrewCard from "@/components/cards/crew-card";
import DestinationCard from "@/components/cards/destination-card/destination-card";
import destinationImage from "./../../public/assets/destination.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saga Farman Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
          <h1>Saga</h1>
          <CrewCard />
          <DestinationCard
            image={destinationImage}
            header="Destination"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                  voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                  fugiat iusto fuga"
            link="Read more -->"
          />
        </>
      </main>
    </>
  );
}
