let data;
let ctx;

function preload() {
  data = loadJSON('data.json');
}

function setup() {
  $('#challonge').challonge('Phoenix_League_season2', {
    subdomain: '',
    theme: '0',
    multiplier: '1.0',
    match_width_multiplier: '1.0',
    show_final_results: '1',
    show_standings: '1'
  });


  drawChart(data, $('#KDA'), "KDA");
  drawChart(data, $('#firstbloods'), "First Bloods");
  drawChart(data, $('#avgcsmin'), "Avg CS / Min");
  drawChart(data, $('#csdiff10'), "CS Diff @ 10");
  drawChart(data, $('#goldshare'), "Gold Share");
  drawChart(data, $('#damagemin'), "Damage / Min");
  drawChart(data, $('#damageshare'), "Damage Share");
  drawChart(data, $('#killparticipation'), "Kill Participation");

}

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function drawChart(data, element, chartType) {
  // make this called by a mouse click in "stats"
  ctx = element;
  // ctx = createCanvas(400, 400);
  Chart.defaults.global.defaultFontColor = 'white';
  Chart.defaults.global.elements.point.radius = 0;

  let Average = data.Average;
  let Katar = data.Katar;
  let Tapmaster = data.Tapmaster;
  let WonderGinger = data.WonderGinger;
  let CliveGildarts = data.CliveGildarts;
  let YoohooManiac = data.YoohooManiac;
  let Hopeless0ne = data.Hopeless0ne;

  let chartData = [];
  let averageData = [];
  for (i in data) {
    if (data[i].Player !== "Average") {
      let player = data[i];
      chartData.push(Math.round(player[chartType] * 10) / 10);
      averageData.push(Math.round(Average[chartType] * 10) / 10);
    }
  }
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Katar", "Tapmaster", "Wonder Ginger", "Clive Gildarts",
        "Yoohoo Maniac", "Hopeless0ne"
      ],
      datasets: [{
        label: chartType,
        data: chartData,
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
      }, {
        label: 'League Average',
        data: averageData,
        lineCap: 'round',
        borderColor: 'rgba(200,200,200,.5)',
        borderDash: [30, 5],
        spanGaps: true,
        backgroundColor: 'rgba(255,255,255,1)',
        fill: false,
        type: 'line'
      }]
    },
    options: {
      legend: {
        labels: {
          fontColor: 'white'
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
