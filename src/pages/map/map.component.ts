import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import maplibregl from 'maplibre-gl'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  map!: maplibregl.Map
  @ViewChild('mapdiv') mapElement!: ElementRef

  ngAfterViewInit(): void {
    this.map = new maplibregl.Map({
      container: this.mapElement.nativeElement,
      style:
        'https://api.maptiler.com/maps/dataviz/style.json?key=n44RDSXf1ScLYVJ2fsV6',
      center: [0, 0],
      zoom: 2,
    })

    // A bit of a hack
    setTimeout(() => this.map.resize())
  }
}
