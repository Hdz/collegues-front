import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject<Collegue>(); 
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

  modifierNom(collegue:Collegue){
    return this._http.patch<Collegue>(`${environment.backendUrl}/${collegue.matricule.toLowerCase ()}`, collegue);
  }

}
