import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TextoDestaqueComponent } from '../components/texto-destaque/texto-destaque.component';
import { TagComponent } from '../components/tag/tag.component';


@NgModule({
  declarations: [
    TextoDestaqueComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    TextoDestaqueComponent,
    TagComponent
  ]
})
export class SharedModule { }
