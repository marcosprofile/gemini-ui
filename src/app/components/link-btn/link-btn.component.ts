import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-btn',
  templateUrl: './link-btn.component.html',
  styleUrl: './link-btn.component.css'
})
export class LinkBtnComponent {
  @Input() icon: string = 'chat'
  @Input() text: string = ''
  @Input() type: string = ''
}
