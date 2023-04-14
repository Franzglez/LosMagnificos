const ctx = document.getElementById('myChart');
console.log(Chart)


function printChart() {
   console.log(arrayRazas);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrayRazas,
            datasets: [{
                label: 'Breed Frequency',
                data: arrayCont,
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
}
