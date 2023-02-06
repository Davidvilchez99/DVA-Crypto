import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatosApiService} from  '../datos-api.service';

@Component({
  selector: 'app-moneda-detalle',
  templateUrl: './moneda-detalle.component.html',
  styleUrls: ['./moneda-detalle.component.css']
})
export class MonedaDetalleComponent implements AfterViewInit {

  Monedaid: any;
  detalleMoneda: any;
  dataPoints:any = [];
  chart:any;
  datosGrafico: any;

  constructor(private route: ActivatedRoute, public datosAPI: DatosApiService, public http : HttpClient) {}

  chartOptions = {
    theme: "light2",
    zoomEnabled: true,
    exportEnabled: true,
    title: {
      text:""
    },
    subtitles: [{
      text: "Loading Data...",
      fontSize: 24,
      horizontalAlign: "center",
      verticalAlign: "center",
      dockInsidePlotArea: true
    }],
    axisY: {
      title: "Closing Price (in EUR)",
      prefix: "$"
    },
    data: [{
      type: "line",
      name: "Closing Price",
      yValueFormatString: "€#,###.00",
      xValueType: "dateTime",
      dataPoints: this.dataPoints
    }]
  }
 
  getChartInstance(chart: object) {
    this.chart = chart;
  }
  
  ngAfterViewInit() {
    this.chartOptions.subtitles[0].text = "";
    this.chartOptions.title.text = this.detalleMoneda.name + " Historical Price";
    this.datosAPI.obtenerGrafico(this.Monedaid).subscribe((datos: {}) => {
      this.datosGrafico = datos;
      console.log(this.datosGrafico);
      for (let i = 0; i < this.datosGrafico.prices.length; i++) {
        this.dataPoints.push({
          x: new Date(this.datosGrafico.prices[i][0]),
          y: this.datosGrafico.prices[i][1]
        });
      }
    this.chart.render();
    });
  }



  ngOnInit() {
    this.Monedaid = this.route.snapshot.paramMap.get('id');
    // this.obtenerDetalle();

    this.datosAPI.obtenerDatosFavoritos(this.Monedaid).subscribe((datos: {}) => {
      this.detalleMoneda = datos;
      console.log(this.detalleMoneda);
    });

  }
  // obtenerDetalle(){
  //   this.datosAPI.obtenerDatosFavoritos(this.Monedaid);
  // }
}
