import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  isButtonVisible = true;


  @Input() col: Collegue;
  colAModifier:Collegue;

  constructor(private _srv : DataService) {}

  ngOnInit() {
    this._srv.affichage().subscribe(col => this.col = col)
  }

  modifier() {
    console.log(`Modification du collègue ${this.col.nom}`);
    this.isButtonVisible = false;
  }

  creer() {
    console.log(`Création d'un nouveau collègue`);
    this.isButtonVisible = true;

    }

  valider() {
    console.log(`Validation d'un nouveau collègue`);
    this.isButtonVisible = true;

  }

  retablirEmail(retablir:boolean) {
    if (retablir) {
      this.colAModifier.email = this.col.email;
    }
}

}
