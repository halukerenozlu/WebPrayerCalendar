export default async function handler(req, res) {
  const ilce = (req.query?.ilce || "9819").toString();
  const url = `https://ezanvakti.emushaf.net/vakitler/${encodeURIComponent(
    ilce
  )}`;

  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 8000);

  try {
    const upstream = await fetch(url, {
      headers: { accept: "application/json" },
      signal: ac.signal,
    });
    if (!upstream.ok) {
      console.error("Upstream status:", upstream.status, url);
      return res.status(upstream.status).json({ error: "Upstream error" });
    }
    const data = await upstream.json();
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=60");
    return res.status(200).json(data);
  } catch (err) {
    console.error("Handler error:", err?.name, err?.message);
    return res.status(500).json({ error: "Server error" });
  } finally {
    clearTimeout(t);
  }
}
