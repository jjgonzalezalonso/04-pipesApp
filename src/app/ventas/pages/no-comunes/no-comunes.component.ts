import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  clientes: string []=['Maria','Pedro','Fernando']
  clientesMapa ={
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando'
  }
  
  cambiarPersona(){
    this.nombre='Ana';
    this.genero='femenino';
  }
  borrarCliente(){
    this.clientes.pop(); //borro el último
  }
  
  persona ={
    nombre: 'Fernando',
    edad: 35,
    direccion:'Ottawa, Canada'
  }

  miobservable= interval(1000); 
  // creo el observable interval que se dispara cada segundo
  // con los valores 0,1,2,3,4,5
}
