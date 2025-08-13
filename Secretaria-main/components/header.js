class HeaderBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        
  <!--ENCABEZADO pagina-->

  <!--menu arriba-->
  
  <div class="" style="background-color:#ffffff;
    right: 0;
    left: 0;
    z-index: 1040; height:5px;  ">
    <div id="topbar" class="hoc clear">
      <ul class="nav" style="float:right;    margin-top: -8px;">
        <li><a href="/index.html" class="men_ap" style="color:#0c1827"><img src="/images/icons/home.png"
              style="margin-top: -5px;">Inicio</a></li>
        <li><a href="/pages/directorio.html" class="men_ap" style="color:#0c1827"><img
              src="/images/icons/directory.png" style="margin-top: -5px;"> Directorio</a></li>

        <li><a href="/pages/contacto2.html" class="men_ap" style="color:#0c1827"><img
              src="/images/icons/directory.png" style="margin-top: -5px;"> Contacto</a></li>
        <li><a href="/pages/editores.html" class="men_ap" style="color:#0c1827"><img
        src="/images/icons/directory.png" style="margin-top: -5px;"> Editores</a></li>


        <li><a href="/pages/Emergencias.html" class="men_ap" style="color:#0c1827"><img src="/images/icons/phone.png"
              style="margin-top: -5px;"> Emergencias</a></li>
        <!--li><a href="/pages/directorio.html" class="men_ap" style="color:#0c1827"> <img src="images/img-mapa_a.png"
              style="margin-top: -5px;"> Mapa de sitio</a></li-->
      </ul>
    </div>
  </div>


  <br>

  <!--encabezado-->

  <!--
  <div class="container-fluid">
    <div class="row header-row">
        <div class="headerContainer">
            <div class="imgLogos">
                <a href="/"><img src="/images/header/DFE.png" class="img-enca logo-se"></a>
            </div>
            <div class="textTitle">
                    <span><strong>Divulgación</strong><br><strong>y Fomento</strong><strong> Editorial</strong></span>
                </div>
            <div class="unam-logos">
                <a href="https://unam.mx/" target="_blank"><img src="/images/header/universidad-nacional-autonoma-de-mexico-unam-logo-004BCD00B1-seeklogo.com.png" alt="unam" class="img-enca logo-unam"></a>
                <a href="https://www.unam.mx/"><img src="/images/header/Logo95.png" class="img-enca logo-95"></a>
                <a href="https://wwwunam.mx"><img src="/images/header/LOGO (2).png" class="img-enca logo-2"></a>
            </div>
        </div>
    </div>
</div>

-->

<div class="container-fluid p-0">
    <div class="header-banner">
        <img src="/images/header/banner-unico.jpg" alt="Banner UNAM" class="img-fluid banner-img">
    </div>
</div>



  <!--MENU-->
  <nav class="navbar navbar-expand-lg" style="background-color:#003D79; font-size:85%;">
    <button class="navbar-toggler custom-toggler" style="background-color:#FFFF;" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

      <ul class="navbar-nav mx-auto align-items-center">

        <li class="nav-item active">
          <a class="nav-link text-white" href="/index.html">Inicio</a>
        </li>

        <li class="nav-item active">
          <a class="nav-link text-white" href="/pages/servicios/produccion.html">Producción<br>&nbsp&nbsp&nbspeditorial</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button"
            data-bs-toggle="dropdown" aria-expanded="false"> Servicios </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/pages/general.html">General</a></li>
            <li><a class="dropdown-item" href="/pages/servicios/produccion.html">Producción editorial</a></li>
            <li><a class="dropdown-item" href="/pages/servicios/difusion.html">Difusión</a></li>
            <li><a class="dropdown-item" href="/pages/servicios/diseno.html">Diseño</a></li>
            <li><a class="dropdown-item" href="/pages/servicios/administracion.html">Eventos</a></li>
            <li><a class="dropdown-item" href="/pages/servicios/produccion.html">Producción audiovisual</a></li>
            <li><a class="dropdown-item" href="/pages/servicios/prestamo.html">Préstamo audiovisual</a></li>
            <li><a class="dropdown-item" href="/pages/servicios/impresion.html">Imprenta</a></li>
            <li><a class="dropdown-item" href="/pages/servicios/imagen.html">Imagen institucional</a></li>
          </ul>
        </li>

        <li class="nav-item active">
          <a class="nav-link text-white" href="/pages/noticias.html">Publicaciones</a>
        </li>

        <li class="nav-item active">
          <a class="nav-link text-white" href="http://intranet.fca.unam.mx/SIAS/gui/sesion/">&nbsp&nbsp&nbsp&nbsp&nbspSIAS<br>auditorios</a>

        </li>

        <li class="nav-item active">
          <a class="nav-link text-white" href="/pages/servicios/constancias.html" target="_blank">&nbsp&nbsp&nbspConstancias y<br>reconocimientos</a>
        </li>

        <!--li class="nav-item active"></li>
        <a class="nav-link text-white" href="./pages/calendario.html">Eventos</a>
        </li-->

        <!--li class="nav-item active"></li>
        <a class="nav-link text-white" href="https://www.fca.unam.mx/seguridad/">Protocolos</a>
        </li-->

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button"
            data-bs-toggle="dropdown" aria-expanded="false"> Librerías </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/pages/general.html">Librería física</a></li>
            <li><a class="dropdown-item" href="https://publishing.fca.unam.mx">Librería electrónica</a></li>
            <li><a class="dropdown-item" href="https://www.tiendaenlinea.unam.mx/productos?filtred=seller&category_id=3&filtred_id=de&seller_id=6&category=Facultad%20de%20Contadur%C3%ADa%20y%20Administraci%C3%B3n">Tienda UNAM en línea</a></li>
          </ul>
        </li>

        <!-- Repite el patrón para las demás secciones -->
      </ul>
    </div>
  </nav>
      `;
    }
  }
  
  customElements.define('header-bar', HeaderBar);
