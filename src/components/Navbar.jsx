import Logo from '../assets/img/logo.png';
import '../assets/css/template/template.css';
// import UserOne from '../assets/img/adminlte/user1-128x128.jpg';
// import UserEight from '../assets/img/adminlte/user8-128x128.jpg';
// import UserTree from '../assets/img/adminlte/user3-128x128.jpg';

function Navbar() {
    return(
       <>
        <div className="container py-2 py-lg-4">
  <div className="row">
    <div className="col-12 col-lg-2 mt-1">
      <div className="d-flex justify-content-center">
        <a href="../views/assets/js/index3.html" className="navbar-brand">
          <img src={Logo} className="brand-image img-fluid py-3 px-5 p-lg-0 pe-lg-3" />
        </a>
      </div>
    </div>
    <div className="col-12 col-lg-7 col-xl-8 mt-1 px-3 px-lg-0">
      <a className="nav-link float-start templatecolor" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      <div className="dropdown px-1 float-start templatecolor">
        <a id="dropdownSubMenu1" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle text-uppercase">
          <span className="d-lg-block d-none">Categorias<i className="ps-lg-2 fas fa-th-list" /></span> 
          <span className="d-lg-none d-block"><i className="fas fa-th-list" /></span> 
        </a>
        <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
          {/* Level two dropdown*/}
          <li className="dropdown-submenu dropdown-hover">
            <a id="dropdownSubMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle text-uppercase">
              <i className="fas fa-tshirt pe-2 fa-xs" /> Ropa
            </a>
            <ul className="border-0 shadow py-3 ps-3 d-block d-lg-none">
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Ropa para dama</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Ropa para hombre</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Ropa deportiva</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Ropa Infantil</a>
              </li>
            </ul>
            <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Ropa para dama</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Ropa para hombre</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Ropa deportiva</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Ropa Infantil</a>
              </li>
            </ul>
          </li>
          <li className="dropdown-submenu dropdown-hover">
            <a id="dropdownSubMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle text-uppercase">
              <i className="fas fa-shoe-prints pe-2 fa-xs" /> Calzado
            </a>
            <ul className="border-0 shadow py-3 ps-3 d-block d-lg-none">
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Calzado para dama</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Calzado para hombre</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Calzado deportiva</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Calzado Infantil</a>
              </li>
            </ul>
            <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Calzado para dama</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Calzado para hombre</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Calzado deportiva</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Calzado Infantil</a>
              </li>
            </ul>
          </li>
          <li className="dropdown-submenu dropdown-hover">
            <a id="dropdownSubMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle text-uppercase">
              <i className="fas fa-laptop pe-2 fa-xs" /> Tecnologia
            </a>
            <ul className="border-0 shadow py-3 ps-3 d-block d-lg-none">
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Telefonía Móvil</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Tablets</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Computadoras</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Audifonos</a>
              </li>
            </ul>
            <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Telefonía Móvil</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Tablets</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Computadoras</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Audifonos</a>
              </li>
            </ul>
          </li>
          <li className="dropdown-submenu dropdown-hover">
            <a id="dropdownSubMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle text-uppercase">
              <i className="fas fa-graduation-cap pe-2 fa-xs" /> Cursos
            </a>
            <ul className="border-0 shadow py-3 ps-3 d-block d-lg-none">
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Desarrollo web</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Aplicaciones moviles</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Diseño Gráfico</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Marketing Digital</a>
              </li>
            </ul>
            <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Desarrollo web</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Aplicaciones moviles</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Diseño Gráfico</a>
              </li>
              <li>
                <a tabIndex={-1} href="#" className="dropdown-item">Marketing Digital</a>
              </li>
            </ul>
          </li>
          {/* End Level two */}
        </ul>
      </div>
      {/* SEARCH FORM */}
      <form className="form-inline">
        <div className="input-group input-group w-100 me-0 me-lg-4">
          <input className="form-control rounded-0 p-3 pe-5" type="search" placeholder="Buscar..." style={{height: 40}} />
          <div className="input-group-append px-2 templatecolor">
            <button className="btn btn-navbar text-white" type="submit">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>
    </div>
    <div className="col-12 col-lg-3 col-xl-2 mt-1 px-3 px-lg-0">
      <div className="my-2 my-lg-0 d-flex justify-content-center">
        <a href="#">
          <button className="btn btn-default float-start rounded-0 border-0 py-2 px-3 templatecolor">
            <i className="fa fa-shopping-cart" />
          </button>
        </a>
        <div className="small border float-start ps-2 pe-5 w-100">
          TU CESTA <span>0</span> <br /> $ <span>0</span>
        </div>
      </div>
    </div>
  </div>
</div>

       </>
    );
}

export default Navbar;