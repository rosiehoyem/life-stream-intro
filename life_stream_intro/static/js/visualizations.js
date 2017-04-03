var ctx = document.getElementById("myChart myBubbleChart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
var myBubbleChart = new Chart(ctx,{
  type: 'bubble',
  data: data,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
    elements: {
      points: {
        borderWidth: 1,
        borderColor: 'rgb(0, 0, 0)'
      }
    }
  }
});
var data = {
  datasets: [
    {
      label: 'Public Schools',
      data: [
        {
          x: 68902,
          y: 40.7,
          r: 20
        },
        {
          x: 70063,
          y: 43.9,
          r: 20
        },
        {
          x: 68902,
          y: 48.9,
          r: 10
        },
        {
          x: 77576,
          y: 46.3,
          r: 30
        },
        {
          x: 68902,
          y: 48.7,
          r: 10
        },
        {
          x: 50141,
          y: 25.5,
          r: 10
        },
        {
          x: 68902,
          y: 45.9,
          r: 30
        },
        {
          x: 68902,
          y: 20.3,
          r: 25
        },
        {
          x: 68902,
          y: 40.1,
          r: 25
        },
      ],
      backgroundColor:"#FF6384",
      hoverBackgroundColor: "#FF6384",
    }
  ]
};