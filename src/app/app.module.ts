import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsviewComponent } from './components/cardsview/cardsview.component';
import { CardComponent } from './components/card/card.component';
import { ModalCreateCardComponent } from './components/modal-create-card/modal-create-card.component';
import { ModalDeleteCardComponent } from './components/modal-delete-card/modal-delete-card.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from "./services/data.service";
import { HttpClientModule } from '@angular/common/http';
import { PicComponent } from './components/pic/pic.component';
import { PicsviewComponent } from './components/picsview/picsview.component';
import { SearchComponent } from './components/search/search.component';
import { SearchviewComponent } from './components/searchview/searchview.component';
import { InputComponent } from './components/login/input/input.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { ViewComponent } from './components/login/view/view.component';
import { SignupInputComponent } from './components/signup/signup-input/signup-input.component';
import { SignupCreateComponent } from './components/signup/signup-create/signup-create.component';
import { SignupViewComponent } from './components/signup/signup-view/signup-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsviewComponent,
    CardComponent,
    ModalCreateCardComponent,
    ModalDeleteCardComponent,
    PicComponent,
    PicsviewComponent,
    SearchComponent,
    SearchviewComponent,
    InputComponent,
    SignInComponent,
    ViewComponent,
    SignupInputComponent,
    SignupCreateComponent,
    SignupViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    
  ],
  providers: [ModalCreateCardComponent,NgbActiveModal],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }
