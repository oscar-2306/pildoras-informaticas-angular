import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent{
nombre='juan';
apellido='Diaz';
//  private edad: 18;
 edad= 18;
//empresa='pildoras Informaticas';
empresa="Google";
// getEdad() { 
//   return this.edad;
// }
// llamaEmpresa(value:string){

// }
habilitacioCuadro=false;

usuRegistrado=false;

setUsuarioRegistrado(event:Event){
 // alert("El usuario se registro");  se comenta para el otro ejerccico
 // this.textoDeRegistro="El usuario se acaba de registrar";
 if ((<HTMLInputElement>event.target).value=="si"){
  this.textoDeRegistro="El usuario se acaba de registarar";
 } else {
  this.textoDeRegistro="No hay nadie registrado";
 }

 
}

// otra funcion para usar la interpolacio
textoDeRegistro="No hay nadie registrado";
}


