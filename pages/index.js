import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  switch(props.wildcard) {
    case "home":
      return <div>Welcome to the home page!</div>;
      break;
    default:
      return <iframe src={`https://${props.wildcard}.com`} style={{transform: 'rotate(180deg)', border: 'none', height: '100vh', width: '100%', overflow: 'hidden'}} frameBorder="0" scrolling="yes" seamless="seamless" height="100%" width="100%"></iframe>;
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
