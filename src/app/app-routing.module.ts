import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsviewComponent } from './components/cardsview/cardsview.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { ViewComponent } from './components/login/view/view.component';
import { PicsviewComponent } from './components/picsview/picsview.component';
import { SearchComponent } from './components/search/search.component';
import { SearchviewComponent } from './components/searchview/searchview.component';
import { SignupViewComponent } from './components/signup/signup-view/signup-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: ViewComponent
  },
  {
    path: 'cards',
    component: CardsviewComponent
  },
  {
    path: 'pics',
    component: PicsviewComponent
  },
  {
    path: 'search',
    component: SearchviewComponent
  },
  {
    path: 'signup',
    component: SignupViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
