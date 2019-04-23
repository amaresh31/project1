import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(input,emp) {
    let output;
    if(emp.gender=="male")
    {
      output="mr."+input
    }
    else
    output="miss."+input


    return output;
  }

}
