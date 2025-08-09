const dataTable = document.getElementById("dataTable");

function addRow(cells) {
  const tr = document.createElement("tr");
  tr.innerHTML = cells.join("");
  dataTable.insertAdjacentElement("beforeend", tr);
}

(async () => {
  // Loading satırı
  addRow([`<td colspan="7">Yükleniyor...</td>`]);

  try {
    const res = await fetch("/api/namazvakitleri?ilce=9819");
    if (!res.ok) throw new Error("API failed: " + res.status);
    const jsonData = await res.json();

    // loading'ı kaldır
    dataTable.lastElementChild.remove();

    const rows = Array.isArray(jsonData) ? jsonData : [jsonData];
    if (rows.length === 0) {
      addRow([`<td colspan="7">Kayıt bulunamadı.</td>`]);
      return;
    }

    rows.forEach((v) => {
      const gunes = v.Gunes ?? v["Güneş"] ?? "-";
      const ogle = v.Ogle ?? v["Öğle"] ?? "-";
      const ikindi = v.Ikindi ?? v["İkindi"] ?? "-";
      const aksam = v.Aksam ?? v["Akşam"] ?? "-";
      const yatsi = v.Yatsi ?? v["Yatsı"] ?? "-";
      const tarih = v.MiladiTarihKisa ?? v.MiladiTarihUzun ?? v.Tarih ?? "-";

      addRow([
        `<td>${tarih}</td>`,
        `<td>${v.Imsak ?? "-"}</td>`,
        `<td>${gunes}</td>`,
        `<td>${ogle}</td>`,
        `<td>${ikindi}</td>`,
        `<td>${aksam}</td>`,
        `<td>${yatsi}</td>`,
      ]);
    });
  } catch (err) {
    console.error(err);
    // loading'ı kaldır
    if (dataTable.lastElementChild) dataTable.lastElementChild.remove();
    addRow([`<td colspan="7">Bir hata oluştu. Lütfen tekrar deneyin.</td>`]);
  }
})();
