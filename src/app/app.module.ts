import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { FormComponent } from './form/form.component';
import { AjoutColleguesComponent } from './ajout-collegues/ajout-collegues.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { ROUTES } from './app.routes'

import { RouterModule } from '@angular/router';
import { GallerieComponentComponent } from './gallerie-component/gallerie-component.component';
import { AproposComponentComponent } from './apropos-component/apropos-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DetailCollegueComponentComponent } from './detail-collegue-component/detail-collegue-component.component';
import { CommentaireComponentComponent } from './commentaire-component/commentaire-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    FormComponent,
    AjoutColleguesComponent,
    EmailValidatorDirective,
    MenuComponentComponent,
    GallerieComponentComponent,
    AproposComponentComponent,
    HomeComponentComponent,
    DetailCollegueComponentComponent,
    CommentaireComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


