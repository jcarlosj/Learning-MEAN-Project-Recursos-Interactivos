import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class SliderService {
    /* DEBUG */
    public path_image = 'assets/images/slide/slide01.jpg';

    /* Método */
    public test(): string {
        return this .path_image;
    }
}