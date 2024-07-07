import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';




@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './estado.component.html',
  styleUrl: './estado.component.css'
})
export class EstadoComponent {

}
