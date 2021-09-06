import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  header= "Hello World";
  colors:string[] =[
    'red' , 'green' , 'blue' , "white",'orange'
  ]

newcolor :string= "";

addcolor(){
  this.colors.push(this.newcolor)
}

public date :Date = new Date();
public rupee :number = 30.45;


}
