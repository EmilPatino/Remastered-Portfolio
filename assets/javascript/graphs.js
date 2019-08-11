window.onload = function load() {

google.charts.load("current", {'packages':["corechart"]});

google.charts.setOnLoadCallback(businessGraph);

google.charts.setOnLoadCallback(technicalGraph);

function businessGraph() {
    var data = new google.visualization.DataTable();

        data.addColumn('string', 'Skill');
        data.addColumn('number', 'Mastery');
        data.addRows([
          ['Project Management', 20],
          ['Product Management', 25],
          ['Agile/Scrum Master', 15],
          ['Technical Writing', 10],
          ['Software Design Lifecylce', 10],
          ['Executive Briefings', 10],
          ['Vendor Management', 10]
        ]);

        var options = {
          pieStartAngle: 25,
          width: '100%',
          height: '100%',
          chartArea:{
            left: "0%",
            top: "10%",
            bottom: "10%",
            height: "80%",
            width: "100%"},
          pieHole: 0.5,
          pieSliceText: 'none',
          tooltip: { trigger: 'none' },
          
          legend: { position: 'labeled', textStyle: 
          {color: 'rgb(114, 114, 114)',
          // bold: true,
          fontName: '"Helvetica Neue", sans-serif',
          fontSize: '10px'},
        },

          slices: {
            0: { color: '#69306D' },
            1: { color: '#A5668B' },
            2: { color: '#9C89B8' },
            3: { color: '#F0A6CA' },
            4: { color: '#EFC3E6' },
            5: { color: '#B8BEDD' },
            6: { color: '#F0E6EF' }
          }
        };
        
        var chart = new google.visualization.PieChart(document.getElementById('donutchartOne'));
        chart.draw(data, options);
      }

function technicalGraph() {
    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Skill');
    data.addColumn('number', 'Mastery');
    data.addRows([
        ['Cloud Architecture (AWS)', 40],
        ['HTML/CSS', 15],
        ['JavaScript/jQuery', 15],
        ['Node.js', 10],
        ['SQL', 10],
        ['NoSQL/JSON', 5],
        ['AJAX', 5]
        ]);

        var options = {
          pieStartAngle: -95,
          width: '100%',
          height: '100%',
          chartArea:{
            left: "0%",
            top: "10%",
            bottom: "10%",
            height: "80%",
            width: "100%"},
          pieHole: 0.5,
          tooltip: { trigger: 'none' },
          pieSliceText: 'none',
          
          legend: { position: 'labeled', textStyle: 
          {color: 'rgb(114, 114, 114)',
          // bold: true,
          fontName: '"Helvetica Neue", sans-serif',
          fontSize: '10px'},
        },

          slices: {
            0: { color: '#75DADD' },
            1: { color: '#4F8F91' },
            2: { color: '#009499' },
            3: { color: '#065A82' },
            4: { color: '#1C7293' },
            5: { color: '#D8DBE2' },
            6: { color: '#A9BCD0' }
          }
        };
        
        var chart = new google.visualization.PieChart(document.getElementById('donutchartTwo'));
        chart.draw(data, options);
      }


      $(window).resize(function(){
        technicalGraph();
        businessGraph();
    });


    };

    