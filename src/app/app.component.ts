import { Component } from '@angular/core';
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
export class AppComponent {
  cities: string[] = ['Barcelona','Madrid','Malaga','Pamplona','Cádiz','Sevilla'];
  
  //declarar solamente una propiedad. fijenese que no tiene valor
  name!: string;
  pais!: string;
  title1: string = 'Ejemplo de interpolación';
  title2: string = 'Ejemplo de datos bidireccional';
  title3: string = 'Ejemplo de directiva estructural';
  title4: string = 'Ejemplo de directiva de atributos';
  url: string = 'https://img1.g-star.com/product/c_fill,f_auto,h_675,q_80/v1685191895/D20147-D190-C744-M01W/g-star-raw-pantalones-pleated-chino-relaxed-verde.jpg';
}
