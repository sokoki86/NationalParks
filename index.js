/* eslint-disable no-undef */
// eslint-disable-next-line strict
//
function getPark() {
  $("#natParks").on("submit", (evt) => {
    evt.preventDefault();
    let states = $("#state-search").val();
    //$("#myselect option:selected").text();
    const apikey = "MeciKeqUj6lebV26IgGU3ugIfmxZWIMzyCUEt7nX";

    let url = `https://developer.nps.gov/api/v1/parks?q=${states}&api_key=${apikey}`;

    const returnedPromise = fetch(url);

    returnedPromise
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        render(json);
      });
  });
}

function render(results) {
  let template = "";

  for (let i = 0; i < results.data.length; i++) {
    template += `<div>
            <h2>${results.data[i].fullName}</h2>
            <p><a href="${results.data[i].url}" target="_blank">${results.data[i].url}</a></p>
        </div>`;
  }
  $(".parks").html(template);
}

$(getPark);
