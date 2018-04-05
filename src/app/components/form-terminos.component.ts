import { Component } from '@angular/core';
import { ScriptService } from '../services/script.service';

@Component({
    selector: 'app-form-terminos',
    templateUrl: '../views/form-terminos.component.html',
    providers: [ ScriptService ]
})
export class FormTerminosComponent {

    /* Constructor */
    public constructor( private _ScriptService: ScriptService ) {

        // Carga el 'script' con el 'name' que esté registrado en nuestro archivo 'app.external.scripts.ts'
        this ._ScriptService .load( 'form' ) .then( data => {
            console .log( 'Script Cargado...', data );
        }) .catch( error =>  console .error( error ) );

    }
}
