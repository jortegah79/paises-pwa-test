import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paises',
  imports: [RouterModule,CommonModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {

  paisesService = inject(PaisesService);
  constructor() {

    this.paisesService.getPaises();
  
  }
  
}
