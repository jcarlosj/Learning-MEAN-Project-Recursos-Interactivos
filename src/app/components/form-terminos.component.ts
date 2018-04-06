import { Component } from '@angular/core';
import { ScriptService } from '../services/script.service';
import { Scripts } from '../app.external.scripts';

@Component({
    selector: 'app-form-terminos',
    templateUrl: '../views/form-terminos.component.html',
    providers: [ ScriptService ]
})
export class FormTerminosComponent {
    /* Propiedades (Atributos) */
    private destino: Scripts = { name: 'form', src: '../assets/js/formulario.js', loaded: true };

    /* Constructor */
    public constructor( private _ScriptService: ScriptService ) {

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

    }
}
