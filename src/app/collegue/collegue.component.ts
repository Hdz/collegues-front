import { Component, Output, OnInit, Input, EventEmitter, Directive, ElementRef, HostListener } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})


export class CollegueComponent implements OnInit {
  title = 'API Collègues Front';
  isButtonVisible = true;

  @Input() col: Collegue;
  @Output() messageModif = new EventEmitter<string>();
  @Output() messageCreation = new EventEmitter<string>();
  @Output() messageValidation = new EventEmitter<string>();


  constructor() { }


  modifier() {
    this.isButtonVisible = false;
  }

  creer() {
    this.messageCreation.emit("Création d'un nouveau collègue");
  }
  valider() {
    this.messageValidation.emit("Validation d'un nouveau collègue");
    this.isButtonVisible = true;

  }

  ngOnInit() {
  }



}
