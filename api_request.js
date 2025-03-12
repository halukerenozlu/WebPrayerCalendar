const dataTable = document.getElementById("dataTable");
fetch("https://ezanvakti.emushaf.net/vakitler/17911") // We send a request to the API
  .then((response) => response.json()) // // We convert the incoming data to JSON format, callback function
  .then((jsonData) => {
    jsonData.forEach((data) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${data.MiladiTarihKisa}</td>
          <td>${data.Imsak}</td>
          <td>${data.Gunes}</td>
          <td>${data.Ogle}</td>
          <td>${data.Ikindi}</td>
          <td>${data.Aksam}</td>
          <td>${data.Yatsi}</td>
          `;

      dataTable.insertAdjacentElement("beforeend", tr);
    });
  });
