
import { Injectable } from '@angular/core';
import { BiblioElement } from '../models/BiblioElement';

@Injectable()
export class BiblioService {
    LivresList: BiblioElement[] = [
        {
            titre: 'Livre 1',
            isLend: false
        },
        {
            titre: 'Livre 2',
            isLend: false
        },
        {
            titre: 'Livre 3',
            isLend: false
        },
        {
            titre: 'Livre 4',
            isLend: false
        },
        {
            titre: 'Livre 5',
            isLend: false
        }

    ];
    CdList: BiblioElement[] = [
        {
            titre: 'CD 1',
            isLend: false
        },
        {
            titre: 'CD 2',
            isLend: false
        },
        {
            titre: 'CD 3',
            isLend: false
        },
        {
            titre: 'CD 4',
            isLend: false
        },
        {
            titre: 'CD 5',
            isLend: false
        }

    ];

}
