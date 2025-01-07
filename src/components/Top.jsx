import '../assets/css/template/template.css';

function Top() {
    return(
        <>
        <div className="container-fluid topcolor">
  <div className="container">
    <div className="d-flex justify-content-between">
      <div className="p-2">
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
      <div className="p-2">
        <div className="d-flex justify-content-center small">
          <div className="p-2">
            <a href="#" target="_blank" className="text-white">
              Ingresar
            </a>
          </div>
          <div className="p-2">
            |
          </div>
          <div className="p-2">
            <a href="#" target="_blank" className="text-white">
              Crear una cuenta
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        
        </>
    )
    
}

export default Top;