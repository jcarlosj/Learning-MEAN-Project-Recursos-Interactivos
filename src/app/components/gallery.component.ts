import { Component } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
    selector: 'app-gallery',
    templateUrl: '../views/gallery.component.html',
    providers: [GalleryService]
})
export class GalleryComponent {
    /* Propiedades (Atributos) */
    public galleryJson: string;

    /* Constructor */
    public constructor( private _GalleryService: GalleryService ) {
        //console.log( 'Servicio Gallery: ', _GalleryService .test() );

        /* Hacemos un llamado al método que hace la petición a través del Servicio y usamos el 'subscribe'
           para obtener el resultado a través de un 'CallBack' y poder imprimir el 'Observable' */
        this ._GalleryService .requestFile() .subscribe(
            result => {
                this .galleryJson = result;  // Obtiene una cadena tipo JSON

                console .log( 'Todo el archivo (galeria):', this .galleryJson );

                // Recorre cada item del 'Array' para obtener los datos de cada objeto contenido en el mismo
                for( let i = 0; i < this .galleryJson .length; i++ ) {
                    console .group( `Datos del primer objeto ${ i }` );
                    console .log( 'Imagen: ', this .galleryJson[ i ][ 'foto' ] );
                    console .groupEnd();
                }

            },
            error => {
                let message = <any> error;
            }
        );

    }
}
