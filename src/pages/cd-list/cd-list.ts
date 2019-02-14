import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { BiblioService } from '../../services/biblio.service';
import { LendCdPage } from '../lend-cd/lend-cd';
import { BiblioElement } from '../../models/BiblioElement';

/**
 * Generated class for the CdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {
  cdListe: BiblioElement[];
  constructor(
    private biblioService: BiblioService,
     private modalCtrl: ModalController,
     private menuCtrl: MenuController) {
  }
  ionViewWillEnter(){
    this.cdListe = this.biblioService.CdList.slice();
  }

  onLoadCd(index:number) {
    let modal = this.modalCtrl.create(
      LendCdPage, { index: index}
      );
    modal.present();
  }
  onToggleMenu() {
    this.menuCtrl.open();

}

}
