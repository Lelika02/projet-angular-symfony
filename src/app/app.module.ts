import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {MenubarModule} from 'primeng/menubar';
import {ConfirmationService, ConfirmEventType, MenuItem, MessageService} from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { ListeComponent } from './liste/liste.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ListeComponent,
    AddVoitureComponent,
    HomeComponent,
    DetailComponent,
    Error404Component,
    LoginComponent,
    DeleteComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ConfirmationService,
              MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
