import { Directive, HostBinding, ElementRef, OnInit, EventEmitter, Output, ContentChild, TemplateRef } from '@angular/core';
import { onTap } from 'iwe7-util';

@Directive({ selector: '[toolbarMore]' })
export class ToolBarMoreDirective implements OnInit {
    @HostBinding('class.toolbar-more') more: boolean = true;
    @HostBinding('class.cube-toolbar-item') item: boolean = true;
    @Output() onTap: EventEmitter<any> = new EventEmitter();
    @ContentChild(TemplateRef) tpl: TemplateRef<any>;
    constructor(public ele: ElementRef) { }
    ngOnInit() {
        onTap(this.ele.nativeElement).subscribe(res => {
            this.onTap.emit(res);
        });
    }
}
