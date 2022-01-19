import React, { Component } from "react";
import UsuariosInDb from './../UsuariosInDb';


class ProductsCategories extends Component {
  constructor() {
    super();
    this.state = {  categorias: []};
  }

  componentDidMount() {
    fetch("http://localhost:4010/api/productos/productCateg")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
      /*   console.log([data.data])
         console.log(data.data[0].nombre)
         console.log(data.data[1].nombre)
        console.log(data.data[2].nombre)
        console.log(data.data[3].nombre)
        console.log(data.data[4].nombre)
        console.log(data.data[5].nombre)  */
    
       this.setState({  categorias:data.data,
                      uno : data.data[0].nombre,
                      dos : data.data[1].nombre,
                      tres : data.data[2].nombre,
                      cuatro : data.data[3].nombre,
                      cinco : data.data[4].nombre,
                      seis : data.data[5].nombre,
                    
                    })  },[])
    /*   .catch((error) => console.log(error));  */
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
                            <h6 className="m-0 font-weight-bold title-sp">Categorías Productos</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                         <div className="card-body bgcat"> {this.state.uno}</div> 
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body bgcat"> {this.state.dos}</div> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold title-sp"> </h6>
                        </div>



                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                         <div className="card-body bgcat">{this.state.tres}</div> 
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                         <div className="card-body bgcat">{this.state.cuatro}</div> 
                                    </div>
                                </div>
                            </div>
                        </div>  

                                   {/* vemos */}
                                   <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                         <div className="card-body bgcat">{this.state.cinco}</div> 
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                         <div className="card-body bgcat">{this.state.seis}</div> 
                                    </div>
                                </div>
                            </div>
                        </div>            

                                   {/* fin */}
                    </div>
                    <UsuariosInDb/> 
                </div>
        
            
     
      </React.Fragment>
    );
  }
}
export default ProductsCategories;
;
