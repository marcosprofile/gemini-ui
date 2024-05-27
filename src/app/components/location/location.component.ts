import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  @Input() local: string = 'Jardim Canadá, Mauá - SP, Brasil'
}
