export default async function handler(req, res) {
  const key = process.env.THE_ODDS_API_KEY;
  if (!key) {
    res.status(500).send("Missing THE_ODDS_API_KEY. 请在 Vercel 环境变量里设置。");
    return;
  }
  try {
    const url = `https://api.the-odds-api.com/v4/sports/?apiKey=${encodeURIComponent(key)}`;
    const r = await fetch(url);
    const text = await r.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(r.status).send(text);
  } catch (err) {
    res.status(500).send(err.message || "fetch sports failed");
  }
}
