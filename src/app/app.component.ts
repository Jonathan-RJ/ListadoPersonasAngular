import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de personas';
  /*No confudirse por la declaracion 
  variable   array de tipo persona   inicializando*/
  personas: Persona[] = [new Persona('Juan', 'Perez'), new Persona('Leti', 'Monri'), new Persona('Lola', 'Cruz')];

  personaAgregada(persona: Persona){
  this.personas.push(persona)
  }
}
