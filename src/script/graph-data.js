function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
window.onload = function () {
    // Data to be plotted on the graph
    var colors = [];
    var colors_2 = [];

    for (var i = 0; i < data.length; i++) {
        colors.push(getRandomColor());
    }
    for (var i = 0; i < data_2.length; i++) {
        colors_2.push(getRandomColor());
    }

    var familygraph = document.getElementById('family-graph').getContext('2d');
    var individualgraph = document.getElementById('individual-graph').getContext('2d');
    var myChart1 = new Chart(individualgraph, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Circular Graph'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var currentValue = dataset.data[tooltipItem.index];
                        return 'Price: ' + currentValue;
                    }
                }
            }
        }
    });
    
    var myChart2 = new Chart(familygraph, {
        type: 'doughnut',
        data: {
            labels: labels_2,
            datasets: [{
                data: data_2,
                backgroundColor: colors_2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Circular Graph'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
};