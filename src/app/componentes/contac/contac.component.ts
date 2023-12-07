import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Contact } from '../../interfaces';

@Component({
  selector: 'app-contac',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contac.component.html',
  styleUrl: './contac.component.scss',
})
export class ContacComponent {
  
  model: Contact =  {
    name: '',
    checkAdult: false,
    departament: '',
    comment: ''
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Values', form);
    }  
  }
}
