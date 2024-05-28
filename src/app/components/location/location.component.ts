import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  @Input() locale: string = 'Avenida Paulista, São Paulo - SP, Brasil'
}
