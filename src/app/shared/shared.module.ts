import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

/* COMPONENTS */
import { TextComponent } from '../components/text/text.component';
import { TagComponent } from '../components/tag/tag.component';
import { CardComponent } from '../components/card/card.component';
import { GridComponent } from '../components/grid/grid.component';
import { ContainerComponent } from '../components/container/container.component';
import { InputComponent } from '../components/input/input.component';
import { MoreActionsComponent } from '../components/more-actions/more-actions.component';
import { LinkBtnComponent } from '../components/link-btn/link-btn.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { LocationComponent } from '../components/location/location.component';


@NgModule({
  declarations: [
    TextComponent,
    TagComponent,
    CardComponent,
    GridComponent,
    ContainerComponent,
    InputComponent,
    MoreActionsComponent,
    LinkBtnComponent,
    SidebarComponent,
    HeaderComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    TextComponent,
    TagComponent,
    CardComponent,
    GridComponent,
    ContainerComponent,
    InputComponent,
    MoreActionsComponent,
    LinkBtnComponent,
    SidebarComponent,
    HeaderComponent,
    LocationComponent
  ]
})
export class SharedModule { }
