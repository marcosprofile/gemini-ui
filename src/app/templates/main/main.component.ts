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

}
