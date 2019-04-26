import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@Component({selector: 'ngbd-buttons-checkbox',

})

export class NgbdButtonsCheckbox {
  model = {
    left: true,
    middle: false,
    right: false
  };
}

export class NgbdButtonsRadio {
  model = 1;
}