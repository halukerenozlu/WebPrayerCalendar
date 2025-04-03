const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
//app.use(express.static("public"));

app.get("/namazvakitleri", async (req, res) => {
  try {
    const response = await fetch("https://ezanvakti.emushaf.net/vakitler/9819");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Sunucuda bir hata oluştu." });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy sunucu ${PORT} portunda çalışıyor...`);
});
