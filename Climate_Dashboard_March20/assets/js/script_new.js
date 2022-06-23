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
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",

			],
			data: [75, 73, 66, 59, 
				55, 74, 75,59,80,90,63
			]
		}
	]
};

// Notice how nested the beginAtZero is
var options = {

	legend: {
        display: false
    },

	title: {
		display: true,
		text: "Climate Disclosure Readiness",
		fontSize: 22,
		position: "top",
		fontColor: "white"
	},
	scales: {
		xAxes: [
			{
				gridLines: {
					display: false,
					drawBorder: false,
					drawOnChartArea: false
				},
				ticks: {
					fontColor: "#fff",
					// fontStyle: "bold",
					fontSize: 9,
				}
			},
			
			
		],
		yAxes: [{
			scaleLabel: {
				display: true,
				labelString: 'Market Cap',
				fontSize: 12
			},

			ticks: {
				fontColor: "#fff",
				// fontStyle: "bold",
				fontSize: 13,
				beginAtZero: true,
				maxTicksLimit: 5,
				padding: 20,
				max: 100,


				min: 0,
				max: 100,
				stepSize: 10,
				suggestedMin: 5,
				suggestedMax: 15,
				callback: function(label, index, labels) {
					switch (label) {
						case 0:
							return 'Small';
						case 40:
							return 'Average';
						case 80:
							return 'Mega';
						// case 3:
						// 	return 'THREE';
						// case 4:
						// 	return 'FOUR';
						// case 5:
						// 	return 'FIVE';
					}
				}

			},
			gridLines: {
				drawTicks: false,
				display: false
			}

		}],
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
Chart.defaults.global.defaultFontColor = "#fff";
Chart.defaults.global.defaultFontSize = 10;

// Data with datasets options
var data = {
	labels: [
		"Climate Oversight",
		"Climate Strategy",
		"Climate Risk",
		"Climate Metrics & Targets",
		// "Strategy Resilience",
		// "Risk Identification",
		// "Risk Management",
		// "Risk Integration",
		// "Climate Metrics",
		// "GHG Emissions",
		// "Climate Targets",
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
				// "#2097e1",
				// "#2097e1",
				// "#2097e1",
				// "#2097e1",
				// "#2097e1",
				// "#2097e1",
				// "#2097e1",
				// "#2097e1"
			],
			data: [70, 75, 69, 78, 
				// 67, 68, 70,68,74,75,79
			]
		},
		{
			label: "Peer Avg.",
			fill: true,
			backgroundColor: [
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",
				"#fff",
			],
			data: [55, 71, 51, 74, 
				// 64, 61, 63,52,71,72,74
			]
		}
	]
};



// Notice how nested the beginAtZero is
var options = {
	legend: {
        display: false
    },
	title: {
		display: true,
		text: "Climate Disclosure Readiness Benchmark",
		fontSize: 22,
		position: "top",
		fontColor: "white"
	},
	scales: {
		xAxes: [
			{
				gridLines: {
					display: false,
					drawBorder: false,
					drawOnChartArea: false
				}
			}
		],
		yAxes: [{
			scaleLabel: {
				display: true,
				labelString: 'Market Cap',
				fontSize: 12
			},

			ticks: {
				fontColor: "#fff",
				// fontStyle: "bold",
				fontSize: 13,
				beginAtZero: true,
				maxTicksLimit: 5,
				padding: 20,
				max: 100,


				min: 0,
				max: 100,
				stepSize: 10,
				suggestedMin: 5,
				suggestedMax: 15,
				callback: function(label, index, labels) {
					switch (label) {
						case 0:
							return 'Small';
						case 40:
							return 'Average';
						case 80:
							return 'Mega';
						// case 3:
						// 	return 'THREE';
						// case 4:
						// 	return 'FOUR';
						// case 5:
						// 	return 'FIVE';
					}
				}

			},
			gridLines: {
				drawTicks: false,
				display: false
			}

		}],

		
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
			borderColor: "#fff",
			pointBorderColor: "#fff",
			pointBackgroundColor: "#fff",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "#fff",
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
				fontColor: "#fff",
				

				// fontSize: 18
			}
		},
		legend: {
			display: false
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
					fontColor: "#fff",
					// fontStyle: "bold",
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
					fontColor: "#fff",
					// fontStyle: "bold"
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
	title: "dataTitle1",//adding the title you want to show
    data: [{
      x: 33,
      y: 54,
      r: 25
    }, {
      x: 60,
      y: 30,
      r: 25
    }, {
      x: 40,
      y: 60,
      r: 25
    }, {
      x: 30,
      y: 70,
      r: 25
    }, {
      x: 20,
      y: 30,
      r: 25
    }, {
      x: 45,
      y: 60,
      r: 25
    }],
    backgroundColor: "#2097e1"
  }]
};



	
var bubbleChart = new Chart(popCanvas, {
  type: 'bubble',
  data: popData,

  options: {
	legend: {
		position: "bottom",
		labels: {
			fontColor: "#fff",
			

			// fontSize: 18
		}
	},
	legend: {
		display: false
	},
	title: {
		display: true,
		text: "Climate Targets",
		fontSize: 22,
		position: "top",
		fontColor: "white"
	},
	scales: {
		yAxes: [{
			ticks: {
				fontColor: "#fff",
				// fontStyle: "bold",
				beginAtZero: true,
				maxTicksLimit: 5,
				padding: 20,
				max: 100

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
				beginAtZero: true,
				padding: 20,
				fontColor: "#fff",
				max: 100
				// fontStyle: "bold"
			}
		}]
	}
}


  
});






var popCanvas = document.getElementById("popChart1");



// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;

var popData = {

	
  datasets: [{
    label: ['Peer 1'],
	title: "dataTitle1",
    data: [{
      x: 33,
      y: 54,
      r: 25
    }, 
	
	{
      x: 60,
      y: 30,
      r: 25
    }, {
      x: 40,
      y: 60,
      r: 25
    }, {
      x: 30,
      y: 70,
      r: 25
    }, {
      x: 20,
      y: 30,
      r: 25
    }, {
      x: 45,
      y: 60,
      r: 25
    }],
    backgroundColor: "#2097e1"
  }]
};



	
var bubbleChart = new Chart(popCanvas, {
  type: 'bubble',
  data: popData,

  options: {
	legend: {
		position: "bottom",
		labels: {
			fontColor: "#fff",
			

			// fontSize: 18
		}
	},
	legend: {
		display: false
	},
	title: {
		display: true,
		text: "Climate Disclosure Benchmark",
		fontSize: 22,
		position: "top",
		fontColor: "white"
	},
	scales: {
		yAxes: [{
			scaleLabel: {
				display: true,
				labelString: 'Market Cap',
				fontSize: 12
			},

			ticks: {
				fontColor: "#fff",
				// fontStyle: "bold",
				fontSize: 13,
				beginAtZero: true,
				maxTicksLimit: 5,
				padding: 20,
				max: 100,

				
					 

				min: 0,
				max: 100,
				stepSize: 10,
				suggestedMin: 5,
				suggestedMax: 15,
				callback: function(label, index, labels) {
					switch (label) {
						case 0:
							return 'Small';
						case 40:
							return 'Average';
						case 80:
							return 'Mega';
						// case 3:
						// 	return 'THREE';
						// case 4:
						// 	return 'FOUR';
						// case 5:
						// 	return 'FIVE';
					}
				}

			},
			gridLines: {
				drawTicks: false,
				display: false
			}

		}],
		xAxes: [{

			scaleLabel: {
				display: true,
				labelString: 'Climate Disclosure Maturity',
				fontSize: 12,
			},

			gridLines: {
				zeroLineColor: "transparent"
			},
			ticks: {
				beginAtZero: true,
				padding: 20,
				fontColor: "#fff",
				max: 100,
				fontSize: 13,

				min: 0,
				max: 100,
				stepSize: 10,
				suggestedMin: 5,
				suggestedMax: 15,
				callback: function(label, index, labels) {
					switch (label) {
						case 20:
							return 'Starting';
						case 50:
							return 'Average';
						case 80:
							return 'Mature';
						// case 3:
						// 	return 'THREE';
						// case 4:
						// 	return 'FOUR';
						// case 5:
						// 	return 'FIVE';
					}
				}
				// fontStyle: "bold"
			}
		}]
	}
}

});

var popCanvas1 =new Chart(document.getElementById("bubble-chart"), 


{

	type: 'bubble',
	data: {
	  datasets: [{
		backgroundColor: Utils.color(0),
		borderColor: Utils.color(0),
		data: generateData()
	  }, {
		backgroundColor: Utils.color(1),
		borderColor: Utils.color(1),
		data: generateData()
	  }]
	},
	options: {
	  plugins: {
		datalabels: {
		  anchor: function(context) {
			var value = context.dataset.data[context.dataIndex];
			return value.v < 50 ? 'end' : 'center';
		  },
		  align: function(context) {
			var value = context.dataset.data[context.dataIndex];
			return value.v < 50 ? 'end' : 'center';
		  },
		  color: function(context) {
			var value = context.dataset.data[context.dataIndex];
			return value.v < 50 ? context.dataset.backgroundColor : 'white';
		  },
		  font: {
			weight: 'bold'
		  },
		  formatter: function(value) {
			return Math.round(value.v);
		  },
		  offset: 2,
		  padding: 0
		}
	  },
  
	  // Core options
	  aspectRatio: 5 / 3,
	  layout: {
		padding: 16
	  },
	  elements: {
		point: {
		  radius: function(context) {
			var value = context.dataset.data[context.dataIndex];
			var size = context.chart.width;
			var base = Math.abs(value.v) / 100;
			return (size / 24) * base;
		  }
		}
	  },
	}
});