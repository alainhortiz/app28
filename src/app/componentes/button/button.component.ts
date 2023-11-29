import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
  
  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;

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


}
