import '../assets/css/template/template.css';

function Footer() {
    return (
        <>
        <div>
  <div className="container-fluid bg-dark small">
    <div className="container py-5 text-light">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div className="col row">
          <div className="col-12 col-ms-4 col-md-3 col-lg-4">
            <h4 className="lead">
              <a href="#" className="text-uppercase">Ropa</a>
            </h4>
            <hr className="border-white" />
            <ul>
              <li>
                <a href="#">Ropa para damas</a>
              </li>
              <li>
                <a href="#">Ropa para hombres</a>
              </li>
              <li>
                <a href="#">Ropa Deportiva</a>
              </li>
              <li>
                <a href="#">Ropa Infantil</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-ms-4 col-md-3 col-lg-4">
            <h4 className="lead">
              <a href="#" className="text-uppercase">Calzado</a>
            </h4>
            <hr className="border-white" />
            <ul>
              <li>
                <a href="#">Calzado para damas</a>
              </li>
              <li>
                <a href="#">Calzado para hombres</a>
              </li>
              <li>
                <a href="#">Calzado Deportivo</a>
              </li>
              <li>
                <a href="#">Calzado Infantil</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-ms-4 col-md-3 col-lg-4">
            <h4 className="lead">
              <a href="#" className="text-uppercase">Tecnología</a>
            </h4>
            <hr className="border-white" />
            <ul>
              <li>
                <a href="#">Ropa para damas</a>
              </li>
              <li>
                <a href="#">Ropa para hombres</a>
              </li>
              <li>
                <a href="#">Ropa Deportiva</a>
              </li>
              <li>
                <a href="#">Ropa Infantil</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-ms-4 col-md-3 col-lg-4">
            <h4 className="lead">
              <a href="#" className="text-uppercase">Cursos</a>
            </h4>
            <hr className="border-white" />
            <ul>
              <li>
                <a href="#">Ropa para damas</a>
              </li>
              <li>
                <a href="#">Ropa para hombres</a>
              </li>
              <li>
                <a href="#">Ropa Deportiva</a>
              </li>
              <li>
                <a href="#">Ropa Infantil</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col my-3 my-lg-0 px-lg-5 text-light">
          <h1 className="lead small">Dudas e inquietudes, contactenos en:</h1>
          <br />
          <h1 className="lead small">
            <i className="fa fa-phone-square pe-2" /> (555) 123 456 7890
            <br /><br />
            <i className="fa fa-envelope pe-2" /> soporte@tiendavirtual.com
            <br /><br />
            <i className="fa fa-map-marker pe-2" /> calle 123, ciudad, pais
            <br /><br />
            Santiago, Chile
          </h1>
          <iframe className="mt-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.264516667588!2d-70.65652042494901!3d-33.44241439709959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a6fd47e465%3A0x5d0fa12b4d88ae82!2sPalacio%20de%20La%20Moneda!5e0!3m2!1ses!2scl!4v1735005893953!5m2!1ses!2scl" width="100%" height={200} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="col small my-3 my-lg-0">
          <h4>RESUELVA SU INQUIETUD</h4>
          <form role="form" method="post">
            <div className="mb-3 mt-3">
              <input type="text" className="form-control" id="nombreContactenos" placeholder="Escriba" name="nombreContactenos" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="emailContactenos" placeholder="Escriba su correo electronico" name="emailContactenos" />
            </div>
            <div className="mt-3">
              <textarea className="form-control" rows={5} id="comment" name="text" defaultValue={""} />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Main Footer */}
  <footer className="main-footer topcolor" >
    <div className="container">
      {/* To the right */}
      <div className="float-end">
        <div className="d-flex justify-content-center">
          <div className="p-2">
            <a href="http://facebook.com" target="_blank" className="text-white">
              <i className="fab fa-facebook-f" />
            </a>
          </div>
          <div className="p-2">
            <a href="http://youtube.com" target="_blank" className="text-white">
              <i className="fab fa-youtube" />
            </a>
          </div>
          <div className="p-2">
            <a href="http://twitter.com" className="text-white">
              <i className="fab fa-twitter" />
            </a>
          </div>
          <div className="p-2">
            <a href="http://instagram.com" className="text-white">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      {/* Default to the left */}
      <small>© {/*?php echo date("Y") ?*/}Todos los derechos reservados.</small> 
    </div>
  </footer>
</div>

        </>
    )
}

export default Footer;