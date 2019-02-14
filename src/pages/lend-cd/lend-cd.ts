import { Component, OnInit } from '@angular/core';
import { BiblioElement } from '../../models/BiblioElement';
import { BiblioService } from '../../services/biblio.service';
import { ViewController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit{
  cd: BiblioElement;
  index: any;


  constructor(public viewCtrl: ViewController, 
    public navParams: NavParams,
    private biblioService: BiblioService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.biblioService.CdList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
  onToggleLend() {
    this.cd.isLend = !this.cd.isLend;
  }

}
