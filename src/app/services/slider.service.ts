import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class SliderService {
    /* Porpiedades (Atributos) */
    public path_image = 'assets/images/slide/slide01.jpg';
    public urlJsonFile: any;

    /* Constructor */
    public constructor( private _http: Http ) {
        // Asigna la URL a la propiedad
        this .urlJsonFile = 'http://tutorialesatualcance.com/slide.json';
    }

    /* Métodos */
    public requestFile () {
        // Realiza petición al módulo Http de Angular pasandole la URL donde se encuentra el archivo solicitado
        return this ._http .get( this .urlJsonFile ) .map( result => result .json() );  // Mapea el resultado a través de un CallBack
    }

    public test(): string {
        return this .path_image;
    }

}
