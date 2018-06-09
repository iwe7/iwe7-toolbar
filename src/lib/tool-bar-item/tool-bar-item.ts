import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[toolbarItem]' })
export class ToolbarItemDirective {
    @HostBinding('class.cube-toolbar-item') item: boolean = true;
    constructor() { }
}
