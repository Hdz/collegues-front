import { Component, OnInit } from '@angular/core';
import { NvCollegue } from '../models/NvCollegue';
import { DataService } from '../services/data.service';

@Component({
	selector: 'app-ajout-collegues',
	templateUrl: './ajout-collegues.component.html'
})
export class AjoutColleguesComponent implements OnInit {

	newCollegue: NvCollegue = new NvCollegue();

	messageErreur: string;
	messageOk: string;

	constructor(private _service: DataService) { }

	creerCollegue() {
		
		this._service.creerCollegue(this.newCollegue).subscribe(ok => {
			this.messageOk = `Le collègue ${this.newCollegue.nom} ${this.newCollegue.prenom} a bien été créé`;
			setInterval(
				() => {
					this.messageOk = undefined;
				}, 7000
			);
		}, ko => {
			this.messageErreur = ko.error;
			setInterval(
				() => {
					this.messageErreur = undefined;
				}, 7000
			);
		});

	}

	ngOnInit() {
	}

}