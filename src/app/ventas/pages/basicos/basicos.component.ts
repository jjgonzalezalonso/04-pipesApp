import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombreLower: string='fernando';
  nombreUpper: string='FERNANDO';
  nombreCompleto: string='fErNando herRera';

  fecha: Date = new Date();
}
