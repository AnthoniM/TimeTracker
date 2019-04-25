import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SprintComponent } from './components/sprint/sprint.component';
import { CallbackComponent } from './components/callback/callback.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {
    path: 'sprint',
    component: SprintComponent,
    canActivate: [AuthGuard],
  },
  {path: 'callback', component: CallbackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
