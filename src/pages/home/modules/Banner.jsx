import React from 'react';
import '../../../assets/css/banner/banner.css';
const Banner = () => {
    
  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const textStyle = {
    color: '#fff',
    textShadow: '2px 2px 5px #000',
  };

  return (
    <div className="container-fluid banner">
      <div className="container-fluid" style={overlayStyle}>
        <div className="container text-right p-5">
          <h1 className="text-uppercase" style={textStyle}>
            Ofertas especiales
          </h1>
          <h2 style={textStyle}>50% off</h2>
          <h3 style={textStyle}>Termina el 31 de Octubre</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
