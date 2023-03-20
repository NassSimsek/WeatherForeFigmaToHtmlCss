const ctx = document.getElementById('myChart');
const option = {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: "#442B72",
     pointStyle: 'rectRounded',
      pointRadius: 10,
      pointHoverRadius: 15,
      fill: true
            }]
    },
    options: {
       
    }
}
new Chart(ctx, option);