import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// ** import { DataService } from '../services/data.service'; DATASERVICE TP 4 */

import { DataService } from '../services/data.service';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  tabResultat = [];
  message="";
  constructor(private _srv : DataService) { } //** */ DATASERVICE TP 4


  ngOnInit() {
  }

  @Output() change: EventEmitter<string> = new EventEmitter<string>()


  rechercherParNom(nomSaisie: string) {
    this._srv.rechercherParNom(nomSaisie).subscribe(
      (tableauMatricule:any) => {
        this.tabResultat = tableauMatricule;
      },
      (error:any) =>{
        this.message = "La recherche a échoué"
      }

    );

   
    //** this.tabResultat = this._srv.rechercherParNom(nomSaisie); DATASERVICE TP4 */
  }
  
  affichage(matricule:string){
    this._srv.publish(matricule).subscribe(mat =>{ }, error => {});

  }  



}
