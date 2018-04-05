import { Injectable } from '@angular/core';

import { AppExternalScripts } from '../app.external.scripts';

declare var document: any;

@Injectable()
export class ScriptService {
    /* Propiedades (Atributos) */
    private scripts: any = {};

    /* Constructor */
    public constructor() {
        // Recorre los elementos de la constante con las referencias de los archivos externos de JavaScript
        AppExternalScripts .forEach( ( script: any ) => {
            // Agrega cada uno de los scripts a un 'Array' usando el nombre como índice
            this .scripts[ script .name ] = {
                loaded: false,
                src: script .src
            };
        });
    }

    // Carga 
    public load( ...scripts: string[] ) {
        var promises: any[] = [];

        scripts .forEach( script => promises .push( this .loadScript( script ) ) );

        return Promise .all( promises );
    }

    // Carga el Script 
    public loadScript( name: string ) {
        return new Promise( ( resolve, reject ) => {
            // Resuelve si ya esta cargado el script
            if( this .scripts[ name ] .loaded ) {
                resolve({ script: name, loaded: true, status: 'Ya está cargado' });
            }
            else {
                // Carga el Script
                let script = document .createElement( 'script' );      // Crea el elemento 'script'

                // Agrega propiedades al elemento 'script'
                script .type = 'text/javascript';
                script .src = this .scripts[ name ] .src;

                // Valida el estado de la carga del 'script' (para IE)
                if( script .readyState ) {
                    script.onreadystatechange = null;
                    this .scripts[ name ] .loaded = true;
                    resolve({ script: name, loaded: true, status: 'Cargado' });
                    /* NOTA: // 'onreadystatechange' manejador de Evento que es invodado cuando cambia el atributo 'readyState' */
                }
                else {
                    // Otros navegadores
                    script .onload = () => {
                        this .scripts[ name ] .loaded = true;
                        resolve({ script: name, loaded: true, status: 'Cargado' });
                    };
                }

                script .onerror = ( error: any ) => resolve({ script: name, loaded: false, status: 'Cargado' });
                document .getElementsByTagName( 'head' )[ 0 ] .appendChild( script );

            }
        });
    }
}
