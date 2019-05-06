import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ColleguePhoto } from '../models/ColleguePhoto';

@Component({
  selector: 'app-gallerie-component',
  templateUrl: './gallerie-component.component.html',
  styleUrls: ['./gallerie-component.component.css']
})
export class GallerieComponentComponent implements OnInit {

  ColleguePhoto = new ColleguePhoto("","");
  tabcolleguesPhoto;
  constructor(private _srv : DataService) { }
  
  ngOnInit() {
    this._srv.recupPhoto().subscribe(colPhoto => {this.tabcolleguesPhoto=colPhoto}, err => {});

  }



  
}
