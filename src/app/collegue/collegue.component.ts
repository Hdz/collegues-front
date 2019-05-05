import { Component, OnInit, Input} from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { collectExternalReferences } from '@angular/compiler';
import { ModifCollegue } from '../models/ModifCollegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})


export class CollegueComponent implements OnInit {
  title = 'API Collègues Front';
  isButtonVisible = true;

  @Input() col: Collegue;
	collegueModifie: ModifCollegue = new ModifCollegue();

  constructor(private _srv : DataService) { }


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

  ngOnInit() {
    this._srv.affichage().subscribe(col => this.col = col)
  }



}
