import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {

  transform(input,max_length) {
    
    let output=150-input.length;
  

    return output;
  }

}
