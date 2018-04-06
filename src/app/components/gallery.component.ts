import { Component } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { ScriptService } from '../services/script.service';
import { Scripts } from '../app.external.scripts';

@Component({
    selector: 'app-gallery',
    templateUrl: '../views/gallery.component.html',
    providers: [ GalleryService, ScriptService ]
})
export class GalleryComponent {
    /* Propiedades (Atributos) */
    public galleryJson: string;
    private destino: Scripts = { name: 'gallery', src: '../assets/js/gallery.js', loaded: true };

    /* Constructor */
    public constructor( private _GalleryService: GalleryService, private _ScriptService: ScriptService ) {
        //console.log( 'Servicio Gallery: ', _GalleryService .test() );

        // Carga el 'script' con el 'name' que esté registrado en nuestro archivo 'app.external.scripts.ts'
        this._ScriptService.load( this .destino ) .subscribe(
            result => {
                console .log( 'Script Cargado ..', result );
            },
            error => {
                let message = <any> error;
                console .log( message );
            }
        );

        /* Hacemos un llamado al método que hace la petición a través del Servicio y usamos el 'subscribe'
           para obtener el resultado a través de un 'CallBack' y poder imprimir el 'Observable' */
        this ._GalleryService .requestFile() .subscribe(
            result => {
                this .galleryJson = result;  // Obtiene una cadena tipo JSON

                console .log( 'Todo el archivo (galeria):', this .galleryJson );

                // Recorre cada item del 'Array' para obtener los datos de cada objeto contenido en el mismo
                /*for( let i = 0; i < this .galleryJson .length; i++ ) {
                    console .group( `Datos del primer objeto ${ i }` );
                    console .log( 'Imagen: ', this .galleryJson[ i ][ 'foto' ] );
                    console .groupEnd();
                }*/

            },
            error => {
                let message = <any> error;
            }
        );

    }
}
