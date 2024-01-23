import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>Hello {{ name }}</h1>
    <h1>{{"Welcome "+name}}</h1>
    <h1>{{2+2}}</h1>
    <h1>Length: {{name.length}}</h1>
    <h1>{{greetuser()}}</h1>
    <h1>{{siteurl}}</h1>

      <!-- gives errors
    <h1>{{a=2+2}}</h1>
    <h1>{{window.location.href}}</h1> -->

    <!-- PROPERTY BINDING -->
    <input type="text" [id]="myid" [disabled]="boolvalue" value="Akhilesh">
    <input type="text" id={{myid}} bind-disabled="boolvalue" value="Akhilesh">
    <!-- interpolation only works with string value so we use property binding by using [] -->

    <!-- CLASS BINDING -->
    <h2 class="text-success">Codevolution</h2>
    <h2 [class] ="successClass"> Codevolution</h2>
    <h2 class="text-danger" [class] ="successClass"> Codevolution </h2>  <!--  danger will be applied -->
    <h2 [class.text-danger] ="hasError">Codevolution</h2>
    <h2 [ngClass] ="messageClasses">Codevolution</h2>  <!--  ngclass directive to apply to multiple attributes -->
 
    <!-- STYLE BINDING -->
    <h2 [style.color]="hasError ? 'red': 'green'">Style Binding</h2>
    <h2 [style.color] ="highlightColor">Style Binding 2</h2>
  `,
  styles: [`
      .text-success {
      color: green;
      }
      .text-danger {
      color: red;
      }
  
  `]
})
export class TestComponent {
  public name = "Akhilesh";
  public myid = "testid";
  public successClass = "text-success"
  public boolvalue = false;
  public hasError = true;
  public highlightColor = "violet";
  siteurl = window.location.href;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    }


  greetuser(){
    return "Frome greet function Hello "+ this.name
  }
}
