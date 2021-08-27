import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexResponsive,
  ApexMarkers,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: string[];
  responsive: ApexResponsive[];
  markers: ApexMarkers;
  grid: ApexGrid;
};

@Component({
  selector: 'app-yearly',
  templateUrl: './yearly.component.html',
  styleUrls: ['./yearly.component.css']
})
export class YearlyComponent implements OnInit {

  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [{
					name: 'Buy',
					data: [{
					  x: '2:00PM',
					  y: [9200.00, 9600.00]
					}, {
					  x: '2:30PM',
					  y: [9300.00, 9600.00]
					}, {
					  x: '3:00PM',
					  y: [9150.00, 9500.00]
					}, {
					  x: '3:30PM',
					  y: [9300.00, 9700.00]
					}, {
					  x: '4:00PM',
					  y: [9200.00, 9600.00]
					}, {
					  x: '4:30PM',
					  y: [9400.00, 9700.00]
					}, {
					  x: '5:00PM',
					  y: [9400.00, 9600.00]
					}, {
					  x: '5:30PM',
					  y: [9300.00, 9600.00]
					}, {
					  x: '6:00PM',
					  y: [9300.00, 9500.00]
					}, {
					  x: '6:30PM',
					  y: [9200.00, 9500.00]
					}, {
					  x: '7:00PM',
					  y: [9450.00, 9650.00]
					}, {
					  x: '7:30PM',
					  y: [9400.00, 9700.00]
					}, {
					  x: '8:00PM',
					  y: [9300.00, 9700.00]
					}]
				}, {
					name: 'Sell',
					data: [{
					  x: '2:00PM',
					  y: [9370.00, 9550.00]
					}, {
					  x: '2:30PM',
					  y: [9350.00, 9700.50]
					}, {
					  x: '3:00PM',
					  y: [9275.00, 9482.00]
					}, {
					  x: '3:30PM',
					  y: [9200.00, 9600.00]
					}, {
					  x: '4:00PM',
					  y: [9250.00, 9500.00]
					}, {
					  x: '4:30PM',
					  y: [9445.00, 9523.00]
					}, {
					  x: '5:00PM',
					  y: [9440.00, 9667.00]
					}, {
					  x: '5:30PM',
					  y: [9300.00, 9600.00]
					}, {
					  x: '6:00PM',
					  y: [9445.00, 9648.00]
					}, {
					  x: '6:30PM',
					  y: [9240.00, 9700.00]
					}, {
					  x: '7:00PM',
					  y: [9130.00, 9550.00]
					}, {
					  x: '7:30PM',
					  y: [9340.00, 9440.00]
					}, {
					  x: '8:00PM',
					  y: [9560.00, 9740.00]
					}]
				}],
      chart: {
        type: "rangeBar",
        height: 385,
        toolbar:{
            show:false
        },
        /* zoom: {
            enabled: false
        } */
      },
        
			plotOptions: {
			  bar: {
				horizontal: false,
				columnWidth: '55%',
				
			  },
			},
			colors:['#61C277', '#FF3E3E'],
			dataLabels: {
			  enabled: false,
			},
			markers: {
				shape: "circle",
			},
			legend: {
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
					
					},
				markers: {
				width: 18,
				height: 18,
				strokeWidth: 0,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
				}
			},
			stroke: {
			  show: true,
			  width: 6,
			  colors: ['transparent']
			},
			grid: {
				borderColor: '#eee',
			},
			xaxis: {
			  labels: {
			   style: {
				  colors: '#787878',
				  fontSize: '13px',
				  fontFamily: 'poppins',
				  fontWeight: 100,
				  cssClass: 'apexcharts-xaxis-label',
				},
			  },
			  crosshairs: {
				show: false,
			  }
			},
			yaxis: {
				opposite: true,
				labels: {
					offsetX:0,
				   style: {
					  colors: '#787878',
					  fontSize: '12px',
					   fontFamily: 'poppins',
					  fontWeight: 100,
					  cssClass: 'apexcharts-xaxis-label',
				  },
			  },
			},
			fill: {
			  opacity: 1,
			  colors:['#61C277', '#FF3E3E'],
			},
			tooltip: {
				 x: {
					format: 'dd/MM/yy HH:mm'
				  },
			  y: {
				formatter: function (val) {
				  return "$ " + val + " thousands"
				}
			  }
			},
			 responsive: [{
				breakpoint: 575,
				options: {
					series: [{
					name: 'Buy',
					data: [{
						  x: '2:00PM',
						  y: [9200.00, 9600.00]
						}, {
						  x: '2:30PM',
						  y: [9300.00, 9600.00]
						}, {
						  x: '3:00PM',
						  y: [9150.00, 9500.00]
						}, {
						  x: '3:30PM',
						  y: [9300.00, 9700.00]
						}, {
						  x: '4:00PM',
						  y: [9200.00, 9600.00]
						}, {
						  x: '4:30PM',
						  y: [9400.00, 9700.00]
						}, {
						  x: '5:00PM',
						  y: [9400.00, 9600.00]
						}, {
						  x: '5:30PM',
						  y: [9300.00, 9600.00]
						}]
					}, {
						name: 'Sell',
						data: [{
						  x: '2:00PM',
						  y: [9370.00, 9550.00]
						}, {
						  x: '2:30PM',
						  y: [9350.00, 9700.50]
						}, {
						  x: '3:00PM',
						  y: [9275.00, 9482.00]
						}, {
						  x: '3:30PM',
						  y: [9200.00, 9600.00]
						}, {
						  x: '4:00PM',
						  y: [9250.00, 9500.00]
						}, {
						  x: '4:30PM',
						  y: [9445.00, 9523.00]
						}, {
						  x: '5:00PM',
						  y: [9440.00, 9667.00]
						}, {
						  x: '5:30PM',
						  y: [9300.00, 9600.00]
						}]
					}],
					plotOptions: {
					  bar: {
						columnWidth: '40%',
						
					  },
					},
					chart:{
						height:250,
					},
                    stroke: {
                      show: true,
                      width: 2,
                      colors: ['transparent']
                    },
					xaxis: {
					  labels: {
					   style: {
						  fontSize: '10px',
						},
					  },
					},
				}
			 }]
    };
  }

  ngOnInit(): void {
  }

}
