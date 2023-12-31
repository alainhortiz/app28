import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './componentes/button/button.component';
import { FormNewItemComponent } from './componentes/form-new-item/form-new-item.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { CitiesComponent } from './componentes/cities/cities.component';
import { ContacComponent } from './componentes/contac/contac.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ButtonComponent, 
    CitiesComponent,
    ContacComponent,
    FormNewItemComponent,
    FormsModule,
    FilterPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//Ciclo de vida de un componente
export class AppComponent {

  cities: string[] = ['Barcelona','Madrid','Malaga','Pamplona','Cádiz','Sevilla'];
  
  //declarar solamente una propiedad. fijenese que no tiene valor
  name!: string;
  pais!: string;
  criterio!: string;
  selection!: string | null;
  title1: string = 'Ejemplo de interpolación';
  title2: string = 'Ejemplo de datos bidireccional';
  title3: string = 'Ejemplo de directiva estructural';
  title4: string = 'Ejemplo de directiva de atributos';
  title5: string = 'Ejemplo de enlace de eventos';
  title6: string = 'Ejemplo de @Input';
  title7: string = 'Ejemplo de @Output';
  title8: string = 'Ejemplo de Pipe';
  url: string = 'https://img1.g-star.com/product/c_fill,f_auto,h_675,q_80/v1685191895/D20147-D190-C744-M01W/g-star-raw-pantalones-pleated-chino-relaxed-verde.jpg';

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  onCityClicked(city: string):void{
    console.log('City ->',city);
    this.selection = city;
  }

  onClear(): void {
    this.selection = null;
  }

}
