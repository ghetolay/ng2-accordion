import { NgModule }       from "@angular/core";
import { CommonModule } from "@angular/common";

import {AccordionGroup} from "./AccordionGroup";
import {Accordion} from "./Accordion";
import {AccordionToggle} from "./AccordionToggle";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ Accordion, AccordionGroup, AccordionToggle ],
    exports: [ Accordion, AccordionGroup, AccordionToggle ]
})
export class AccordionModule {

}