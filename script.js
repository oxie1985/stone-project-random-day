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

    output.innerHTML = "";

    try {
        // Construct the URL with the parameters
        let url = `https://corsproxy.io/?url=https://events.historylabs.io/date?month=${month}&day=${day}&minYear=${minYear}&maxYear=${maxYear}`;

        let response = await fetch(url);
        let data = await response.json();

        // Access the 'events' array inside the returned object
        let eventsList = data.events;

        console.log("Full Data Object:", data);
        console.log("Events Array:", eventsList);

        // Check if eventsList exists and is an array with items
        if (Array.isArray(eventsList) && eventsList.length > 0) {
            
            let html = "";

            // Loop through each event in the array
            eventsList.forEach(event => {
                html += `
                    <div class="event" style="margin-bottom: 1.5rem; border-bottom: 1px solid #000000; padding-bottom: 1rem;">
                        <h3 style="color: #000000;">${event.year}</h3>
                        <p style="font-size: 1.1rem;">${event.content}</p>
                    </div>
                `;
            });

            // Update the screen once with the full string
            output.innerHTML = html;

        } else {
            output.innerHTML = "No events found for this specific date and year range.";
        }

    } catch (error) {
        console.error("Fetch Error:", error);
        output.innerHTML = "Error loading data. Please check your connection or parameters.";
    }
});

let newLine = "";