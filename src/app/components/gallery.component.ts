import { Component } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
    selector: 'app-gallery',
    templateUrl: '../views/gallery.component.html',
    providers: [GalleryService]
})
export class GalleryComponent { 
    /* Constructor */
    public constructor( private _GalleryService: GalleryService ) {
        console.log( 'Servicio Gallery: ', _GalleryService .test() );
    }
}
