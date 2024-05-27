import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MenuLateralComponent } from '../../templates/menu-lateral/menu-lateral.component';
import { MainComponent } from '../../templates/main/main.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuLateralComponent,
    MainComponent,
    SharedModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
