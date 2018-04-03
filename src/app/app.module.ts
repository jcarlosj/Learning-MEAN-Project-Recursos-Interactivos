import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './components/index.component';
import { SliderComponent } from './components/slider.component';
import { GalleryComponent } from './components/gallery.component';
import { MouseEffectComponent } from './components/mouse-effect.component';
import { ScrollEffectComponent } from './components/scroll-effect.component';
import { FormTerminosComponent } from './components/form-terminos.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SliderComponent,
    GalleryComponent,
    MouseEffectComponent,
    ScrollEffectComponent,
    FormTerminosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
