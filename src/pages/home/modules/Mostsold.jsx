import React, { useState } from "react";
import CursoOne from "../../../assets/img/products/cursos/1/curso01.jpg";
import CursoTwo from "../../../assets/img/products/cursos/2/curso02.jpg";
import CursoThree from "../../../assets/img/products/cursos/3/curso03.jpg";
import CursoFour from "../../../assets/img/products/cursos/4/curso04.jpg";

function Mostsold() {
    const [viewType, setViewType] = useState("grid"); // Estado para controlar el tipo de vista
      
        const handleViewToggle = (type) => {
          setViewType(type); // Actualiza el estado con "grid" o "list"
        };
    return (
        <>
    <div>
              <div className="container-fluid bg-light border">
                <div className="container clearfix">
                  <div className="btn-group float-end p-2">
                    <button
                      className={`btn btn-default btnView ${
                        viewType === "grid" ? "bg-white" : ""
                      }`}
                      onClick={() => handleViewToggle("grid")}
                    >
                      <i className="fas fa-th fa-xs pe-1" />
                      <span className="col-xs-0 float-end small mt-1">GRID</span>
                    </button>
                    <button
                      className={`btn btn-default btnView ${
                        viewType === "list" ? "bg-white" : ""
                      }`}
                      onClick={() => handleViewToggle("list")}
                    >
                      <i className="fas fa-list fa-xs pe-1" />
                      <span className="col-xs-0 float-end small mt-1">LIST</span>
                    </button>
                  </div>
                </div>
              </div>
      
              <div className="container-fluid bg-white">
                <div className="container">
                  <div className="clearfix pt-3 pb-0 px-2">
                    <h4 className="float-start text-uppercase pt-2">
                      Artículos Gratuitos
                    </h4>
                    <span className="float-end">
                      <a href="#" className="btn btn-default templateColor">
                        <small>
                          VER MÁS <i className="fas fa-chevron-right" />
                        </small>
                      </a>
                    </span>
                  </div>
                  <hr style={{ color: "#666" }} />
      
                  {/* Vista GRID */}
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-md-4 pt-3 pb-4"
                    style={{ display: viewType === "grid" ? "flex" : "none" }}
                  >
                    {[CursoOne, CursoTwo, CursoThree, CursoFour].map(
                      (img, index) => (
                        <div className="col px-3 py-2 py-lg-0" key={index}>
                          <a href="#">
                            <figure className="imgProduct">
                              <img src={img} className="img-fluid" alt="Producto" />
                            </figure>
                            <h5>
                              <small className="text-uppercase text-muted">
                                Nombre del Producto {index + 1}
                              </small>
                            </h5>
                          </a>
                          <h6>
                            <span className="badge badgeNew bg-warning text-uppercase text-white mt-1 p-2">
                              Nuevo
                            </span>
                          </h6>
                          <div className="clearfix">
                            <h5 className="float-start text-uppercase text-muted">
                              <small>Gratis</small>
                            </h5>
                            <span className="float-end">
                              <div className="btn-group btn-group-sm">
                                <button
                                  type="button"
                                  className="btn btn-light border"
                                >
                                  <i className="fas fa-heart" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-light border"
                                >
                                  <i className="fas fa-eye" />
                                </button>
                              </div>
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
      
                  {/* Vista LIST */}
                  <div
                    className="row pt-3 pb-4"
                    style={{ display: viewType === "list" ? "block" : "none" }}
                  >
                    {[CursoOne, CursoTwo, CursoThree, CursoFour].map(
                      (img, index) => (
                        <div className="media border-bottom px-3 pt-4 pb-3" key={index}>
                          <figure className="imgProduct">
                            <img
                              src={img}
                              className="img-fluid"
                              style={{ width: 150 }}
                              alt="Producto"
                            />
                          </figure>
                          <div className="media-body ps-3">
                            <h5>
                              <small className="text-uppercase text-muted">
                                Nombre del Producto {index + 1}
                              </small>
                            </h5>
                            <span className="badge badgeNew bg-warning text-uppercase text-white p-2">
                              Nuevo
                            </span>
                            <p className="my-2">
                              Descripción del producto {index + 1}. Lorem ipsum dolor
                              sit amet, consectetur adipiscing elit.
                            </p>
                            <div className="clearfix">
                              <h5 className="float-start text-uppercase text-muted">
                                <small>Gratis</small>
                              </h5>
                              <span className="float-end">
                                <div className="btn-group btn-group-sm">
                                  <button
                                    type="button"
                                    className="btn btn-light border"
                                  >
                                    <i className="fas fa-heart" />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-light border"
                                  >
                                    <i className="fas fa-eye" />
                                  </button>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            
        </>
    )
    
}

export default Mostsold;