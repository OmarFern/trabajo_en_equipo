import React, { Component } from "react";


class ProductsCategories extends Component {
  constructor() {
    super();
    this.state = {  productosList: [] };
  }

  componentDidMount() {
    fetch("http://localhost:4010/api/productos")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        this.setState({
           
              productosList: products.datos.productos,
             productosTotal: products.datos.productos.length  
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
  {/*  <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem' }} src={this.state.productos} alt="" /> */}       
  {/*  <p>{this.state.lastProduct.name}</p>  */}
  {/*    <p>{this.state.lastProduct.description}</p> */}
  <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold title-sp">Categorías en Productos</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body bgcat">Producto más Vendido: {this.state.productosTotal}</div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body bgcat">Producto menos Vendido: {this.state.productosTotal}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold title-sp">Categorías en Usuarios</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body bgcat">Usuario con más Compras: {this.state.productosTotal}</div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body bgcat">Usuario con menos Compras: {this.state.productosTotal}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                            
            
     
      </React.Fragment>
    );
  }
}
export default ProductsCategories;
;
