import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: <p>aqui iria un empleado<p> inline 
  styleUrls: ['./app.component.css']
  //style:["p{background-color:red"] agregar inline
})
export class AppComponent {
  title = 'my-ang';
  saludo = 'Hola estudiantes de angular';
}
