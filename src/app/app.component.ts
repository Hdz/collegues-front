import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { Collegue } from './models/Collegue';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: ['./app.component.css']
})

export class AppComponent {
  unObjetCollegueFourni : Collegue[] = collegueMock;;
  title = 'API Collègues Front';

  afficherMessage(message:string) {
    console.log(message);
    alert(message);
}
}