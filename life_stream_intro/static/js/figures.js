$.getJSON("{{ url_for('static', filename='bar.json') }}", function (json) {

  var data = json

  var ctx = document.getElementById("barChart").getContext("2d");
  ctx.canvas.width = 1000;
  ctx.canvas.height = 800;

  var localeBarChart = new Chart(ctx).Bar(data);
});

