let years = [];
let temps = [];

async function getData() {
    const response = await fetch("original.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
        const row = elem.split(",");
        const year = row[0];
        const temp = row[1];
        years.push(year);
        temps.push(temp + 14);
        console.log(year, temp);
    });
    }
    //end of functions
    //call the function to test if you see the image on the left in the console

async function createGraph(){
    const ctx = document.getElementById('myChart');

    Chart.defaults.font.size = 18;
    
    new Chart(ctx, {
        type: 'line',
        data: {
        labels: years,
        datasets: [{
            label: 'Global Average Temperature',
            data: temps,
            borderWidth: 1,
            borderColor: 'rgb(100,50,60)'
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
}
getData();
createGraph();