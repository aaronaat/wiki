import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {path: '', redirectTo: '/home/', pathMatch: 'full'},
  {
    path: 'home/:slug',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'edit/:slug',
    component: EditComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'edit',
    component: EditComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'articles',
    component: ArticlesComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
