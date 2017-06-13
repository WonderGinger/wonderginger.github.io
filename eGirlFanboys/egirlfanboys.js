function setup() {
  $('#challonge').challonge('Phoenix_League_season2', {
    subdomain: '',
    theme: '0',
    multiplier: '1.0',
    match_width_multiplier: '1.0',
    show_final_results: '1',
    show_standings: '1'
  });
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


function drawChart() {
  var query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1H6Ej3evkqa8xDHLyHDrVBsA12Dvh__ZEKvPv-2tgtaA/edit?usp=sharing'
  );
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  var data = response.getDataTable();
  var chart = new google.visualization.ColumnChart(document.getElementById(
    'columnchart'));
  chart.draw(data, null);
}
