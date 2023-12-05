import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(arg: string): string {
    let result!:string;
    
    result = arg.toLowerCase();      
    return result;
  }

}
