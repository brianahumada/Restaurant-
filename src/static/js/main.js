

(function() {
  "use strict";//activa el modo estricto

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {//seleccionar elementos del DOM
    el = el.trim()//elimina cualquier espacio en blanco al principio y al final del selector 
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  /*
  Esta parte de la función determina si se deben seleccionar todos los elementos que coinciden con
  el selector (all es true) o solo el primero (all es false). Si all es true, se utiliza 
  document.querySelectorAll(el) para seleccionar todos los elementos y se devuelve un array con esos 
  elementos (convertido de NodeList a un array usando el operador de propagación ...). Si all es false, 
  se utiliza document.querySelector(el) para seleccionar el primer elemento que coincide con el selector 
  y se devuelve ese elemento.
  esta función select proporciona una manera sencilla de seleccionar elementos del DOM en JavaScript, 
  ya sea seleccionando un solo elemento o todos los elementos que coinciden con un selector dado.
  */

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {//(escuchadores de eventos) a elementos del DOM de manera sencilla. 
    let selectEl = select(el, all)//seleccionar elemento previamente realizada
    if (selectEl) {
      if (all) {//si es verdadero quiere decir que selecciono un elemento
        selectEl.forEach(e => e.addEventListener(type, listener))//
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
  /*
  Esta línea define una función llamada on. La función toma cuatro parámetros: 
  type (el tipo de evento que se está escuchando, por ejemplo, "click" o "submit"), el (el elemento 
  al que se va a agregar el event listener), listener (la función que se ejecutará cuando ocurra el 
  evento) y all (un booleano que indica si se deben agregar event listeners a todos los elementos que 
  coinciden con el selector o solo al primero). La función está definida utilizando una expresión de 
  función de flecha.
  Esta línea define una función llamada on. La función toma cuatro parámetros: type (el tipo de evento 
  que se está escuchando, por ejemplo, "click" o "submit"), el (el elemento al que se va a agregar el 
  event listener), listener (la función que se ejecutará cuando ocurra el evento) y all (un booleano 
  que indica si se deben agregar event listeners a todos los elementos que coinciden con el selector o 
  solo al primero). La función está definida utilizando una expresión de función de flecha.
  */ 

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {// función llamada onscroll que facilita la adición de event listeners para el evento de desplazamiento (scroll) a un elemento del DOM. 
    el.addEventListener('scroll', listener)
  }
  /**
   * La función toma dos parámetros: el, que representa el elemento al que se va a agregar el event listener 
   * de desplazamiento, y listener, que es la función que se ejecutará cuando ocurra el evento de 
   * desplazamiento. La función está definida utilizando una expresión de función de flecha.
   * se utiliza el método addEventListener para agregar un event listener al elemento el. 
   * El evento especificado es 'scroll', que se activa cuando se produce un desplazamiento en el 
   * elemento. Cuando ocurre el evento de desplazamiento, se ejecuta la función listener, que se pasa 
   * como argumento a la función onscroll.
   */

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200//desplazamiento vertical suma 200px,activacion antes de scroll
    navbarlinks.forEach(navbarlink => {//itera sobre cada enlace de navbar
      if (!navbarlink.hash) return//si no tiene hash se omite
      let section = select(navbarlink.hash)//Se selecciona la sección correspondiente al enlace utilizando su atributo hash
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
      /**
       * Se verifica si la posición de desplazamiento del usuario está dentro del área visible de la 
       * sección correspondiente. Si es así, se agrega la clase 'active' al enlace; de lo contrario, 
       * se elimina la clase 'active'. Esto activa o desactiva visualmente los enlaces en la barra de 
       * navegación según la posición de desplazamiento del usuario.
       */
    })
  }
  window.addEventListener('load', navbarlinksActive)
  /**
   * Se agrega un event listener al objeto window que escucha el evento de carga ('load'). 
   * Cuando la página se carga por completo, se llama a la función navbarlinksActive para inicializar 
   * el estado activo de los enlaces de la barra de navegación.
   */
  onscroll(document, navbarlinksActive)//Se agrega un event listener al documento que escucha el evento de desplazamiento. 

  /**
   * Activa el estado de enlace activo en la barra de navegación mientras el usuario se desplaza por la página.
   * Utiliza la función select previamente definida con el segundo argumento establecido en true, 
   * lo que significa que se seleccionarán todos los elementos que coincidan con el selector.
   * navbarlinksActive. Esta función se encarga de determinar qué enlaces de la barra de 
   * navegación deben tener la clase 'active' basándose en la posición del desplazamiento del usuario.
   */

  /**
   * Scrolls to an element with header offset
   * desplazar la página hasta un elemento específico, considerando el desplazamiento del encabezado.
   */
  const scrollto = (el) => {//parametro el elemento que se quiere desplazar
    let header = select('#header')//id=header
    let offset = header.offsetHeight//calcular el desplazamiento del encabezado

    let elementPos = select(el).offsetTop//distancia del elemento y el borde superior del viewport
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
    /**
     * método scrollTo del objeto window para desplazar la página de manera suave (behavior: 'smooth') 
     * hasta la posición del elemento, teniendo en cuenta el desplazamiento del encabezado (offset). 
     * Se resta la altura del encabezado (offset) de la posición del elemento para garantizar que el 
     * elemento esté correctamente alineado en la parte superior del viewport después del desplazamiento.
     */
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   * cambiar dinámicamente las clases CSS del elemento con ID #header 
   * y, opcionalmente, del elemento con ID #topbar basándose en el desplazamiento de la página.
   */
  let selectHeader = select('#header')//DOM ID
  let selectTopbar = select('#topbar')
  if (selectHeader) {//Se verifica si se ha seleccionado el elemento con ID #header. 
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
      /**
       * headerScrolled, que se encarga de cambiar dinámicamente las clases de los elementos #header y 
       * #topbar en función del desplazamiento de la página. Si la posición de desplazamiento vertical 
       * (window.scrollY) es mayor que 100 píxeles, se añade la clase .header-scrolled al elemento 
       * #header y, si está presente, la clase .topbar-scrolled al elemento #topbar. De lo contrario, se 
       * eliminan esas clases.
       */
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
    /**
     * Se añade un event listener al objeto window que escucha el evento de carga ('load'). 
     * Cuando la página se carga por completo, se llama a la función headerScrolled para inicializar 
     * el estado de los elementos #header y #topbar basándose en el desplazamiento actual de la página.
     */
  }

  /**
   * Back to top button
   * implementar un botón de "Volver arriba" en la página.
   */
  let backtotop = select('.back-to-top')//Se selecciona el elemento del DOM con la clase .back-to-top utilizando la función select previamente definida.
  if (backtotop) {// verifica si se ha seleccionado el elemento con la clase .back-to-top.
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    /**
     * toggleBacktotop, que se encarga de añadir o quitar la clase .active del elemento .back-to-top 
     * basándose en el desplazamiento vertical de la página. Si la posición de desplazamiento vertical 
     * (window.scrollY) es mayor que 100 píxeles, se añade la clase .active al botón de "Volver arriba", 
     * lo que lo hace visible. De lo contrario, se quita la clase .active, ocultando el botón.
     */
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   * Funcionalidad para alternar la navegación móvil.
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })
  /**
   * agrega un event listener al documento que escucha los clics en elementos con la clase .mobile-nav-toggle. 
   * Cuando se hace clic en uno de estos elementos, se alterna la clase .navbar-mobile en el elemento 
   * con el ID #navbar, lo que cambia la apariencia de la navegación para adaptarse a dispositivos 
   * móviles. Además, se alternan las clases .bi-list y .bi-x en el elemento clicado, lo que cambia el 
   * ícono del botón entre una lista y una "X". Esto proporciona una manera de abrir y cerrar la 
   * navegación móvil.
   */

  /**
   * Mobile nav dropdowns activate
   * Menu desplegable movil
   */
  on('click', '.navbar .dropdown > a', function(e) {//escucha los click en navbar
    if (select('#navbar').classList.contains('navbar-mobile')) {//verifica si es modo mobil
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')//alterar ka clase
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   * cierra el nav movil
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });
  /**
   * este bloque de código proporciona una funcionalidad para desplazar suavemente la página hasta el 
   * elemento especificado en la URL cuando la página se carga y la URL contiene un fragmento (hash). 
   * Esto es útil para enlaces internos que apuntan a secciones específicas de una página.
   */

  /**
   * Preloader
   * Este bloque de código implementa un preloader en la página web y lo elimina una vez que la página 
   * y todos sus recursos se han cargado completamente. Esto asegura que el preloader sea visible solo 
   * durante el tiempo necesario para cargar la página.
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {//escucha el elemento load
      preloader.remove()//cuando todos los recursos necesario para la pagina sean cargado lo elimina.
    });
  }

  /**
   * Menu isotope and filter
   */
  window.addEventListener('load', () => {//una vez que la pagina activa todos los recursos se activa
    let menuContainer = select('.menu-container');
    if (menuContainer) {//verifica que menu/container alla sido seleccionado
      let menuIsotope = new Isotope(menuContainer, { //creando instancia de isotope
        itemSelector: '.menu-item',//filas ajustadas
        layoutMode: 'fitRows'
      });

      let menuFilters = select('#menu-flters li', true);//los elementos de filtro del menu deben estar en <ul>

      on('click', '#menu-flters li', function(e) { //Escuchar el evento
        e.preventDefault();//evita que se vuelva a cargar la pagina cuando hace clic
        menuFilters.forEach(function(el) {
          el.classList.remove('filter-active');//elimina el estado activo de todos los elementos del menu
        });
        this.classList.add('filter-active');//Agrega activate al filtro que hace clic

        menuIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        menuIsotope.on('arrangeComplete', function() {
          AOS.refresh()/** Esto escucha el evento arrangeComplete de Isotope, que se dispara después de 
          que se haya completado el reordenamiento de los elementos del menú. Cuando se activa este evento,se 
          actualiza la biblioteca AOS para animar los elementos recién filtrados.**/
        });
      }, true);
    }

  });

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({//instancia de GLightbox
    selector: '.glightbox' //se aplica a todos los elementos que tenga como clase glightbox
  });

  /**
 * Slider de eventos
 */
  new Swiper('.events-slider', {
  speed: 600, // Velocidad de transición de las diapositivas en milisegundos
  loop: true, // Habilitar el bucle infinito del slider
  autoplay: { // Configuración del autoplay del slider
    delay: 5000, // Tiempo en milisegundos entre cada diapositiva
    disableOnInteraction: false // No detener el autoplay cuando el usuario interactúa con el slider
  },
  slidesPerView: 'auto', // Número de diapositivas visibles por vista
  pagination: { // Configuración de la paginación del slider
    el: '.swiper-pagination', // Selector del elemento que contendrá los controles de paginación
    type: 'bullets', // Tipo de paginación (puntos, fracción, etc.)
    clickable: true // Permitir hacer clic en los puntos de paginación para navegar a las diapositivas correspondientes
  }
});

/**
 * Slider de testimonios
 */
  new Swiper('.testimonials-slider', {
  speed: 600, // Velocidad de transición de las diapositivas en milisegundos
  loop: true, // Habilitar el bucle infinito del slider
  autoplay: { // Configuración del autoplay del slider
    delay: 5000, // Tiempo en milisegundos entre cada diapositiva
    disableOnInteraction: false // No detener el autoplay cuando el usuario interactúa con el slider
  },
  slidesPerView: 'auto', // Número de diapositivas visibles por vista
  pagination: { // Configuración de la paginación del slider
    el: '.swiper-pagination', // Selector del elemento que contendrá los controles de paginación
    type: 'bullets', // Tipo de paginación (puntos, fracción, etc.)
    clickable: true // Permitir hacer clic en los puntos de paginación para navegar a las diapositivas correspondientes
  },
  breakpoints: { // Definición de puntos de quiebre responsivos
    320: { // Para pantallas de 320px o más pequeñas
      slidesPerView: 1, // Número de diapositivas visibles por vista
      spaceBetween: 20 // Espacio entre las diapositivas en píxeles
    },
    1200: { // Para pantallas de 1200px o más grandes
      slidesPerView: 3, // Número de diapositivas visibles por vista
      spaceBetween: 20 // Espacio entre las diapositivas en píxeles
    }
  }
});


  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });
  /**
   * Esta parte del código inicializa el lightbox de la galería utilizando la biblioteca glightbox. 
   * Se configura para seleccionar todos los elementos con la clase CSS gallery-lightbox y aplicar el 
   * efecto de lightbox a esos elementos. Esto permite que las imágenes de la galería se abran en un 
   * lightbox cuando se haga clic en ellas, lo que permite verlas en pantalla completa o en una ventana 
   * modal sin tener que abandonar la página
   */

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
    /**
     * Esta parte del código utiliza la biblioteca AOS (Animate On Scroll) para inicializar animaciones 
     * cuando el usuario hace scroll en la página. AOS.init() se llama cuando la página se carga 
     * completamente (window.addEventListener('load', ...)), lo que garantiza que todas las imágenes y 
     * elementos estén cargados antes de que se inicien las animaciones. Se especifican algunas opciones 
     * de configuración, como la duración de las animaciones, el tipo de función de temporización (easing), 
     * si las animaciones deben ocurrir solo una vez (once: true) y si deben reflejarse al hacer scroll 
     * hacia arriba o hacia abajo (mirror: false).
     */
  });
/* buscar solucion para= que vuelva al menu y no a la pagina de inicio.
  window.addEventListener('scroll', function() {
    var menuLink = document.getElementById('menu-link');
    var menuSection = document.getElementById('menu');
  
    var bounding = menuSection.getBoundingClientRect();
  
    if (
      bounding.top >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      menuLink.classList.add('active');
    } else {
      menuLink.classList.remove('active');
    }
  });
*/  

})()