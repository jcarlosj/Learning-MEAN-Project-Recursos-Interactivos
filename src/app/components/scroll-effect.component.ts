import { Component } from '@angular/core';
import { ScriptService } from '../services/script.service';

@Component({
    selector: 'app-scroll-effect',
    templateUrl: '../views/scroll-effect.component.html',
    providers: [ ScriptService ]
})
export class ScrollEffectComponent {

    /* Constructor */
    public constructor( private _ScriptService: ScriptService ) {

        // Carga el 'script' con el 'name' que esté registrado en nuestro archivo 'app.external.scripts.ts'
        this ._ScriptService .load( 'scroll-effect' ) .then( data => {
            console .log( 'Script Cargado...', data );
        }) .catch( error =>  console .error( error ) );

    }
}