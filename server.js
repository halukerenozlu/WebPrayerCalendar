const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/namazvakitleri", async (req, res) => {
  try {
    const response = await fetch("https://ezanvakti.emushaf.net/vakitler/9819");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred on the server." });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}...`);
});
