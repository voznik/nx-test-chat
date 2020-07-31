import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ChatLoginComponent } from './components';
import { ChatComponent } from './containers';
import { ChatGuard } from './services';

const routes: Route[] = [
  {
    // path: 'chat/room',
    path: 'room',
    component: ChatComponent,
    canActivate: [ChatGuard],
  },
  {
    // path: 'chat/room',
    path: 'enter',
    component: ChatLoginComponent,
  },
  {
    path: '',
    redirectTo: 'room',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ChatRoutingModule {}
