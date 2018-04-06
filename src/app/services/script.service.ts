import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Scripts, ExternalScripts } from '../app.external.scripts';

@Injectable()
export class ScriptService {
    /* Propiedades (Atributos) */
    private scripts: Scripts[] = [];

    // Carga
    public load( script: Scripts ): Observable <Scripts> {

        return new Observable <Scripts> ( ( observer: Observer <Scripts> ) => {

            //var existingScript = this .scripts .find( s => s .name == script .name );

            var existingScript = this .scripts .find( script_js => {

                // Valida si la propiedad 'name' NO existe
                if( !script_js .hasOwnProperty( 'name' ) ) {
                    return false;
                }

                return true;
            });

            // Complete if already loaded
            if ( existingScript && existingScript .hasOwnProperty( 'loaded' ) ) {
                observer .next( script );
                observer .complete();
            }
            else {
                // Add the script
                this .scripts = [ ...this .scripts, script ];

                // Load the script
                let scriptElement = document .createElement( 'script' );
                scriptElement .type = 'text/javascript';
                scriptElement .src = script.src;

                scriptElement .onload = () => {
                    script .loaded = true;
                    observer .next( script );
                    observer .complete();
                };

                scriptElement .onerror = ( error: any ) => {
                    observer .error( `No puede cargar el Script ${ script .src }` );
                };

                document .getElementsByTagName( 'body' )[ 0 ] .appendChild( scriptElement );
            }

        });
    }
}
