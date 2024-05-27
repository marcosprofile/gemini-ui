import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

/* COMPONENTS */
import { TextoDestaqueComponent } from '../components/texto-destaque/texto-destaque.component';
import { TagComponent } from '../components/tag/tag.component';
import { CardComponent } from '../components/card/card.component';
import { GridComponent } from '../components/grid/grid.component';
import { ContainerComponent } from '../components/container/container.component';
import { InputComponent } from '../components/input/input.component';


@NgModule({
  declarations: [
    TextoDestaqueComponent,
    TagComponent,
    CardComponent,
    GridComponent,
    ContainerComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    TextoDestaqueComponent,
    TagComponent,
    CardComponent,
    GridComponent,
    ContainerComponent,
    InputComponent
  ]
})
export class SharedModule { }
