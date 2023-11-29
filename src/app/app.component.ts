import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './componentes/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ButtonComponent, 
    FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//Ciclo de vida de un componente
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  cities: string[] = ['Barcelona','Madrid','Malaga','Pamplona','Cádiz','Sevilla'];
  
  //declarar solamente una propiedad. fijenese que no tiene valor
  name!: string;
  pais!: string;
  selection!: string | null;
  title1: string = 'Ejemplo de interpolación';
  title2: string = 'Ejemplo de datos bidireccional';
  title3: string = 'Ejemplo de directiva estructural';
  title4: string = 'Ejemplo de directiva de atributos';
  title5: string = 'Ejemplo de enlace de eventos';
  url: string = 'https://img1.g-star.com/product/c_fill,f_auto,h_675,q_80/v1685191895/D20147-D190-C744-M01W/g-star-raw-pantalones-pleated-chino-relaxed-verde.jpg';

  //método que trae los cambios anterios y nuevos de existir un input o output
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change -> ',changes);
  }

  //Método que es el primero se ejecuta sino existe un input o output. Aqui se llaman a las apis, etc
  ngOnInit(): void {
    console.log('Init ->');
  }

  //Método que se utiliza para desestrucciones de los obsevables
  ngOnDestroy(): void {
    console.log('Destroy');
  }

  onCityClicked(city: string):void{
    console.log('City ->',city);
    this.selection = city;
  }

  onClear(): void {
    this.selection = null;
  }

}
