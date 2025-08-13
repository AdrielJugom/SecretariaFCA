class FooterMenu extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
<!--PIE-->

<footer class="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style="margin-top: 90px;">
  <div class="row pt-5">
    <div class="col-lg-3 col-md-6 mb-5">
      <a href="" class="navbar-brand">
        <h1 class="text-primary"><span class="text-white">S</span>D<span class="text-white">F</span>E</h1>
      </a>
      <p>Somos la Editorial de la Facultad de Contaduría y administración, una entidad comprometida con el desarrollo
        académico y la difusión del conocimiento</p>
      <h6 class="text-white text-uppercase mt-4 mb-3" style="letter-spacing: 5px;">Siguenos</h6>
      <div class="d-flex justify-content-start gap-2">
        <a class="btn btn-outline-primary btn-square" href="#"><i class="fab fa-twitter"></i></a>
        <a class="btn btn-outline-primary btn-square" href="#"><i class="fab fa-facebook-f"></i></a>
        <a class="btn btn-outline-primary btn-square" href="#"><i class="fab fa-linkedin-in"></i></a>
        <a class="btn btn-outline-primary btn-square" href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 mb-5">
      <h5 class="text-white text-uppercase mb-4" style="letter-spacing: 5px;">Servicios
      </h5>
      <div class="d-flex flex-column justify-content-start">
        <a class="text-white-50 mb-2" href="/pages/general.html"><i class="fa fa-angle-right me-2"></i>Produccion
          editorial</a>
        <a class="text-white-50 mb-2" href="/pages/servicios/difusion.html"><i
            class="fa fa-angle-right me-2"></i>Difusion</a>
        <a class="text-white-50 mb-2" href="/pages/servicios/diseno.html"><i class="fa fa-angle-right me-2"></i>Diseño
          Gráfico</a>
        <a class="text-white-50 mb-2" href="/pages/servicios/administracion.html"><i
            class="fa fa-angle-right me-2"></i>Eventos y Administracion</a>
        <a class="text-white-50 mb-2" href="/pages/servicios/produccion.html"><i
            class="fa fa-angle-right me-2"></i>Produccion Audiovisual</a>
        <a class="text-white-50 mb-2" href="/pages/servicios/prestamo.html"><i
            class="fa fa-angle-right me-2"></i>Prestamo Audiovisual</a>
        <a class="text-white-50" href="/pages/servicios/impresion.html"><i
            class="fa fa-angle-right me-2"></i>Imprenta</a>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 mb-5">
      <h5 class="text-white text-uppercase mb-4" style="letter-spacing: 5px;">Enlaces</h5>
      <div class="d-flex flex-column justify-content-start">
        <a class="text-white-50 mb-2" href="/pages/acerca.html"><i class="fa fa-angle-right me-2"></i>Acerca</a>
        <a class="text-white-50 mb-2" href="https://www.fca.unam.mx" target="_blank"><i
            class="fa fa-angle-right me-2"></i>FCA</a>
        <a class="text-white-50 mb-2" href="/pages/calendario.html"><i class="fa fa-angle-right me-2"></i>Eventos</a>
        <a class="text-white-50 mb-2" href="/pages/publicaciones.html"><i
            class="fa fa-angle-right me-2"></i>Publicaciones</a>
        <a class="text-white-50 mb-2" href="/pages/audiovisual.html"><i class="fa fa-angle-right me-2"></i>Medio
          audiovisual</a>
        <a class="text-white-50 mb-2" href="/pages/general.html"><i class="fa fa-angle-right me-2"></i>Servicios</a>
        <a class="text-white-50" href="/pages/galeria.html"><i class="fa fa-angle-right me-2"></i>Galeria</a>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 mb-5">
      <h5 class="text-white text-uppercase mb-4" style="letter-spacing: 5px;">Contacto</h5>
      <p><i class="fa fa-map-marker-alt me-2"></i>FCA UNAM CDMX </p>
      <p><i class="fa fa-phone-alt me-2"></i>+012 345 67890</p>
      <p><i class="fa fa-envelope me-2"></i>servicios.fca.unam.mx</p>
    </div>
  </div>
</footer>
<div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
  style="border-color: rgba(256, 256, 256, .1) !important;">
  <div class="row">
    <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
      <p class="m-0 text-white-50">Copyright &copy; <a href="#">Domain</a>. All Rights Reserved.</a></p>
    </div>
    <div class="col-lg-6 text-center text-md-right">
    </div>
  </div>
</div>
`;
    }
  }
  
  customElements.define('footer-menu', FooterMenu);