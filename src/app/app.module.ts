import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './components/index.component';
import { SliderComponent } from './components/slider.component';
import { GalleryComponent } from './components/gallery.component';
import { MouseEffectComponent } from './components/mouse-effect.component';
import { ScrollEffectComponent } from './components/scroll-effect.component';
import { FormTerminosComponent } from './components/form-terminos.component';
import { ApiComponent } from './components/api.component';

import { routing, appRoutingProviders } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SliderComponent,
    GalleryComponent,
    MouseEffectComponent,
    ScrollEffectComponent,
    FormTerminosComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
