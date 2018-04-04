import { Component } from '@angular/core';
import { SliderService } from '../services/slider.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-slider',
    templateUrl: '../views/slider.component.html',
    providers: [ SliderService ]
})
export class SliderComponent {
    /* Propiedades (Atributos) */
    public slideJson: string;

    /* Constructor */
    public constructor( private _SliderService: SliderService ) {
        // console .log( 'Servicio Slider: ', _SliderService .test() );      // DEBUG

        /* Hacemos un llamado al método que hace la petición a través del Servicio y usamos el 'subscribe'
           para obtener el resultado a través de un 'CallBack' y poder imprimir el 'Observable' */
        this ._SliderService .requestFile() .subscribe(
            result => {
                this .slideJson = result;  // Obtiene una cadena tipo JSON

                console .log( 'Todo el archivo:', this .slideJson );

                // Recorre cada item del 'Array' para obtener los datos de cada objeto contenido en el mismo
                for( let i = 0; i < this .slideJson .length; i++ ) {
                    console .group( `Datos del primer objeto ${ i }` );
                    console .log( 'Título: ', this .slideJson[ i ][ 'titulo' ] );
                    console .log( 'Descripción: ', this .slideJson[ i ][ 'descripcion' ] );
                    console .log( 'Imagen: ', this .slideJson[ i ][ 'imagen' ] );
                    console .groupEnd();
                }

            },
            error => {
                let message = <any> error;
            }
        );

    }
}
