// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let wildcard = req.headers.host.split(".")[0];
  wildcard =
    wildcard != "wildcardtest" && wildcard != "is-a-maker"
      ? wildcard != "localhost:3000"
        ? wildcard
        : process.env.TEST_WILDCARD
      : "home";
  res.statusCode = 200
  res.json({ wildcard: wildcard })
}
