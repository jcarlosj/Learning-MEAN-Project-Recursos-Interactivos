import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class GalleryService {
    /* DEBUG */
    public path_image = 'assets/images/gallery/01.jpg';

    /* Método */
    public test(): string {
        return this .path_image;
    }
}
