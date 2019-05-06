import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: ['app.component.css']
})

export class AppComponent implements OnInit{

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