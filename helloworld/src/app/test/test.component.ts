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

  `,
  styles: ['p { color: red; }']
})
export class TestComponent {
  public name = "Akhilesh";
  public myid = "testid";
  public boolvalue = false;
  siteurl = window.location.href;


  greetuser(){
    return "Frome greet function Hello "+ this.name
  }
}
