import { Component, Output , OnInit, Input, EventEmitter  } from '@angular/core';
import { Collegue } from '../models/Collegue';



@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})


export class CollegueComponent implements OnInit {
  title = 'API Collègues Front';

  @Input() col: Collegue;
  @Output() messageModif = new EventEmitter<string>();
  @Output() messageCreation = new EventEmitter<string>();

  constructor() { }
 

  modifier() {
    this.messageModif.emit("Modification du collègue");
  }

  creer() {
    this.messageCreation.emit("Création d'un nouveau collègue");
}

  ngOnInit() {
  }



}
