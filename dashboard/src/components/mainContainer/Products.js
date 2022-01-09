
import React, { Component } from "react";
class Products extends Component {
  constructor() {
    super();
    this.state = { productosList: [] };
  }

  componentDidMount() {
    fetch("http://localhost:4010/api/productos")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        this.setState({ productosList: products.datos.productos ,
                        productosTotal: products.datos.productos.length 
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Cantidad de Productos en la Base de Datos</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.productosTotal}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




      </React.Fragment>
    );
  }
}
export default Products;
