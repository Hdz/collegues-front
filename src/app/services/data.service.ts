import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ModifCollegue } from '../models/ModifCollegue';
import { NvCollegue } from '../models/NvCollegue';
import { ColleguePhoto } from '../models/ColleguePhoto';
import { NvCommentaire } from '../models/NvCommentaire';
import { Commentaire } from '../models/Commentaire';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  subject: Subject<Collegue> = new Subject();
  tabResultat = []

  constructor(private _http: HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]> {
    return this._http.get<string[]>(`${environment.backendUrl}collegues?nomCollegue=${nom}`);
  }


  affichage(): Observable<Collegue> {
    return this.subject.asObservable();
  }

  publish(matricule: string): Observable<Collegue> {
    return this._http.get<Collegue>(`${environment.backendUrl}collegues/${matricule}`)
      .pipe(tap(col => this.subject.next(col)));
  }

  modifierCollegue(matricule: string, collegueModifie: ModifCollegue): Observable<Collegue> {

    return this._http.patch<Collegue>(`${environment.backendUrl}collegues/${matricule}`, collegueModifie);

  }

  creerCollegue(nvCollegue: NvCollegue): Observable<Collegue> {

    return this._http.post<Collegue>(`${environment.backendUrl}collegues/`, nvCollegue);

  }

  recupPhoto(): Observable<ColleguePhoto> {
    return this._http.get<ColleguePhoto>(`${environment.backendUrl}collegues/photos/`)

  }

  recupererCommentaires(matricule: string): Observable<Commentaire[]> {

    return this._http.get<Commentaire[]>(`${environment.backendUrl}/${matricule}/commentaires`);

  }

  ajouterCommentaire(commentaire: NvCommentaire, matricule: string): Observable<Commentaire> {

    return this._http.post<Commentaire>(`${environment.backendUrl}/${matricule}/commentaires`, commentaire);

  }

  supprimerCommentaire(commentaire: Commentaire, matricule: string): Observable<String> {

    return this._http.delete<string>(`${environment.backendUrl}/${matricule}/commentaires/${commentaire.id}`);

  }

}

