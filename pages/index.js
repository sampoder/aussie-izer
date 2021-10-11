import Head from "next/head";

export default function App(props) {
  switch (props.wildcard) {
    case "home":
      return (
        <div>
          Welcome to the Aussie-izer! This only works for .com domains. If you
          want to Aussie-ize{" "}
          <a href="https://example.com">https://example.com</a> visit{" "}
          <a href="https://example.aussieizer.sampoder.com">
            https://example.aussieizer.sampoder.com
          </a>
          .{" "}
        </div>
      );
      break;
    default:
      return (
        <>
          <iframe
            src={`https://${props.wildcard}.com`}
            style={{
              transform: "rotate(180deg)",
              border: "none",
              height: "100vh",
              width: "100%",
              overflow: "hidden",
            }}
            frameBorder="0"
            scrolling="yes"
            seamless="seamless"
            height="100%"
            width="100%"
          ></iframe>
          <style>
            {`body {
              margin: 0;
            }`}
          </style>
        </>
      );
  }
}

export async function getServerSideProps(context) {
  let wildcard = context.req.headers.host.split(".")[0];
  wildcard =
    wildcard != "aussieizer"
      ? wildcard != "localhost:3000"
        ? wildcard
        : process.env.TEST_WILDCARD
      : "home";
  return { props: { wildcard } };
}
