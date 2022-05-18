/*

 */

/*
 * this is the javascipt for the dwadmin template.
 * if you want to change, please create a new javascript,
 * because if one is missing in the original dwadmin javascript it will fall apart
 */

    

$(document).ready(function () {
	setInterval(function () {
		$(".loader").hide();
		$(".loader-overlay").hide();
	}, 1000);
	
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark'); //add this
	
if (currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
else if (currentTheme === 'dark') {
        toggleSwitch.checked = false;
    }
	
	
	

	

	

	


	


	$("#sidebar-toggle, .sidebar-overlay").click(function () {
		$(".sidebar").toggleClass("sidebar-show");
		$(".sidebar-overlay").toggleClass("d-block");
	});

	$(".sidebar-items .submenu-items").click(function () {
		$(".sidebar-items .submenu-items").removeClass("active");
		$(this).toggleClass("active");
	});

	function clickMenu(goId, title) {
		$(goId).click(function (e) {
			e.preventDefault();

			$(".sidebar-items .items").removeClass("active");
			$(".sidebar-items .submenu a").removeClass("active");
			$(this).addClass("active");

		});
	}

});


window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}
console.log('Please activate dark mode, if you want to use it!');
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (!e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
	localStorage.setItem('theme', 'light'); //add this
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light') {

        toggleSwitch.checked = true;

    }
}



var canvas = document.getElementById("boxChart");
var ctx = canvas.getContext("2d");

// Global Options:
Chart.defaults.global.defaultFontColor = "#2097e1";
Chart.defaults.global.defaultFontSize = 10;

// Data with datasets options
var data = {
	labels: [
		"Board Oversight",
		"Management Role",
		"Strategy Risk",
		"Strategy Impact",
		"Strategy Resilience",
		"Risk Identification",
		"Risk Management",
		"Risk Integration",
		"Climate Metrics",
		"GHG Emissions",
		"Climate Targets",
	],
	datasets: [
		{
			label: "Insight Score",
			fill: true,
			backgroundColor: [
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6"

			],
			data: [75, 73, 66, 59, 55, 74, 75,59,80,90,63]
		}
	]
};

// Notice how nested the beginAtZero is
var options = {
	title: {
		display: true,
		text: "Climate Readiness Insight",
		fontSize: 22,
		position: "top",
		fontColor: "white"
	},
	scales: {
		xAxes: [
			{
				gridLines: {
					display: true,
					drawBorder: true,
					drawOnChartArea: false
				}
			}
		],
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
					max: 100
				}
			}
		]
	}
};

// added custom plugin to wrap label to new line when \n escape sequence appear
var labelWrap = [
	{
		beforeInit: function (chart) {
			chart.data.labels.forEach(function (e, i, a) {
				if (/\n/.test(e)) {
					a[i] = e.split(/\n/);
				}
			});
		}
	}
];

// Chart declaration:
var myBarChart = new Chart(ctx, {
	type: "bar",
	data: data,
	options: options,
	plugins: labelWrap
});


var canvas = document.getElementById("barChart");
var ctx = canvas.getContext("2d");

// Global Options:
Chart.defaults.global.defaultFontColor = "#2097e1";
Chart.defaults.global.defaultFontSize = 10;

// Data with datasets options
var data = {
	labels: [
		"Board Oversight",
		"Management Role",
		"Strategy Risk",
		"Strategy Impact",
		"Strategy Resilience",
		"Risk Identification",
		"Risk Management",
		"Risk Integration",
		"Climate Metrics",
		"GHG Emissions",
		"Climate Targets",
	],
	datasets: [
		{
			label: "Company Readiness",
			fill: true,
			backgroundColor: [
				"#2097e1",
				"#2097e1",
				"#2097e1",
				"#2097e1",
				"#2097e1",
				"#2097e1",
				"#2097e1",
				"#2097e1",
				"#2097e1",
				"#2097e1",
				"#2097e1",
				"#2097e1"
			],
			data: [70, 75, 69, 78, 67, 68, 70,68,74,75,79]
		},
		{
			label: "Peer Avg.",
			fill: true,
			backgroundColor: [
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6",
				"#bdd9e6"
			],
			data: [55, 71, 51, 74, 64, 61, 63,52,71,72,74]
		}
	]
};



// Notice how nested the beginAtZero is
var options = {
	title: {
		display: true,
		text: "Climate Readiness Benchmark",
		fontSize: 22,
		position: "top",
		fontColor: "white"
	},
	scales: {
		xAxes: [
			{
				gridLines: {
					display: true,
					drawBorder: true,
					drawOnChartArea: false
				}
			}
		],
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
					max: 100
				}
			}
		]
	}
};

// added custom plugin to wrap label to new line when \n escape sequence appear
var labelWrap = [
	{
		beforeInit: function (chart) {
			chart.data.labels.forEach(function (e, i, a) {
				if (/\n/.test(e)) {
					a[i] = e.split(/\n/);
				}
			});
		}
	}
];

// Chart declaration:
var myBarChart = new Chart(ctx, {
	type: "bar",
	data: data,
	options: options,
	plugins: labelWrap
});




var ctx = document.getElementById('myChart').getContext("2d");

var myChart = new Chart(ctx, {
	type: 'line',
	options: {
        plugins: {
            title: {
                display: true,
                text: 'TCFD Graph'
            }
        }
    },
	
	data: {
		labels: ["Dec 21","Dec 28","Jan 4","Jan 11","Jan 17","Jan 23","Jan 30","Feb 6", "Feb 13", "Feb 20", "Feb 27", "March 5", "March 12", "March 19"],
		datasets: [{
			label: "Climate Insights",
			borderColor: "#bdd9e6",
			pointBorderColor: "#bdd9e6",
			pointBackgroundColor: "#bdd9e6",
			pointHoverBackgroundColor: "#bdd9e6",
			pointHoverBorderColor: "#bdd9e6",
			pointBorderWidth: 10,
			pointHoverRadius: 10,
			pointHoverBorderWidth: 1,
			pointRadius: 3,
			fill: false,
			borderWidth: 4,
			data: [56, 50, 59, 65, 70, 60, 72,56, 50, 59, 65, 70,59, 65, 70]
		}]
	},
	
	options: {
		legend: {
			position: "bottom",
			labels: {
				fontColor: "#bdd9e6"
				// fontSize: 18
			}
		},
		title: {
			display: true,
			text: "Financials Corporate Climate Insights",
			fontSize: 22,
			position: "top",
			fontColor: "white"
		},
		scales: {
			yAxes: [{
				ticks: {
					fontColor: "#2097e1",
					fontStyle: "bold",
					beginAtZero: true,
					maxTicksLimit: 5,
					padding: 20
				},
				gridLines: {
					drawTicks: false,
					display: false
				}

			}],
			xAxes: [{
				gridLines: {
					zeroLineColor: "transparent"
				},
				ticks: {
					padding: 20,
					fontColor: "#2097e1",
					fontStyle: "bold"
				}
			}]
		}
	}
});



var popCanvas = document.getElementById("popChart");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;

var popData = {
  datasets: [{
    label: ['Net-Zero Targets'],
    data: [{
      x: 100,
      y: 0,
      r: 10
    }, {
      x: 60,
      y: 30,
      r: 20
    }, {
      x: 40,
      y: 60,
      r: 25
    }, {
      x: 80,
      y: 80,
      r: 50
    }, {
      x: 20,
      y: 30,
      r: 25
    }, {
      x: 0,
      y: 100,
      r: 5
    }],
    backgroundColor: "#2097e1"
  }]
};

	
var bubbleChart = new Chart(popCanvas, {
  type: 'bubble',
  data: popData
});


// new Chart(document.getElementById("bubble-chart"), {
// 	type: 'bubble',
// 	data: {
// 	  labels: "Africa",
// 	  datasets: [{
// 		label: ["China"],
// 		backgroundColor: "rgba(255,221,50,0.2)",
// 		borderColor: "rgba(255,221,50,1)",
// 		title: "dataTitle1",//adding the title you want to show
// 		data: [{
// 		  x: 21269017,
// 		  y: 5.245,
// 		  r: 15
// 		}]
// 	  }, {
// 		label: ["Denmark"],
// 		backgroundColor: "rgba(60,186,159,0.2)",
// 		borderColor: "rgba(60,186,159,1)",
// 		title: "dataTitle2",
// 		data: [{
// 		  x: 258702,
// 		  y: 7.526,
// 		  r: 10
// 		}]
// 	  }, {
// 		label: ["Germany"],
// 		backgroundColor: "rgba(0,0,0,0.2)",
// 		borderColor: "#000",
// 		title: "dataTitle3",//adding the title you want to show
// 		data: [{
// 		  x: 3979083,
// 		  y: 6.994,
// 		  r: 15
// 		}]
// 	  }, {
// 		label: ["Japan"],
// 		backgroundColor: "rgba(193,46,12,0.2)",
// 		borderColor: "rgba(193,46,12,1)",
// 		title: "dataTitle4",//adding the title you want to show
// 		data: [{
// 		  x: 4931877,
// 		  y: 5.921,
// 		  r: 15
// 		}]
// 	  }]
// 	},
// 	options: {
// 	  title: {
// 		display: true,
// 		text: 'Predicted world population (millions) in 2050'
// 	  },
// 	  scales: {
// 		yAxes: [{
// 		  scaleLabel: {
// 			display: true,
// 			labelString: "Happiness"
// 		  }
// 		}],
// 		xAxes: [{
// 		  scaleLabel: {
// 			display: true,
// 			labelString: "GDP (PPP)"
// 		  }
// 		}]
// 	  }
// 	}
//   });
  
//   Chart.plugins.register({
// 	afterDatasetsDraw: function(chart, easing) {
// 	  var ctx = chart.ctx;
  
// 	  chart.data.datasets.forEach(function(dataset, i) {
// 		var meta = chart.getDatasetMeta(i);
// 		if (meta.type == "bubble") { //exclude scatter
// 		  meta.data.forEach(function(element, index) {
// 			// Draw the text in black, with the specified font
// 			ctx.fillStyle = 'rgb(0, 0, 0)';
// 			var fontSize = 13;
// 			var fontStyle = 'normal';
// 			var fontFamily = 'Helvetica Neue';
// 			ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
  
// 			// Just naively convert to string for now
// 			var dataString = dataset.data[index].toString();
// 			// Make sure alignment settings are correct
// 			ctx.textAlign = 'center';
// 			ctx.textBaseline = 'middle';
  
// 			var padding = 15;
// 			var position = element.tooltipPosition();
// 			ctx.fillText(dataset.title, position.x, position.y - (fontSize / 2) - padding);
// 		  });
// 		} //if
// 	  });
// 	}
//   });
