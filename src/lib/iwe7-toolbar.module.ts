import { ToolbarDownDirective } from './tool-bar-down/tool-bar-down';
import { ToolBarMoreDirective } from './tool-bar-more/tool-bar-more';
import { ToolbarItemDirective } from './tool-bar-item/tool-bar-item';
import { ToolBarComponent } from './tool-bar/tool-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToolBarComponent,
    ToolbarItemDirective,
    ToolBarMoreDirective,
    ToolbarDownDirective
  ],
  exports: [
    ToolBarComponent,
    ToolbarItemDirective,
    ToolBarMoreDirective,
    ToolbarDownDirective
  ]
})
export class Iwe7ToolbarModule { }
