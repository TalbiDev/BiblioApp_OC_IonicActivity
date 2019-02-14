import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { BiblioService } from '../../services/biblio.service';
import { BiblioElement } from '../../models/BiblioElement';
import { LendBookPage } from '../lend-book/lend-book';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
  livresListe: BiblioElement[];
  constructor(
    private biblioService: BiblioService,
     private modalCtrl: ModalController,
     private menuCtrl: MenuController) {
  }
  ionViewWillEnter(){
    this.livresListe = this.biblioService.LivresList.slice();
  }

  onLoadLivre(index:number) {
    let modal = this.modalCtrl.create(
      LendBookPage, { index: index}
      );
    modal.present();
  }
  onToggleMenu() {
    this.menuCtrl.open();

}
}
