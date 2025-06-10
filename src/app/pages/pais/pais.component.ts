import { Component, inject, signal } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pais',
  imports: [CommonModule,RouterModule],
  templateUrl: './pais.component.html',
  styleUrl: './pais.component.css'
})
export class PaisComponent {

  paisesService = inject(PaisesService);
  activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  id = signal<string>("");

  constructor() {
    const id: string = this.activatedRoute.snapshot.paramMap.get('id') ?? "";
    if (id) {
      this.id.set(id);
      this.paisesService.getPaisById(this.id())
      if (!this.paisesService.pais()) {
        this.returnTOHome()
        return;
      }
    } else {
      this.returnTOHome();
    }

  }

  returnTOHome() {
    this.router.navigateByUrl('/')
  }


}
