import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-new-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-new-item.component.html',
  styleUrl: './form-new-item.component.scss'
})
export class FormNewItemComponent {

  @Input() className: string = 'btn-primary';
  @Input() label!: string;

  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string):void {
    console.log('Item ->', item);
    this.newItemEvent.emit(item);
  }
  
  }
