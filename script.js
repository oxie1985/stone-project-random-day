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

    // Display loading text
    document.getElementById("theDate").innerHTML = "Loading...";

    try {

        // API URL
        // Change this if their endpoint format is different
        let url = `https://corsproxy.io/?https://events.historylabs.io/date?month=${month}&day=${day}&minYear=${minYear}&maxYear=${maxYear}`;

        // Fetch data from API
        let response = await fetch(url);

        // Convert response to JSON
        let data = await response.json();

        console.log(data);

        // Store matching events
        let results = [];


        // Display results
        if (data.length > 0) {
            document.getElementById("theDate").innerHTML = data.join("");
        } else {
            document.getElementById("theDate").innerHTML =
                "No events found for that range.";
        }

    } catch (error) {

        console.error(error);

        document.getElementById("theDate").innerHTML =
            "Error loading data.";

    }

});
