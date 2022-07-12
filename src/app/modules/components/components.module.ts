import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NeonTitleComponent } from './neon-title/neon-title.component';



@NgModule({
  declarations: [
    ButtonComponent,
    NeonTitleComponent
  ],
    exports: [
        ButtonComponent,
        NeonTitleComponent
    ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
