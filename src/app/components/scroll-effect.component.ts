import { Component } from '@angular/core';
import { ScriptService } from '../services/script.service';
import { Scripts } from '../app.external.scripts';

@Component({
    selector: 'app-scroll-effect',
    templateUrl: '../views/scroll-effect.component.html',
    providers: [ ScriptService ]
})
export class ScrollEffectComponent {
    /* Propiedades (Atributos) */
    private destino: Scripts = { name: 'scroll-effect', src: '../assets/js/scroll-effect.js', loaded: true };

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