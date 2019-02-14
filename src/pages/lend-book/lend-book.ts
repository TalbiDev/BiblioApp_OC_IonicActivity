import { Component, OnInit } from '@angular/core';
import { BiblioElement } from '../../models/BiblioElement';
import { BiblioService } from '../../services/biblio.service';
import { ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {
    livre: BiblioElement;
    index: any;

  constructor(public viewCtrl: ViewController, 
    public navParams: NavParams,
    private biblioService: BiblioService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.livre = this.biblioService.LivresList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
  onToggleLend() {
    this.livre.isLend = !this.livre.isLend;
  }

}
