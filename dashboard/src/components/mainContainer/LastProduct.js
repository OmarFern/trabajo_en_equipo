//Componentes stateful componente podrá cambiar sucontenido interno.
import React, { Component } from "react";


class LastProduct extends Component {
   constructor() {
    super();
    this.state = { Product:[]  };}
 

  componentDidMount(){
    fetch("http://localhost:4010/api/productos/lastProduct")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => { 
      /*     console.log(products.meta.data[0].id) 
          console.log(products.meta.data[0].nombre) 
          console.log(products.meta.data[0].precio) 
          console.log(products.meta.data[0].descripcion) 
          console.log(products.meta.data[0].imagen)  */
      this.setState({ Product: products.meta.data[0]});  
      },[])
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>

        <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold title-sp">Último producto en la Base de Datos</h6>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                 <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '15rem' }} src={`http://localhost:4010/img/products/${this.state.Product.imagen}`} alt="" /> 
                            </div>
                            <h6 className="title-sp">Nombre del producto: {this.state.Product.nombre}</h6>
                               <p> id :{this.state.Product.id}</p>  
                            <h6 className="title-sp">Descripción del producto:</h6>
                             <p>{this.state.Product.descripcion}</p> 
                            
                        </div>
                    </div>
                </div>
     
      </React.Fragment>
    );
  }
}
export default LastProduct
;
