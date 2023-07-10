function drawGraph() {
  var ctx = document.getElementById("chart1").getContext("2d");
  console.log(ctx);
  var myChart = new Chart(ctx, {
    type: "polarArea",
    data: {
      labels: ["Total Users", "New Users", "Contributors"],
      datasets: [
        {
          data: [137, 143, 123],
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
        },
      ],
    },
    options: {
      scales: {
        y: {
          responsive: true,
        },
      },
    },
  });

  // myChart.clear();

  var ctx1 = document.getElementById("chart2").getContext("2d");
  myChart = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "New Users",
          data: [137, 143, 123, 10, 150, 128, 56, 96, 5, 26, 97, 45],
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
        },
      ],
    },
    options: {
      scales: {
        y: {
          responsive: true,
        },
      },
    },
  });
}
window.onload = drawGraph;
