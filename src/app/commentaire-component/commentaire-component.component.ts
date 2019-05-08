import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Commentaire } from '../models/Commentaire';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-commentaire-component',
  templateUrl: './commentaire-component.component.html',
  styleUrls: ['./commentaire-component.component.css']
})
export class CommentaireComponentComponent implements OnInit {


	@Input() commentaire: Commentaire;
	@Input() matricule: string;
	@Output() event = new EventEmitter();

	constructor(private _service: DataService) { }

	submit(): void {
		if (confirm("Veuillez confirmer la suppression du commentaire")) {
			this._service.supprimerCommentaire(this.commentaire, this.matricule).subscribe(
				ok => {
					this.event.emit("Suppression du commentaire réalisée avec succès");
				},
				error => {
					this.event.emit(`Une erreur est survenue: ${error.error}`);
				}
			)
		}
	}

	ngOnInit() {
}

}
