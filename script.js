const container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

fetch("http://api.nbp.pl/api/exchangerates/tables/a/last/1?format=json")
  .then(resp => resp.json())
  .then(resp => {
    console.log(resp);
    const h2 = document.getElementById("date");
    h2.textContent = ` Tabela z ${resp[0].effectiveDate} Nr ${resp[0].no}`;
    resp[0].rates.forEach(rates => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      const h4 = document.createElement("h4");
      h4.textContent = rates.currency;
      const h5 = document.createElement("h5");
      h5.textContent = rates.code;
      const p = document.createElement("p");
      p.textContent = rates.mid;
      container.appendChild(card);
      card.appendChild(h4);
      card.appendChild(h5);
      card.appendChild(p);
    });
  })
  .catch(
    error =>
      console.log("Błąd: ", error) + alert("Błąd podczas pobierania danych")
  );
