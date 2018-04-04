import { Component } from '@angular/core';
import { SliderService } from '../services/slider.service';

@Component({
    selector: 'app-slider',
    templateUrl: '../views/slider.component.html',
    providers: [ SliderService ]
})
export class SliderComponent {
    /* Constructor */
    public constructor( private _SliderService: SliderService ) {
        console .log( 'Servicio Slider: ', _SliderService .test() );
    }
}