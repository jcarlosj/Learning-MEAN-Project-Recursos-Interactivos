/* Interface */
export interface Scripts {
    name: string,
    src: string,
    loaded: boolean
}
export const ExternalScripts: Scripts[] = [
    { name: 'slider', src: '../assets/js/slider.js', loaded: true },
    { name: 'gallery', src: '../assets/js/gallery.js', loaded: true },
    { name: 'mouse-effect', src: '../assets/js/mouse-effect.js', loaded: true },
    { name: 'scroll-effect', src: '../assets/js/scroll-effect.js', loaded: true },
    { name: 'form', src: '../assets/js/formulario.js', loaded: true },
    { name: 'menu-mobile', src: '../assets/js/menu-movil.js', loaded: true }
];
