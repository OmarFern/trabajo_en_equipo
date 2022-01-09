//Componentes stateful componente podrá cambiar sucontenido interno.
import React, { Component } from "react";

import Mostrar from './UsuariosLists';


class UsuariosInDb extends Component {
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
        {/*<!-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 
               className="m-0 font-weight-bold text-gray-800">
              
              </h6>
            </div><h2>{`El Total De Usuarios en db : ${this.state.usuarioTotal}`}</h2>
            <div className="card-body fondoCaja">
              <div className="row">
              {this.state.usuariosList.map((item, index) => { return <Mostrar {...item} key={index} />; })}  
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default UsuariosInDb;
