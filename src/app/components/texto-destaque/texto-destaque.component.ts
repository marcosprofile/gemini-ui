import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto-destaque',
  templateUrl: './texto-destaque.component.html',
  styleUrl: './texto-destaque.component.css'
})
export class TextoDestaqueComponent {
  @Input() cor: string = ''
  @Input() texto: string = ''
}
