import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';
import{MathService} from'./math.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.class1{color:red} .class2{color:blue}`]
})
export class AppComponent {
  addd;
  r=10;
  s=20;
  title = 'practise';
  x:any="amaresh";
  employee:any=[];
  w=44;
  sum;
  ele;
  Name;
  Wparent;
  qparent;
  show=false;
  display()
  {
  this.show=!this.show
  }
  getW(Wdata){
    this.Wparent=Wdata
  }
  getq(qdata){
    this.qparent=qdata;
  }
  myfunction()
  {
    alert("hiii");
  }
  myclass=
  {
    class1:false,
    class2:true
  }
  mystyle={
    'border':'3px solid'
    
  }
  emp1={name:"amaresh"}
  emp2=null;
  constructor(serviceobj:MathService)
  {
    this.addd=serviceobj.add(3,4);
    this.add(1,1,6);
    this.employee=[{name:"amaresh",age:24,add:"banglore",gender:"male"},
                    {name:"ronit",age:26,add:"banglore",gender:"female"},
                    {name:"amit",age:25,add:"banglore",gender:"male"}]

  
  }
add(...arg)
{
  this.sum=0;
  for(let ele of arg)
  {
    
    this.sum=this.sum+ele;
  
  }
  document.write(this.sum);
}
 a=false;
 view(i)
 {
   this.Name=this.employee[i].name;
   alert(this.Name);
 }
 comment="hello"
    
}

