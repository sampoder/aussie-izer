import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from 'react'

export default function Home(props) {
  const [wildcard, setWildcard] = useState("")
  useEffect(() => {
    setWildcard(window.location.hostname.split(".")[0])
  }, [])
  switch(props.wildcard) {
    case "home":
      return <div>Welcome to the home page!</div>;
      break;
    default:
      return <div>The wild card is: {wildcard}.</div>;
  }
}

export async function getServerSideProps(context) {
  let wildcard = context.req.headers.host.split(".")[0];
  wildcard =
    wildcard != "wildcardtest" && wildcard != "is-a-maker"
      ? wildcard != "localhost:3000"
        ? wildcard
        : process.env.TEST_WILDCARD
      : "home";
  return { props: { wildcard } };
}
