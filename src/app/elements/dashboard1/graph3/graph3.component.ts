import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-graph3',
  templateUrl: './graph3.component.html',
  styleUrls: ['./graph3.component.css']
})
export class Graph3Component implements OnInit {

    constructor() { }
    
    @ViewChild('canvas3', { static: true }) canvas3: ElementRef;

  
  lineChartData: ChartDataSets[] = [
        { 
            data: [40, 20, 30, 20, 50, 20, 30, 20, 35],
            label: 'Sales Stats',
            borderColor: 'transparent',
            pointBackgroundColor: '#7679AF',
            pointBorderColor: '#7679AF',
            borderWidth:4,
            // borderRadius:'10',
            pointHoverBackgroundColor: '#7679AF',
            pointHoverBorderColor: '#7679AF',
            // backgroundColor: widgetChartgradientStroke,
        },
  ];

  lineChartLabels: Label[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September"];

  lineChartOptions = {
    title: {
        display: !1
    },
    tooltips: {
        intersect: !1,
        mode: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
    },
    
    legend: {
        display: !1
    },
    responsive: !0,
    maintainAspectRatio: !1,
    hover: {
        mode: "index"
    },
    scales: {
        xAxes: [{
            display: !1,
            gridLines: !1,
            scaleLabel: {
                display: !0,
                labelString: "Month"
            }
        }],
        yAxes: [{
            display: !1,
            gridLines: !1,
            scaleLabel: {
                display: !0,
                labelString: "Value"
            },
            ticks: {
                beginAtZero: !0
            }
        }]
    },
    elements: {
        point: {
            radius: 0,
            borderWidth: 0
        }
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 0
        }
    }
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255, 171, 45, 1)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';

// ngOnInit() {}

  ngOnInit() {
      const gradient = this.canvas3.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 500, 1);
      gradient.addColorStop(0, "rgba(118, 121, 175, 1)");
      gradient.addColorStop(1, "rgba(142, 145, 199, 0.5)");
      
      this.lineChartColors = [
          {
              backgroundColor: gradient
          }
      ];
  }

}
