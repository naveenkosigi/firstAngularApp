import {Directive,OnInit,ElementRef,Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
    selector:'[newColor]'
})

export class newColor implements OnInit{
    @HostBinding('style.backgroundColor') backgroundColor:String;
    @Input('newColor') hoverColor:String='blue';

    constructor(private element:ElementRef,private renderer:Renderer2){
    }

    ngOnInit(){
        this.backgroundColor='transparent';
    }

    @HostListener('mouseenter') mouseEnter(eventData:Event){
        //this.renderer.setStyle(this.element.nativeElement,'background-color','blue');
        this.backgroundColor=this.hoverColor;
    }

    @HostListener('mouseleave') mouseLeave(eventData:Event){
        //this.renderer.setStyle(this.element.nativeElement,'background-color','blue');
        this.backgroundColor='transparent';
    }
}