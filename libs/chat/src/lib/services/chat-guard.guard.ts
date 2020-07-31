import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ChatSessionService } from './chat-session.service';
import { take, switchMap } from 'rxjs/operators';

@Injectable()
export class ChatGuard implements CanActivate {
  constructor(
    private router: Router,
    private sessionService: ChatSessionService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.sessionService.currentUser$.pipe(
      take(1),
      switchMap((user) => {
        if (!!!user) {
          this.router.navigate(['/chat/enter']);
          return of(false);
        }
        return of(true);
      })
    );
  }
}
