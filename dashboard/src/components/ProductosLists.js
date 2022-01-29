import React from 'react';
import propTypes from "prop-types";

function Mostrar(props){
    return(
        <React.Fragment>            
 

   {/* <body> 
  <div className="container products-wrapper"> 
  <div className="row">  
  <div className="col-12"> 
    
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
            <span>20% off </span>
       
            <i className="fas fa-truck" />
          </article>
        </a>
     </section> 
  </div>  
  </div>  
 </div>  
  </body>   */}
   {/* vemos boostrap */}

 <div className="col-12 col-sm-4 ">
 
    <h2 className="products-title">{`id :${props.id}`}</h2>
   <section className="product-box  ">  
        <a href="#">
     {/*       <figure className="product-box_image" > 
            <img className="img-fluid"  style={{ width: '15rem 100%',height:'18rem' }}src={props.imagen} alt="imagen de producto" />
          </figure>  */}
         {/*   <div className="img-block" style={{ width: '15rem',height:'28rem '}} >  */}
           <div className="img-block mx-100 mw-100 rounded mx-auto d-block d-flex align-items-center" style={{ width: '200px',height:'370px '}} > 

            <img className="img-fluid" src={props.imagen} alt="imagen de producto" />
          </div> 

           <article className="product-box_data"> 
            <h2>{props.marca.nombre}</h2>
            <span>20% off </span>
       
           <i className="fas fa-truck" /> 
           </article> 
        </a>
      </section>  
     </div>
 

  





  


   

 



 


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