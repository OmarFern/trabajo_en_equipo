//Componentes stateful componente podrá cambiar sucontenido interno.
import React, { Component } from "react";


class Users extends Component {
  constructor() {
    super();
    this.state = { usuariosList: [] };}

  componentDidMount(){
      fetch("http://localhost:4010/api/usuarios")
      .then(respuesta => {  return respuesta.json() })
      .then(users=> { 
        //console.log(users.data.usuarios)
        this.setState({usuariosList: users.datos.usuarios,
                       usuarioTotal:users.datos.usuarios.length })
        })
      .catch(error => console.log(error)) 
     
    }



  render() {
    return (
      <React.Fragment>
  
      <div className="col-md-4 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Cantidad de Usuarios en la Base de Datos</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.usuarioTotal}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-users fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


       
      </React.Fragment>
    )
  }
}
export default Users;
