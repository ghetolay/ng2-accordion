import {ContentChildren, Component, QueryList, Input, forwardRef, AfterContentInit} from "@angular/core";
import {AccordionGroup} from "./AccordionGroup";

@Component({
    selector: "accordion",
    template: `
        <div class="panel-group" role="tablist" aria-multiselectable="true">
            <ng-content></ng-content>
        </div>
    `,
})
export class Accordion implements AfterContentInit {

    @Input()
    closeOthers = true;

    @Input()
    showArrows = false;

    @Input()
    expandAll = false;

    @ContentChildren(forwardRef(() => AccordionGroup))
    groups: QueryList<AccordionGroup>;

    ngAfterContentInit() {
        if (this.expandAll) {
            this.closeOthers = false;
            this.groups.toArray().forEach(group => {
                group.isOpened = true;
            });
        }
    }

    closeAll() {
        this.groups.toArray().forEach(group => {
            group.isOpened = false;
        });
    }

}
