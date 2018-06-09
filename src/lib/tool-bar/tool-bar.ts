import { ToolBarMoreDirective } from './../tool-bar-more/tool-bar-more';
import { Component, OnInit, ViewEncapsulation, AfterContentInit, AfterViewInit, ContentChild, HostBinding } from '@angular/core';

@Component({
    selector: 'tool-bar',
    templateUrl: 'tool-bar.html',
    styleUrls: ['./tool-bar.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ToolBarComponent implements OnInit, AfterViewInit, AfterContentInit {
    @ContentChild(ToolBarMoreDirective) more: ToolBarMoreDirective;
    @HostBinding('class.cube-toolbar') bar: boolean = true;
    showMore: boolean = false;
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() { }
    ngAfterContentInit() {
        this.more.onTap.subscribe(res => {
            this.showMore = !this.showMore;
        });
    }
}
