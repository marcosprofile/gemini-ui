import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ SharedModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  cards = [
    {
      id: 1,
      icon: 'explore',
      text: 'As melhores praias do...'
    },
    {
      id: 2,
      icon: 'draw',
      text: 'Guia para iniciantes'
    },
    {
      id: 3,
      icon: 'sports_soccer',
      text: 'Novos esportes'
    },
    {
      id: 4,
      icon: 'lightbulb',
      text: 'Conceitos complexos'
    },
  ]
}
