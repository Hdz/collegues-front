import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { ActivatedRoute } from '@angular/router';
import { NvCommentaire } from '../models/NvCommentaire';
import { Commentaire } from '../models/Commentaire';

@Component({
  selector: 'app-detail-collegue-component',
  templateUrl: './detail-collegue-component.component.html',
})

export class DetailCollegueComponentComponent implements OnInit {


	matricule: string;
	collegue: Collegue;
	message: string;
	messageOk: string;
	erreur: string;
	nvComment: NvCommentaire = new NvCommentaire();
	commentaires: Commentaire[];

	constructor(private _srv: DataService, private route: ActivatedRoute) { }

	updateListAfterDelete(): void {
		this.updateCommentList(`Le commentaire a été supprimé avec succès`);		
	}

	saveNewComment(): void {
		if (this.nvComment.contenu.length >= 5) {
			this._srv.ajouterCommentaire(this.nvComment, this.matricule).subscribe(
				ok => {
					this.updateCommentList("Le commentaire a été ajouté avec succès");
				},
				error => {
					this.message = `${error.error}`;
					setInterval(
						() => {
							this.message = undefined;
						}, 7000
					);
				}
			);
		}
	}

	updateCommentList(message?: string) {
		this._srv.recupererCommentaires(this.matricule).subscribe(
			commentaireList => {
				this.commentaires = commentaireList;
				if (message) {
					this.messageOk = message;
					setInterval(
						() => {
							this.messageOk = undefined;
						}, 7000
					);
				}
			},
			error => {
				this.message = `Une erreur est survenue : ${error.error}`;
				setInterval(
					() => {
						this.message = undefined;
					}, 7000
				);
			}
		);
	}

	ngOnInit() {
		
		this.matricule = this.route.snapshot.paramMap.get("matricule");
		
		this._srv.affichage().subscribe(
			collegue => this.collegue = collegue,
			error => this.message = `${error.error}`
		);

		this.updateCommentList();

	}

}