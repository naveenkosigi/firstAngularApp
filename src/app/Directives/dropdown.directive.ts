import {Directive,HostBinding,HostListener,OnInit,ElementRef} from '@angular/core'

@Directive({
    selector:'[dropDown]'
})

export class dropDown implements OnInit{

    constructor(private elementRef:ElementRef){

    }
    @HostBinding('class.open') isShown=false;


    @HostListener('click') clicked(){
        this.isShown=!this.isShown;
        this.elementRef.nativeElement.style.cursor="pointer";
    }
    
    ngOnInit(){

    }

}
   