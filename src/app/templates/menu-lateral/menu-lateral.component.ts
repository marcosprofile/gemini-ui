import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [ SharedModule ],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent implements OnInit {
  menuElement: HTMLElement | null = null

  chats = [
    {
      id: 1,
      text: "Esta é minha primeira pesquisa no Gemini",
      class: "more-action"
    },
    {
      id: 2,
      text: "Esta é minha segunda pesquisa no Gemini",
      class: "more-action"
    },
    {
      id: 3,
      text: "Esta é minha terceira pesquisa no Gemini",
      class: "more-action"
    },
    {
      id: 4,
      text: "Esta é minha quarta pesquisa no Gemini",
      class: "more-action"
    },
    {
      id: 5,
      text: "Esta é minha quinta pesquisa no Gemini",
      class: "more-action"
    },
  ]

  actions = [
    {
      id: 1,
      icon: "contact_support",
      text: "Ajuda",
      class: "new"
    },
    {
      id: 2,
      icon: "history",
      text: "Atividades",
      class: ""
    },
    {
      id: 3,
      icon: "settings",
      text: "Configurações",
      class: ""
    },
  ]

  ngOnInit() {
    this.menuElement = document.querySelector('.container')
  }

  menu() {
    if (this.menuElement) {
      this.menuElement.classList.toggle('closed')
    }
  }
}
