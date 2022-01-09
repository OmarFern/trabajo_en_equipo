import React from 'react';
import propTypes from "prop-types";

function Mostrar(props){
    return(
        <React.Fragment>            

  {/* cambio */}
  <body>
<div className="container products-wrapper">
  <div className="row">
    <div className="col-12">
     {/*  <h2 className="products-title">Todos los productos</h2> */}
      <h2 className="products-title">{`id :${props.id}`}</h2>
    </div>
    <div className="col-12 col-sm-6 col-lg-3">
      <section className="product-box">
        <a href="#">
          <figure className="product-box_image">
            <img  src={props.imagen} alt="imagen de producto" />
          </figure>
          <article className="product-box_data">
            <h2>{props.marca.nombre}</h2>
            <span>... </span>
            <p> 20% OFF</p>
            <i className="fas fa-truck" />
          </article>
        </a>
      </section>
    </div>
  </div>
</div>
</body>


 


        </React.Fragment>

    )
}
Mostrar.propTypes={ 
  nombre: propTypes.string,
  id: propTypes.number,
  imagen: propTypes.string,
  marca: propTypes.string
}

export default Mostrar;