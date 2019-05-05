import { Component, OnInit } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { Collegue } from './models/Collegue';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: ['app.component.css']
})

export class AppComponent implements OnInit{

  title = 'Application Collègues';
  unObjetCollegueFourni;

  afficherMessage(message:string) {
    console.log(message);
    alert(message);
}
constructor(private _srv : DataService){
}

ngOnInit() {
  this.unObjetCollegueFourni = this._srv.affichage();
}
}