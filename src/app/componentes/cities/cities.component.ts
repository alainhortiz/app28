import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule],
  template: ` 
  <ul>
    <li (click)="onCityClicked(city)"
      [ngClass]="{ 'alert alert-info': city === selection }">
      {{ city | titlecase }}
    </li>
  </ul>`,
  styleUrl: './cities.component.scss',
})
export class CitiesComponent {
  @Input() city!: string;
  @Input() selection!: string | null;
  @Output() cityClickedEvent = new EventEmitter<string>();

  onCityClicked(city: string):void {
    this.cityClickedEvent.emit(city);
  }
}
