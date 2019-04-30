import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {


  collegueList: Collegue[] = collegueMock;
  matriculeList: string[];
  resultBool: boolean = false;

  constructor() { }

  rechercher(nom: string): void {
		console.log(`Recherche : ${nom}`);
		this.resultBool = true;

		this.matriculeList = this.collegueList.filter(collegue => collegue.nom === nom).map(collegue => collegue.matricule);

	}


  ngOnInit() {
  }

}
