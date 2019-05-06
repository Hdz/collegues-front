import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { ModifCollegue } from '../models/ModifCollegue';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  modifierClick: boolean = true;
  isButtonVisible: boolean = true;
  @Input() col: Collegue;
  colAModifier:Collegue;
  collegueModifie: ModifCollegue = new ModifCollegue();
  error: any;
  ok: string;

  constructor(private _srv : DataService) {}

  
    modifier(matricule: string) {

      this.collegueModifie.email = this.col.email;
      this.collegueModifie.photoUrl = this.col.photoUrl;
  
      this._srv.modifierCollegue(matricule, this.collegueModifie).subscribe(ok => {
        this.error = undefined;
        this.ok = `Le collègue ${this.col.nom} ${this.col.prenom} a bien été modifié`;
        setInterval(
          () => {
            this.ok = undefined;
          }, 7000
        );
      }, ko => {
        this.ok = undefined;
        this.error = ko.error;
        setInterval(
          () => {
            this.error = undefined;
          }, 7000
        );
  });
      this.isButtonVisible = false;
    }
  
  
  ngOnInit() {
    this._srv.affichage().subscribe(col => this.col = col)
  }


}
