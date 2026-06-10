export default async function handler(req, res) {
  const key = process.env.THE_ODDS_API_KEY;
  if (!key) {
    res.status(500).send("Missing THE_ODDS_API_KEY. 请在 Vercel 环境变量里设置。");
    return;
  }

  const sport = req.query.sport || "soccer_fifa_world_cup";
  const region = req.query.region || "eu";
  const markets = req.query.markets || (String(sport).includes("winner") ? "outrights" : "h2h,spreads,totals");

  try {
    const url =
      `https://api.the-odds-api.com/v4/sports/${encodeURIComponent(sport)}/odds/` +
      `?apiKey=${encodeURIComponent(key)}` +
      `&regions=${encodeURIComponent(region)}` +
      `&markets=${encodeURIComponent(markets)}` +
      `&oddsFormat=decimal&dateFormat=iso`;

    const r = await fetch(url);
    const text = await r.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(r.status).send(text);
  } catch (err) {
    res.status(500).send(err.message || "fetch odds failed");
  }
}
