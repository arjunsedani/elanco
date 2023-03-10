import HighchartsReact from "highcharts-react-official";

const ranges = [
    [1246406400000, 14.3, 27.7],
    [1246492800000, 14.5, 27.8],
    [1246579200000, 15.5, 29.6],
    [1246665600000, 16.7, 30.7],
    [1246752000000, 16.5, 25.0],
    [1246838400000, 17.8, 25.7],
    [1246924800000, 13.5, 24.8],
    [1247011200000, 10.5, 21.4],
    [1247097600000, 9.2, 23.8],
    [1247184000000, 11.6, 21.8],
    [1247270400000, 10.7, 23.7],
    [1247356800000, 11.0, 23.3],
    [1247443200000, 11.6, 23.7],
    [1247529600000, 11.8, 20.7],
    [1247616000000, 12.6, 22.4],
    [1247702400000, 13.6, 19.6],
    [1247788800000, 11.4, 22.6],
    [1247875200000, 13.2, 25.0],
    [1247961600000, 14.2, 21.6],
    [1248048000000, 13.1, 17.1],
    [1248134400000, 12.2, 15.5],
    [1248220800000, 12.0, 20.8],
    [1248307200000, 12.0, 17.1],
    [1248393600000, 12.7, 18.3],
    [1248480000000, 12.4, 19.4],
    [1248566400000, 12.6, 19.9],
    [1248652800000, 11.9, 20.2],
    [1248739200000, 11.0, 19.3],
    [1248825600000, 10.8, 17.8],
    [1248912000000, 11.8, 18.5],
    [1248998400000, 10.8, 16.1],
  ],
  averages = [
    [1246406400000, 21.5],
    [1246492800000, 22.1],
    [1246579200000, 23],
    [1246665600000, 23.8],
    [1246752000000, 21.4],
    [1246838400000, 21.3],
    [1246924800000, 18.3],
    [1247011200000, 15.4],
    [1247097600000, 16.4],
    [1247184000000, 17.7],
    [1247270400000, 17.5],
    [1247356800000, 17.6],
    [1247443200000, 17.7],
    [1247529600000, 16.8],
    [1247616000000, 17.7],
    [1247702400000, 16.3],
    [1247788800000, 17.8],
    [1247875200000, 18.1],
    [1247961600000, 17.2],
    [1248048000000, 14.4],
    [1248134400000, 13.7],
    [1248220800000, 15.7],
    [1248307200000, 14.6],
    [1248393600000, 15.3],
    [1248480000000, 15.3],
    [1248566400000, 15.8],
    [1248652800000, 15.2],
    [1248739200000, 14.8],
    [1248825600000, 14.4],
    [1248912000000, 15],
    [1248998400000, 13.6],
  ];

export const ColumnChartConfig: HighchartsReact.Props = {
    options: {
      chart: {
        type: "column",
      },
      title: {
        text: "Price to Earnings (P/E)",
        align: "left",
      },
      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        visible: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: "{point.y:.1f}%",
          },
        },
        column: {
          borderRadius: 7,
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
      },
      series: [
        {
          name: "Browsers",
          type: "column",
          colorByPoint: true,
          pointWidth: 20,
          data: [
            {
              name: "Google",
              y: 30.3,
            },
            {
              name: "US Technology Average",
              y: 41.3,
            },
            {
              name: "NASDAQ Average",
              y: 44.2,
            },
          ],
        },
      ],
      credits: { enabled: false },
    },
  },
  CombinationChartConfig: HighchartsReact.Props = {
    options: {
      title: {
        text: "Balance Sheet",
        align: "left",
      },
      xAxis: {
        categories: ["Q4 2020", "Q1 2021", "Q2 2021", "Q3 2021", "Q4 2021"],
      },
      yAxis: {
        title: {
          style: { display: "none" },
        },
      },
      series: [
        {
          type: "column",
          name: "Total Assets",
          data: [7, 4, 5.7, 6.5, 7],
          color: "#32D9AB",
          pointWidth: 15,
        },
        {
          type: "column",
          name: "Total Liabilities",
          data: [4.7, 4.7, 0.5, 2, 2.75],
          color: "#E52500",
          pointWidth: 15,
        },
        {
          type: "line",
          color: "#000000",
          name: "Liabilities to Asset Ratio",
          data: [5, 2.67, 3, 6.33, 3.33],
        },
      ],
      plotOptions: {
        column: {
          borderRadius: 7,
        },
        line: {},
      },
    },
  },
  LineChartConfig: HighchartsReact.Props = {
    options: {
      title: {
        text: "Total Debt to Assets",
        align: "left",
      },

      subtitle: {
        text: "Source: thesolarfoundation.com",
        style: { display: "none" },
      },

      yAxis: {
        title: {
          text: "Number of Employees",
          style: { display: "none" },
        },
      },

      xAxis: {
        accessibility: {
          rangeDescription: "Range: 2010 to 2017",
        },
      },

      legend: {
        layout: "horizontal",
        align: "right",
        verticalAlign: "top",
      },
      plotOptions: {
        series: {
          // fillOpacity: 0, // set the fillOpacity
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
          marker: {
            enabled: false,
          },
        },
      },

      series: [
        {
          name: "Asset",
          type: "line",
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
          color: "#00B383",
        },
        {
          name: "Debt",
          type: "line",
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
          color: "#E52500",
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
      credits: {
        enabled: false,
      },
    },
  },
  PieChartConfig: HighchartsReact.Props = {
    options: {
      title: {
        text: "Buy",
        style: { fontSize: "28px", color: "#32D9AB" },
        y: 225,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            formatter() {
              return `${this.key}: ${this.y}%`;
            },
          },
          showInLegend: true,
        },
      },
      series: [
        {
          type: "pie",
          name: "Composition",
          colorByPoint: true,
          innerSize: "90%",
          data: [
            {
              name: "Strong Buy",
              color: "#12CA98",
              y: 50,
            },
            {
              name: "Buy",
              color: "#5EE3BE",
              y: 27.5,
            },
            {
              name: "Hold",
              color: "#C7CFD5",
              y: 17.5,
            },
            {
              name: "Under Perform",
              color: "#A36700",
              y: 2.5,
            },
            {
              name: "Sell",
              color: "#E52500",
              y: 2.5,
            },
          ],
        },
      ],
      credits: { enabled: false },
    },
  },
  ScatterPlotConfig: HighchartsReact.Props = {
    options: {
      chart: {
        type: "scatter",
        // zoomType: "xy",
      },
      title: {
        text: "Earnings Forecast",
        align: "left",
      },
      xAxis: {
        dateTimeLabelFormats: {
          year: "%y",
        },
        type: "datetime",
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
      },
      yAxis: {
        title: {
          text: "Weight (kg)",
          style: { display: "none" },
        },
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 10,
            states: {
              hover: {
                enabled: true,
                lineColor: "rgb(100,100,100)",
              },
            },
            symbol: "circle",
          },
          tooltip: {
            headerFormat: "<b>{series.name}</b><br>",
            pointFormat: "{point.x} cm, {point.y} kg",
          },
        },
      },
      series: [
        {
          name: "Estimate",
          type: "scatter",
          color: "#F5D6EF",
          data: [
            [1183420800000, 0.7353],
            [1186444800000, 0.7251],
            [1186531200000, 0.7251],
            [1190160000000, 0.7157],
            [1190332800000, 0.7119],
            [1190592000000, 0.7087],
            [1190851200000, 0.7053],
            [1194220800000, 0.6903],
            [1197417600000, 0.6815],
            [1203292800000, 0.6833],
            [1206576000000, 0.6336],
            [1210032000000, 0.6441],
            [1210118400000, 0.6482],
            [1210204800000, 0.6517],
            [1210550400000, 0.6482],
          ],
        },
        {
          name: "Actual",
          color: "#E930BF",
          type: "scatter",
          data: [
            [1183420800000, 0.7653],
            [1186444800000, 0.7651],
            [1186531200000, 0.7651],
            [1190160000000, 0.7557],
            [1190332800000, 0.7519],
            [1190592000000, 0.7487],
            [1190851200000, 0.7453],
            [1194220800000, 0.7203],
            [1197417600000, 0.7115],
            [1203292800000, 0.7133],
            [1206576000000, 0.6736],
            [1210032000000, 0.6841],
            [1210118400000, 0.6882],
            [1210204800000, 0.6917],
            [1210550400000, 0.6982],
          ],
        },
      ],
      credits: {
        enabled: false,
      },
    },
  },
  SpiderGraphConfig: HighchartsReact.Props = {
    options: {
      chart: {
        polar: true,
        type: "line",
      },
      accessibility: {
        description:
          "A spiderweb chart compares the allocated budget against actual spending within an organization. ",
      },
      title: {
        text: "Financials",
        align: "left",
        //x: -80,
      },
      pane: {
        size: "80%",
      },
      legend: {
        enabled: false,
      },
      xAxis: {
        categories: ["Financial", "Value", "Future", "Past", "Dividends"],
        tickmarkPlacement: "on",
        lineWidth: 0,
      },
      yAxis: {
        gridLineInterpolation: "polygon",
        lineWidth: 0,
        min: 0,
      },
      tooltip: {
        shared: true,
        pointFormat:
          // eslint-disable-next-line no-template-curly-in-string
          '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>',
      },
      series: [
        {
          name: "Actual Spending",
          type: "line",
          color: "#4ed7b2",
          data: [50000, 39000, 42000, 31000, 26000],
          pointPlacement: "on",
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                align: "center",
                verticalAlign: "bottom",
                layout: "horizontal",
              },
              pane: {
                size: "70%",
              },
            },
          },
        ],
      },
      credits: { enabled: false },
    },
  },
  TimeSeriesConfig: HighchartsReact.Props = {
    options: {
      chart: {
        // zoomType: "x",
      },
      title: {
        text: "USD to EUR exchange rate over time",
        style: { display: "none" },
      },
      subtitle: {
        text:
          document.ontouchstart === undefined
            ? "Click and drag in the plot area to zoom in"
            : "Pinch the chart to zoom in",
        style: { display: "none" },
      },
      xAxis: {
        type: "datetime",
      },
      yAxis: {
        title: {
          text: "Exchange rate",
        },
        min: 0.6255,
        max: 0.7461,
        opposite: true,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          lineColor: "#01b585",
          dataLabels: {
            enabled: true,
            formatter() {
              return this.y === this.series.dataMin ||
                this.y === this.series.dataMax
                ? this.y
                : undefined;
            },
          },
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, "#e9faf5"],
              [1, "#ffffff"],
            ],
          },
          marker: {
            radius: 2,
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },
      series: [
        {
          type: "area",
          name: "USD to EUR",
          data: [
            [1183420800000, 0.7353],
            [1183507200000, 0.7344],
            [1183593600000, 0.7332],
            [1183680000000, 0.7356],
            [1183939200000, 0.7343],
            [1184025600000, 0.7318],
            [1184112000000, 0.7272],
            [1184198400000, 0.7254],
            [1184284800000, 0.7257],
            [1184544000000, 0.7257],
            [1184630400000, 0.7263],
            [1184716800000, 0.7258],
            [1184803200000, 0.7237],
            [1184889600000, 0.7246],
            [1185148800000, 0.7236],
            [1185235200000, 0.723],
            [1185321600000, 0.7277],
            [1185408000000, 0.7289],
            [1185494400000, 0.7326],
            [1185753600000, 0.7322],
            [1185840000000, 0.7297],
            [1185926400000, 0.732],
            [1186012800000, 0.732],
            [1186099200000, 0.7303],
            [1186358400000, 0.7238],
            [1186444800000, 0.7251],
            [1186531200000, 0.7251],
            [1186617600000, 0.7285],
            [1186704000000, 0.7327],
            [1186963200000, 0.7326],
            [1187049600000, 0.7359],
            [1187136000000, 0.7422],
            [1187222400000, 0.7461],
            [1187308800000, 0.7434],
            [1187568000000, 0.7422],
            [1187654400000, 0.7404],
            [1187740800000, 0.7412],
            [1187827200000, 0.7368],
            [1187913600000, 0.7346],
            [1188172800000, 0.7323],
            [1188259200000, 0.732],
            [1188345600000, 0.7337],
            [1188432000000, 0.7349],
            [1188518400000, 0.7298],
            [1188777600000, 0.7337],
            [1188864000000, 0.7365],
            [1188950400000, 0.736],
            [1189036800000, 0.7317],
            [1189123200000, 0.7302],
            [1189382400000, 0.725],
            [1189468800000, 0.7235],
            [1189555200000, 0.7203],
            [1189641600000, 0.7197],
            [1189728000000, 0.7216],
            [1189987200000, 0.7207],
            [1190073600000, 0.7212],
            [1190160000000, 0.7157],
            [1190246400000, 0.7129],
            [1190332800000, 0.7119],
            [1190592000000, 0.7087],
            [1190678400000, 0.709],
            [1190764800000, 0.708],
            [1190851200000, 0.7053],
            [1190937600000, 0.7054],
            [1191196800000, 0.7027],
            [1191283200000, 0.7061],
            [1191369600000, 0.7046],
            [1191456000000, 0.7089],
            [1191542400000, 0.7075],
            [1191801600000, 0.7099],
            [1191888000000, 0.7125],
            [1191974400000, 0.707],
            [1192060800000, 0.7044],
            [1192147200000, 0.7057],
            [1192406400000, 0.703],
            [1192492800000, 0.7068],
            [1192579200000, 0.7043],
            [1192665600000, 0.6994],
            [1192752000000, 0.7],
            [1193011200000, 0.706],
            [1193097600000, 0.7017],
            [1193184000000, 0.7028],
            [1193270400000, 0.699],
            [1193356800000, 0.6953],
            [1193616000000, 0.695],
            [1193702400000, 0.6942],
            [1193788800000, 0.6923],
            [1193875200000, 0.6934],
            [1193961600000, 0.6908],
            [1194220800000, 0.6903],
            [1194307200000, 0.6875],
            [1194393600000, 0.6794],
            [1194480000000, 0.6819],
            [1194566400000, 0.6812],
            [1194825600000, 0.686],
            [1194912000000, 0.6847],
            [1194998400000, 0.6804],
            [1195084800000, 0.6832],
            [1195171200000, 0.6826],
            [1195430400000, 0.6825],
            [1195516800000, 0.6765],
            [1195603200000, 0.6751],
            [1195689600000, 0.6745],
            [1195776000000, 0.6754],
            [1196035200000, 0.6737],
            [1196121600000, 0.6724],
            [1196208000000, 0.6782],
            [1196294400000, 0.6786],
            [1196380800000, 0.6776],
            [1196640000000, 0.6819],
            [1196726400000, 0.6785],
            [1196812800000, 0.6794],
            [1196899200000, 0.6872],
            [1196985600000, 0.6827],
            [1197244800000, 0.6795],
            [1197331200000, 0.6817],
            [1197417600000, 0.6815],
            [1197504000000, 0.6812],
            [1197590400000, 0.6893],
            [1197849600000, 0.6949],
            [1197936000000, 0.6938],
            [1198022400000, 0.6953],
            [1198108800000, 0.697],
            [1198195200000, 0.6955],
            [1198454400000, 0.6946],
            [1198540800000, 0.6946],
            [1198627200000, 0.6946],
            [1198713600000, 0.689],
            [1198800000000, 0.6807],
            [1199059200000, 0.6794],
            [1199145600000, 0.6794],
            [1199232000000, 0.6809],
            [1199318400000, 0.6779],
            [1199404800000, 0.6791],
            [1199664000000, 0.6793],
            [1199750400000, 0.6801],
            [1199836800000, 0.6813],
            [1199923200000, 0.6821],
            [1200009600000, 0.6761],
            [1200268800000, 0.6715],
            [1200355200000, 0.6719],
            [1200441600000, 0.6761],
            [1200528000000, 0.6808],
            [1200614400000, 0.6816],
            [1200873600000, 0.6906],
            [1200960000000, 0.69],
            [1201046400000, 0.6863],
            [1201132800000, 0.6821],
            [1201219200000, 0.6801],
            [1201478400000, 0.6778],
            [1201564800000, 0.677],
            [1201651200000, 0.6753],
            [1201737600000, 0.6726],
            [1201824000000, 0.6717],
            [1202083200000, 0.6745],
            [1202169600000, 0.6809],
            [1202256000000, 0.684],
            [1202342400000, 0.6865],
            [1202428800000, 0.6891],
            [1202688000000, 0.6878],
            [1202774400000, 0.688],
            [1202860800000, 0.6857],
            [1202947200000, 0.6838],
            [1203033600000, 0.6816],
            [1203292800000, 0.6833],
            [1203379200000, 0.6784],
            [1203465600000, 0.6824],
            [1203552000000, 0.6787],
            [1203638400000, 0.6736],
            [1203897600000, 0.675],
            [1203984000000, 0.6724],
            [1204070400000, 0.6648],
            [1204156800000, 0.6614],
            [1204243200000, 0.6594],
            [1204502400000, 0.6579],
            [1204588800000, 0.6577],
            [1204675200000, 0.6582],
            [1204761600000, 0.6529],
            [1204848000000, 0.6487],
            [1205107200000, 0.652],
            [1205193600000, 0.6503],
            [1205280000000, 0.6462],
            [1205366400000, 0.6421],
            [1205452800000, 0.6427],
            [1205712000000, 0.6342],
            [1205798400000, 0.6342],
            [1205884800000, 0.6374],
            [1205971200000, 0.6485],
            [1206057600000, 0.6485],
            [1206316800000, 0.6485],
            [1206403200000, 0.6424],
            [1206489600000, 0.6366],
            [1206576000000, 0.6336],
            [1206662400000, 0.6332],
            [1206921600000, 0.6325],
            [1207008000000, 0.6387],
            [1207094400000, 0.6398],
            [1207180800000, 0.6442],
            [1207267200000, 0.6362],
            [1207526400000, 0.6373],
            [1207612800000, 0.6373],
            [1207699200000, 0.636],
            [1207785600000, 0.63],
            [1207872000000, 0.6317],
            [1208131200000, 0.6303],
            [1208217600000, 0.6319],
            [1208304000000, 0.6279],
            [1208390400000, 0.6301],
            [1208476800000, 0.6338],
            [1208736000000, 0.6291],
            [1208822400000, 0.6278],
            [1208908800000, 0.6275],
            [1208995200000, 0.6343],
            [1209081600000, 0.6413],
            [1209340800000, 0.64],
            [1209427200000, 0.6423],
            [1209513600000, 0.6436],
            [1209600000000, 0.6436],
            [1209686400000, 0.647],
            [1209945600000, 0.6469],
            [1210032000000, 0.6441],
            [1210118400000, 0.6482],
            [1210204800000, 0.6517],
            [1210291200000, 0.647],
            [1210550400000, 0.6482],
            [1210636800000, 0.6464],
            [1210723200000, 0.6478],
            [1210809600000, 0.6463],
            [1210896000000, 0.6453],
            [1211155200000, 0.6421],
            [1211241600000, 0.6395],
            [1211328000000, 0.6349],
            [1211414400000, 0.6348],
            [1211500800000, 0.6353],
            [1211760000000, 0.6346],
            [1211846400000, 0.6346],
            [1211932800000, 0.6388],
            [1212019200000, 0.6431],
            [1212105600000, 0.6449],
            [1212364800000, 0.6444],
            [1212451200000, 0.6414],
            [1212537600000, 0.6467],
            [1212624000000, 0.6494],
            [1212710400000, 0.6412],
            [1212969600000, 0.6337],
            [1213056000000, 0.6442],
            [1213142400000, 0.6446],
            [1213228800000, 0.6487],
            [1213315200000, 0.6522],
            [1213574400000, 0.647],
            [1213660800000, 0.6462],
            [1213747200000, 0.6456],
            [1213833600000, 0.6461],
            [1213920000000, 0.6407],
            [1214179200000, 0.6444],
            [1214265600000, 0.6424],
            [1214352000000, 0.6412],
            [1214438400000, 0.6358],
            [1214524800000, 0.6351],
            [1214784000000, 0.6345],
            [1214870400000, 0.634],
            [1214956800000, 0.6328],
            [1215043200000, 0.6296],
            [1215129600000, 0.6382],
            [1215388800000, 0.639],
            [1215475200000, 0.6376],
            [1215561600000, 0.6364],
            [1215648000000, 0.6367],
            [1215734400000, 0.6316],
            [1215993600000, 0.6311],
            [1216080000000, 0.6255],
            [1216166400000, 0.6295],
            [1216252800000, 0.6311],
            [1216339200000, 0.6324],
            [1216598400000, 0.6307],
            [1216684800000, 0.6283],
            [1216771200000, 0.6354],
            [1216857600000, 0.638],
            [1216944000000, 0.6357],
            [1217203200000, 0.6352],
            [1217289600000, 0.6368],
            [1217376000000, 0.6416],
            [1217462400000, 0.6407],
            [1217548800000, 0.6422],
            [1217808000000, 0.6425],
            [1217894400000, 0.6458],
            [1217980800000, 0.6462],
            [1218067200000, 0.6465],
            [1218153600000, 0.6635],
            [1218412800000, 0.6662],
            [1218499200000, 0.6709],
            [1218585600000, 0.6711],
            [1218672000000, 0.6709],
            [1218758400000, 0.679],
            [1219017600000, 0.6802],
            [1219104000000, 0.6814],
            [1219190400000, 0.6788],
            [1219276800000, 0.6751],
            [1219363200000, 0.6754],
            [1219622400000, 0.6773],
            [1219708800000, 0.6851],
            [1219795200000, 0.6773],
            [1219881600000, 0.6771],
            [1219968000000, 0.6788],
            [1220227200000, 0.684],
            [1220313600000, 0.689],
            [1220400000000, 0.6926],
            [1220486400000, 0.6903],
            [1220572800000, 0.702],
            [1220832000000, 0.7036],
            [1220918400000, 0.7071],
            [1221004800000, 0.7096],
            [1221091200000, 0.7178],
            [1221177600000, 0.711],
            [1221436800000, 0.7068],
            [1221523200000, 0.701],
            [1221609600000, 0.7031],
            [1221696000000, 0.6897],
            [1221782400000, 0.7025],
            [1222041600000, 0.6864],
            [1222128000000, 0.6789],
            [1222214400000, 0.6808],
            [1222300800000, 0.6804],
            [1222387200000, 0.6832],
            [1222646400000, 0.697],
            [1222732800000, 0.6993],
            [1222819200000, 0.7103],
          ],
        },
      ],
      credits: {
        enabled: false,
      },
    },
  },
  AreaRangeConfig: HighchartsReact.Props = {
    options: {
      title: {
        text: "Area Range",
      },
      legend: {
        layout: "horizontal",
        align: "right",
        verticalAlign: "top",
      },
      xAxis: {
        type: "datetime",
        lineWidth: 0,
        // plotBands: [{ color: "#ccc" }, { color: "skyblue" }],
        plotBands: [
          {
            from: 1246406400000,
            to: 1247270400000,
            color: "#FFFFFF",
            label: {
              text: "<span class='label'>Actual</span>",
              style: {
                backgroundColor: "rgba(0,0,0,.5)",
                border: "1px solid rgba(0,0,0,.75)",
                color: "#9BA4AB",
                fontWeight: "bold",
                padding: "3px",
              },
              align: "right",
              x: -10,
            },
          },
          {
            from: 1247270400000,
            to: 1248998400000,
            color: "#F5F7F9",
            label: {
              text: "Analysts Forecasts",
              align: "left",
              x: 10,
              style: {
                borderBottom: "1px solid red",
                color: "#9BA4AB",
              },
            },
          },
        ],
      },

      yAxis: {
        gridLineColor: "transparent",
        title: {
          text: null,
        },
        showFirstLabel: true,
        showLastLabel: true,
        labels: {
          enabled: true,
          formatter() {
            return `${this.isFirst || this.isLast ? `${this.value} USD` : ""}`;
          },
          x: 40,
          y: -10,
        },
        //grid: { enabled: false },
      },
      tooltip: {
        //crosshairs: true,
        backgroundColor: "#172733",
        borderColor: "#172733",
        shared: true,
        style: {
          color: "#9BA4AB",
        },
        valueSuffix: "USD",
      },

      series: [
        {
          name: "Temperature",
          type: "spline",
          data: averages,
          zIndex: 1,
          color: "#ff6042",
          marker: {
            enabled: false,
          },
          zoneAxis: "x",
          zones: [
            {
              value: 1247270400000,
              color: "#A36700",
            },
            {
              value: 1248998400000,
              color: "#ff6042",
            },
          ],
        },
        {
          name: "Range",
          data: ranges,
          type: "arearange",
          lineWidth: 0,
          linkedTo: ":previous",
          lineColor: "#ff6042",
          zIndex: 0,
          marker: {
            enabled: false,
          },
          zoneAxis: "x",
          zones: [
            {
              value: 1247270400000,
              color: "#ffefd1",
            },
            {
              value: 1248998400000,
              color: "#fae7e5",
            },
          ],
        },
      ],
      credits: {
        enabled: false,
      },
    },
  };
