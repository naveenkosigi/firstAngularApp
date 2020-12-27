import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

export interface alertPrompt{
    canDeactivate:() => boolean;
}

export class canDeactivateGuard implements CanDeactivate<alertPrompt>{
    canDeactivate(comp:alertPrompt,currentRoute:ActivatedRouteSnapshot,currentState:RouterStateSnapshot,nextState:RouterStateSnapshot) : boolean{
        return comp.canDeactivate();
    }
}