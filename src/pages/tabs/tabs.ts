import { Component } from '@angular/core';
import { BookListPage } from '../book-list/book-list';
import { CdListPage } from '../cd-list/cd-list';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

bookListPage = BookListPage;
cdListPage = CdListPage;

}
