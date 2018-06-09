import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[toolbarDown]' })
export class ToolbarDownDirective {
    @HostBinding('class.cube-toolbar-down') down: boolean = true;
    constructor() { }
}
