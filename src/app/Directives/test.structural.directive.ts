import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector:'[showAdmin]'
})

export class showAdmin implements OnInit{
    
    @Input() set showAdmin(condition:boolean){
        if(condition){
            this.container.createEmbeddedView(this.template);
        }
        else{
            this.container.clear();
        }
    }
    constructor(private template:TemplateRef<any>,private container:ViewContainerRef){

    }

    ngOnInit(){

    }
}