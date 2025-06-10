import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Pais } from '../interfaces/PaisesResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private http = inject(HttpClient);
  private router = inject(Router);

  paises = signal<Pais[]>([]);
  pais = signal<Pais | null>(null)

  constructor() { }

  getPaises() {

    if (this.paises().length > 0) {
      return;
    }
    this.http.get<Pais[]>("https://restcountries.com/v3.1/lang/spanish").subscribe(
      paises => {
        this.paises.set(paises)
      }
    );
  }

  getPaisById(id: string) {

    if (this.paises().length == 0) {

      this.getPaises();

    } else {

      const pais = this.paises().find(p => p.cca3 == id)

      if (!pais) {
        this.router.navigateByUrl('/');
        return;
      }

      this.pais.set(pais)

    }
  }

}

