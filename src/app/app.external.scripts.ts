/* Interface */
interface Scripts {
    name: string;
    src: string;
}
/* Class */
export const AppExternalScripts: Scripts[] = [
    { name: 'slider', src: '../assets/js/slider.js' },
    { name: 'gallery', src: '../assets/js/gallery.js' },
    { name: 'mouse-effect', src: '../assets/js/mouse-effect.js' },
    { name: 'scroll-effect', src: '../assets/js/scroll-effect.js' },
    { name: 'form', src: '../assets/js/formulario.js' },
    { name: 'menu-mobile', src: '../assets/js/menu-movil.js' }
];

