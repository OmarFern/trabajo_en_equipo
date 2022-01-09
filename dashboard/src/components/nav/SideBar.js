import React from 'react';
import image from '../../assets/images/LogoNegro.png';



function SideBar() {
    return (
        <React.Fragment>
          <div>
          <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>
                             {/* omar */}

                             <hr className="sidebar-divider"/>
    
    <div className="sidebar-heading">Principal</div>

    <li className="nav-item active">
    <a className="nav-link" href="/">
        <i className="fas fa-columns"></i>
        <span>Dashboard</span></a>
    </li><br/>


    <hr className="sidebar-divider"/>


    <div className="sidebar-heading">Links</div>

    
    <li className="nav-item">
    <a className="nav-link collapsed" href="/">
        <i className="fab fa-chrome"></i>
        <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} href="http://localhost:4010" target="_blank" rel="noopener noreferrer">Home </a></span>
    </a>
    </li>


    <li className="nav-item">
    <a className="nav-link" href="/">
        <i className="fas fa-sign-in-alt"></i>
        <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} href="http://localhost:4010/login" target="_blank" rel="noopener noreferrer">Login</a></span></a>
    </li>

    <hr className="sidebar-divider"/>

    <div className="sidebar-heading">Acciones</div>


    <li className="nav-item">
    <a className="nav-link" href="/">
        <i className="fas fa-fw fa-table"></i>
        <span>Tablas</span></a>
    </li>

    <li className="nav-item">
    <a className="nav-link" href="/">
        <i className="fas fa-balance-scale"></i>
        <span>Métricas</span></a>
    </li>

    <li className="nav-item">
    <a className="nav-link" href="/">
        <i className="fas fa-database"></i>
        <span>Base de datos</span></a>
    </li>

    <hr className="sidebar-divider"/>

    <div className="sidebar-heading">Contacto</div>

   

    <li className="nav-item">
    <a className="nav-link" href="/">
        <i className="fas fa-store"></i>
        <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} href="#" target="_blank" rel="noopener noreferrer">Contacto Locales</a></span></a>
    </li>

    <li className="nav-item">
    <a className="nav-link" href="/">
        <i className="fas fa-code"></i>
        <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} href="https://api.whatsapp.com/send?phone=5491136239182&text=Hola Omar, Nececito mas informacion!" target="_blank" rel="noopener noreferrer">Contacto Desarrolladores</a></span></a>
    </li>


    <hr className="sidebar-divider d-none d-md-block"/>



                             {/* fin */}
                </ul>
    


          </div>
        </React.Fragment>
    )
}
export default SideBar;