let button = document.getElementById('logIt');

let inputDay = document.getElementById('day');
let inputMonth = document.getElementById('month');
let inputMinYear = document.getElementById('minYear');
let inputMaxYear = document.getElementById('maxYear');

button.addEventListener('click', async () => {

    let day = inputDay.value;
    let month = inputMonth.value;
    let minYear = inputMinYear.value;
    let maxYear = inputMaxYear.value;

    let output = document.getElementById("theDate");

    output.innerHTML = "Loading...";

    try {

        let url = `https://corsproxy.io/?https://events.historylabs.io/date?month=${month}&day=${day}&minYear=${minYear}&maxYear=${maxYear}`;

        let response = await fetch(url);

        let data = await response.json();

        console.log(data);

        if (data.length > 0) {

            let html = "";

            data.forEach(event => {

                html += `
                    <div class="event">
                        <h3>${event.year}</h3>
                        <p>${event.content}</p>
                    </div>
                `;

            });

            output.innerHTML = html;

        } else {

            output.innerHTML = "No events found.";

        }

    } catch (error) {

        console.error(error);

        output.innerHTML = "Error loading data.";

    }

});