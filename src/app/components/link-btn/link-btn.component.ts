import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-btn',
  templateUrl: './link-btn.component.html',
  styleUrl: './link-btn.component.css'
})
export class LinkBtnComponent {
  @Input() link: string = '#'
  @Input() icone: string = 'chat'
  @Input() texto: string = ''
  @Input() classe: string = ''
}
